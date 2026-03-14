import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// ITEM 3: Esta é a CLASSE que vai gerenciar as operações CRUD
export class ClienteGerenciador {
  
  // ITEM 5: Usando bastante métodos (cada operação é um método)
  
  // 1. Método para INSERIR
  async inserir(nome: string, telefone: string, email?: string) {
    return await prisma.client.create({
      data: { nome, telefone, email }
    });
  }

  // 2. Método para ALTERAR
  async alterar(id: number, nome: string, telefone: string, email?: string) {
    return await prisma.client.update({
      where: { id },
      data: { nome, telefone, email }
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

  // ITEM 6: Método para GERAR RELATÓRIO
  async gerarRelatorio() {
    const total = await prisma.client.count();
    const lista = await this.listarTodos();
    
    return {
      titulo: "Relatório de Clientes - Cabeleireiro",
      quantidadeElementos: total,
      clientes: lista,
      dataGeracao: new Date().toLocaleString()
    };
  }
}