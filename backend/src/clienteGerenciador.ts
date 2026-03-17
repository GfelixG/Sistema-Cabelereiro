<<<<<<< Updated upstream
import { PrismaClient } from '@prisma/client';
=======
import { PrismaClient } from "./generated";
>>>>>>> Stashed changes

const prisma = new PrismaClient();

export class ClienteGerenciador {
  async inserir(nome: string, telefone: string, email?: string) {
    return await prisma.client.create({
<<<<<<< Updated upstream
      data: { nome, telefone, email }
=======
      data: { nome, telefone, email: email || null },
>>>>>>> Stashed changes
    });
  }

  async alterar(id: number, nome: string, telefone: string, email?: string) {
    return await prisma.client.update({
      where: { id },
<<<<<<< Updated upstream
      data: { nome, telefone, email }
=======
      data: { nome, telefone, email: email || null },
>>>>>>> Stashed changes
    });
  }

  async pesquisarPorNome(nome: string) {
    return await prisma.client.findMany({
      where: {
        nome: { contains: nome },
      },
    });
  }

  async remover(id: number) {
    return await prisma.client.delete({
      where: { id },
    });
  }

  async listarTodos() {
    return await prisma.client.findMany();
  }

  async exibirUm(id: number) {
    return await prisma.client.findUnique({
      where: { id },
    });
  }

  // ITEM 6: Método para GERAR RELATÓRIO
  async gerarRelatorio() {
<<<<<<< Updated upstream
    const total = await prisma.client.count();
    const lista = await this.listarTodos();
    
    return {
      titulo: "Relatório de Clientes - Cabeleireiro",
      quantidadeElementos: total,
      clientes: lista,
      dataGeracao: new Date().toLocaleString()
=======
    const totalClientes = await prisma.client.count();
    const agendamentos = await prisma.agendamento.findMany({
      include: { servico: true },
    });

    const faturamentoTotal = agendamentos.reduce(
      (acc, ag) => acc + ag.servico.preco,
      0,
    );

    const servicosCount: Record<string, number> = {};
    agendamentos.forEach((ag) => {
      const desc = ag.servico.descricao;
      servicosCount[desc] = (servicosCount[desc] || 0) + 1;
    });

    const servicosMaisPedidos = Object.entries(servicosCount)
      .map(([name, value]) => ({
        name,
        value,
      }))
      .sort((a, b) => b.value - a.value);

    return {
      titulo: "Relatório de Agendamentos - Cabeleireiro",
      totalClientes,
      faturamentoTotal,
      servicosMaisPedidos,
      dataGeracao: new Date().toISOString(),
>>>>>>> Stashed changes
    };
  }
}
