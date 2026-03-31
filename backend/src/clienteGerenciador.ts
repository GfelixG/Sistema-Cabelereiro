import { PrismaClient } from "./generated";

const prisma = new PrismaClient();

export class ClienteGerenciador {
  async inserir(nome: string, telefone: string, email?: string, isFlamengo: boolean = false, assisteOP: boolean = false, cidadeNascimento?: string) {
    return await prisma.clientes.create({
      data: { nome, telefone, email: email || null, isFlamengo, assisteOP, cidadeNascimento: cidadeNascimento || null },
    });
  }

  async alterar(id: number, nome: string, telefone: string, email?: string, isFlamengo: boolean = false, assisteOP: boolean = false, cidadeNascimento?: string) {
    return await prisma.clientes.update({
      where: { id },
      data: { nome, telefone, email: email || null, isFlamengo, assisteOP, cidadeNascimento: cidadeNascimento || null },
    });
  }

  async pesquisarPorNome(nome: string) {
    return await prisma.clientes.findMany({
      where: {
        nome: { contains: nome },
      },
    });
  }

  async remover(id: number) {
    return await prisma.$transaction([
      prisma.agendamentos.deleteMany({ where: { clienteId: id } }),
      prisma.vendas.deleteMany({ where: { clienteId: id } }),
      prisma.clientes.delete({ where: { id } })
    ]);
  }

  async listarTodos() {
    return await prisma.clientes.findMany();
  }

  async exibirUm(id: number) {
    return await prisma.clientes.findUnique({
      where: { id },
    });
  }

  async gerarRelatorio() {
    const totalClientes = await prisma.clientes.count();
    const agendamentos = await prisma.agendamentos.findMany({
      include: { servicos: true },
    });

    const vendas = await prisma.vendas.findMany({
      include: { itens: { include: { produto: true } } }
    });
    
    let faturamentoVendas = 0;
    const metodosPagamento: Record<string, number> = {};
    const produtosCount: Record<string, number> = {};

    vendas.forEach(v => {
      faturamentoVendas += v.valorTotal;
      
      const forma = v.formaPagamento || "Outros";
      metodosPagamento[forma] = (metodosPagamento[forma] || 0) + v.valorTotal;
      
      v.itens.forEach(i => {
         if (i.produto?.nome) {
           produtosCount[i.produto.nome] = (produtosCount[i.produto.nome] || 0) + i.quantidade;
         }
      });
    });

    let faturamentoServicos = 0;
    const servicosCount: Record<string, number> = {};

    agendamentos.forEach((ag) => {
      ag.servicos.forEach(servico => {
        faturamentoServicos += servico.preco;
        const desc = servico.descricao;
        servicosCount[desc] = (servicosCount[desc] || 0) + 1;
      });
    });

    const servicosMaisPedidos = Object.entries(servicosCount)
      .map(([name, value]) => ({ name, value }))
      .sort((a, b) => b.value - a.value).slice(0, 5);
      
    const produtosMaisVendidos = Object.entries(produtosCount)
      .map(([name, value]) => ({ name, value }))
      .sort((a, b) => b.value - a.value).slice(0, 5);
      
    const pagamentosChart = Object.entries(metodosPagamento)
      .map(([name, value]) => ({ name, value: Number(value.toFixed(2)) }))
      .sort((a, b) => b.value - a.value);

    return {
      titulo: "Dashboard de Inteligência e Vendas",
      totalClientes,
      faturamentoTotal: faturamentoServicos + faturamentoVendas,
      faturamentoVendas,
      faturamentoServicos,
      servicosMaisPedidos,
      produtosMaisVendidos,
      pagamentosChart,
      dataGeracao: new Date().toISOString(),
    };
  }
}
