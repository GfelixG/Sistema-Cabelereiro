import { PrismaClient } from "./generated";
const prisma = new PrismaClient();

export class ProfissionalGerenciador {
  async inserir(nome: string, especialidade: string) {
    return await prisma.profissional.create({
      data: { nome, especialidade },
    });
  }

  async listarTodos() {
    return await prisma.profissional.findMany();
  }
}

export class ServicoGerenciador {
  async inserir(descricao: string, preco: number) {
    return await prisma.servico.create({
      data: { descricao, preco },
    });
  }

  async listarTodos() {
    return await prisma.servico.findMany();
  }
}

export class AgendamentoGerenciador {
  async agendar(
    clienteId: number,
    profissionalId: number,
    servicoId: number,
    data: string,
  ) {
    return await prisma.agendamento.create({
      data: {
        clienteId,
        profissionalId,
        servicoId,
        dataHora: new Date(data),
      },
      include: {
        clientes: true,
        profissional: true,
        servico: true,
      },
    });
  }

  async listarRelatorio() {
    return await prisma.agendamento.findMany({
      include: {
        clientes: { select: { nome: true } },
        profissional: { select: { nome: true } },
        servico: { select: { descricao: true, preco: true } },
      },
    });
  }
}
