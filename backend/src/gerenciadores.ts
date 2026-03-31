import { PrismaClient } from "./generated";
const prisma = new PrismaClient();

export class ProfissionalGerenciador {
  async inserir(nome: string, especialidade: string) {
    return await prisma.profissionais.create({
      data: { nome, especialidade },
    });
  }

  async listarTodos() {
    return await prisma.profissionais.findMany();
  }
}

export class ServicoGerenciador {
  async inserir(descricao: string, preco: number) {
    return await prisma.servicos.create({
      data: { descricao, preco },
    });
  }

  async listarTodos() {
    return await prisma.servicos.findMany();
  }
}

export class AgendamentoGerenciador {
  async agendar(
    clienteId: number,
    profissionalId: number,
    servicosIds: number[],
    data: string,
  ) {
    // Verificacao de agendamento duplicado no mesmo horario com o mesmo profissional
    const dataAgendamento = new Date(data);
    const agendamentoExistente = await prisma.agendamentos.findFirst({
      where: {
        profissionalId,
        dataHora: dataAgendamento,
      }
    });

    if (agendamentoExistente) {
      throw new Error("Profissional já possui um agendamento nesse horário.");
    }

    const clienteExistente = await prisma.agendamentos.findFirst({
      where: {
        clienteId,
        dataHora: dataAgendamento,
      }
    });

    if (clienteExistente) {
      throw new Error("Cliente já possui um agendamento nesse horário.");
    }

    return await prisma.agendamentos.create({
      data: {
        clienteId,
        profissionalId,
        dataHora: dataAgendamento,
        servicos: {
          connect: servicosIds.map(id => ({ id }))
        }
      },
      include: {
        cliente: true,
        profissional: true,
        servicos: true,
      },
    });
  }

  async exibirUmComHistorico(id: number) {
    const agendamento = await prisma.agendamentos.findUnique({
      where: { id },
      include: {
        cliente: true,
        profissional: true,
        servicos: true
      }
    });

    if (!agendamento) return null;

    // Buscar histórico do mesmo cliente
    const historico = await prisma.agendamentos.findMany({
      where: {
        clienteId: agendamento.clienteId,
        id: { not: id } // excluir o agendamento atual
      },
      include: {
        profissional: true,
        servicos: true
      },
      orderBy: {
        dataHora: 'desc'
      }
    });

    return { ...agendamento, historico };
  }

  async listarRelatorio() {
    return await prisma.agendamentos.findMany({
      include: {
        cliente: { select: { nome: true } },
        profissional: { select: { nome: true } },
        servicos: { select: { descricao: true, preco: true } },
      },
    });
  }

  async cancelar(id: number) {
    return await prisma.agendamentos.delete({
      where: { id }
    });
  }
}

export class VendedorGerenciador {
  async inserir(nome: string) {
    return await prisma.vendedores.create({
      data: { nome }
    });
  }

  async listarTodos() {
    return await prisma.vendedores.findMany();
  }
}

export class ProdutoGerenciador {
  async inserir(nome: string, preco: number, categoria: string, fabricadoEmMari: boolean, estoque: number) {
    return await prisma.produtos.create({
      data: { nome, preco, categoria, fabricadoEmMari, estoque }
    });
  }

  async listar(filtros: any) {
    const where: any = {};
    if (filtros.nome) {
      where.nome = { contains: filtros.nome };
    }
    if (filtros.categoria) {
      where.categoria = { contains: filtros.categoria };
    }
    if (filtros.precoMin || filtros.precoMax) {
      where.preco = {};
      if (filtros.precoMin) where.preco.gte = parseFloat(filtros.precoMin);
      if (filtros.precoMax) where.preco.lte = parseFloat(filtros.precoMax);
    }
    if (filtros.fabricadoEmMari !== undefined) {
      where.fabricadoEmMari = filtros.fabricadoEmMari === 'true' || filtros.fabricadoEmMari === true;
    }
    if (filtros.baixoEstoque === 'true' || filtros.baixoEstoque === true) {
      where.estoque = { lt: 5 };
    }

    return await prisma.produtos.findMany({ where });
  }
}

export class VendaGerenciador {
  async registrarVenda(
    clienteId: number,
    vendedorId: number,
    formaPagamento: string,
    itens: { produtoId: number; quantidade: number; precoUnitario: number }[]
  ) {
    // 1. Verify stock for all items
    for (const item of itens) {
      const p = await prisma.produtos.findUnique({ where: { id: item.produtoId } });
      if (!p || p.estoque < item.quantidade) {
        throw new Error(`Estoque insuficiente para o produto ID ${item.produtoId}`);
      }
    }

    // 2. Fetch client to apply discount
    const cliente = await prisma.clientes.findUnique({ where: { id: clienteId } });
    if (!cliente) throw new Error("Cliente não encontrado.");

    let subtotal = itens.reduce((acc, item) => acc + (item.quantidade * item.precoUnitario), 0);
    
    // Aplica desconto (10%) se isFlamengo = true, assisteOP = true ou cidade de nascimento for Sousa
    if (cliente.isFlamengo || cliente.assisteOP || (cliente.cidadeNascimento && cliente.cidadeNascimento.toLowerCase() === 'sousa')) {
      subtotal = subtotal * 0.9;
    }

    // Default status according to method
    let statusPagamento = "Confirmado";
    if (["boleto"].includes(formaPagamento.toLowerCase())) {
        statusPagamento = "Pendente";
    }

    // Transaction to create sale and update stock
    return await prisma.$transaction(async (tx) => {
      const venda = await tx.vendas.create({
        data: {
          clienteId,
          vendedorId,
          formaPagamento,
          statusPagamento,
          valorTotal: subtotal,
          itens: {
            create: itens.map(i => ({
              produtoId: i.produtoId,
              quantidade: i.quantidade,
              precoUnitario: i.precoUnitario
            }))
          }
        },
        include: { itens: true }
      });

      for (const item of itens) {
        await tx.produtos.update({
          where: { id: item.produtoId },
          data: { estoque: { decrement: item.quantidade } }
        });
      }

      return venda;
    });
  }

  async exibirVendasCliente(clienteId: number) {
    return await prisma.vendas.findMany({
      where: { clienteId },
      include: {
        vendedor: true,
        itens: { include: { produto: true } }
      },
      orderBy: { dataHora: 'desc' }
    });
  }
}
