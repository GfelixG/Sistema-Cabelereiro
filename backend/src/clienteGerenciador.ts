import { PrismaClient } from './generated';

const prisma = new PrismaClient();

// ITEM 3: Esta é a CLASSE que vai gerenciar as operações CRUD
export class ClienteGerenciador {
  
  // ITEM 5: Usando bastante métodos (cada operação é um método)
  
  // 1. Método para INSERIR
  async inserir(nome: string, telefone: string, email?: string) {
    return await prisma.client.create({
      data: { nome, telefone, email: email || null }
    });
  }

  // 2. Método para ALTERAR
  async alterar(id: number, nome: string, telefone: string, email?: string) {
    return await prisma.client.update({
      where: { id },
      data: { nome, telefone, email: email || null }
    });
  }

  // 3. Método para PESQUISAR POR NOME
  async pesquisarPorNome(nome: string) {
    return await prisma.client.findMany({
      where: {
        nome: { contains: nome }
      }
    });
  }

  // 4. Método para REMOVER
  async remover(id: number) {
    return await prisma.client.delete({
      where: { id }
    });
  }

  // 5. Método para LISTAR TODOS
  async listarTodos() {
    return await prisma.client.findMany();
  }

  // 6. Método para EXIBIR UM
  async exibirUm(id: number) {
    return await prisma.client.findUnique({
      where: { id }
    });
  }

  async gerarRelatorio() {
    const totalClientes = await prisma.client.count();
    const agendamentos = await prisma.agendamento.findMany({
      include: { servico: true }
    });
    
    // Calcula faturamento total
    const faturamentoTotal = agendamentos.reduce((acc, ag) => acc + ag.servico.preco, 0);
    
    // Agrupa serviços
    const servicosCount: Record<string, number> = {};
    agendamentos.forEach(ag => {
      const desc = ag.servico.descricao;
      servicosCount[desc] = (servicosCount[desc] || 0) + 1;
    });
    
    const servicosMaisPedidos = Object.entries(servicosCount).map(([name, value]) => ({
      name, value
    })).sort((a, b) => b.value - a.value);

    return {
      titulo: "Relatório de Agendamentos - Cabeleireiro",
      totalClientes,
      faturamentoTotal,
      servicosMaisPedidos,
      dataGeracao: new Date().toLocaleString()
    };
  }
}