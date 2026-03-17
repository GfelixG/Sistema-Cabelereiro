<<<<<<< Updated upstream
import express from 'express';
import cors from 'cors';
import { ClienteGerenciador } from './ClienteGerenciador';

const app = express();
const gerenciador = new ClienteGerenciador(); // Instanciando a classe gerenciadora
=======
import express, { Request, Response } from "express";
import cors from "cors";
import { ClienteGerenciador } from "./clienteGerenciador";
import {
  ProfissionalGerenciador,
  ServicoGerenciador,
  AgendamentoGerenciador,
} from "./gerenciadores";
import { PrismaClient } from "./generated";

const app = express();
const prisma = new PrismaClient();
const gerenciador = new ClienteGerenciador();
const profissionalGerenciador = new ProfissionalGerenciador();
const servicoGerenciador = new ServicoGerenciador();
const agendamentoGerenciador = new AgendamentoGerenciador();
>>>>>>> Stashed changes

app.use(cors());
app.use(express.json());

app.get("/clientes", async (req, res) => {
  const lista = await gerenciador.listarTodos();
  res.json(lista);
});

<<<<<<< Updated upstream
app.post('/clientes', async (req, res) => {
  const { nome, telefone, email } = req.body;
  const novo = await gerenciador.inserir(nome, telefone, email);
  res.json(novo);
=======
app.post("/clientes", async (req: Request, res: Response) => {
  const { nome, telefone, email } = req.body;

  try {
    const novoCliente = await prisma.client.create({
      data: {
        nome,
        telefone,
        email: email || null,
      },
    });

    return res.status(201).json(novoCliente);
  } catch (error: any) {
    if (error?.code === "P2002") {
      const camposDuplicados = error.meta?.target;

      if (camposDuplicados?.includes("email")) {
        return res.status(400).json({
          erro: "Já existe um cliente cadastrado com este e-mail.",
        });
      }

      if (camposDuplicados?.includes("telefone")) {
        return res.status(400).json({
          erro: "Já existe um cliente cadastrado com este telefone.",
        });
      }

      return res.status(400).json({
        erro: "Um ou mais dados informados já estão cadastrados.",
      });
    }

    console.error("Erro interno ao criar cliente:", error);
    return res.status(500).json({
      erro: "Erro interno do servidor.",
    });
  }
>>>>>>> Stashed changes
});

app.get("/clientes/busca", async (req, res) => {
  const { nome } = req.query;
  const resultados = await gerenciador.pesquisarPorNome(String(nome));
  res.json(resultados);
});

app.get("/clientes/:id", async (req, res) => {
  const id = Number(req.params.id);
  const cliente = await gerenciador.exibirUm(id);

  if (!cliente) {
    return res.status(404).json({ erro: "Cliente não encontrado." });
  }

  res.json(cliente);
});

app.put("/clientes/:id", async (req, res) => {
  const id = Number(req.params.id);
  const { nome, telefone, email } = req.body;

  try {
    const atualizado = await gerenciador.alterar(id, nome, telefone, email);
    return res.json(atualizado);
  } catch (error: any) {
    if (error?.code === "P2025") {
      return res.status(404).json({ erro: "Cliente não encontrado." });
    }

    if (error?.code === "P2002") {
      return res
        .status(400)
        .json({ erro: "Telefone ou e-mail já cadastrado." });
    }

    return res.status(500).json({ erro: "Erro ao alterar cliente." });
  }
});

app.delete("/clientes/:id", async (req, res) => {
  await gerenciador.remover(Number(req.params.id));
  res.status(204).send();
});

app.get("/relatorio", async (req, res) => {
  const relatorio = await gerenciador.gerarRelatorio();
  res.json(relatorio);
});

<<<<<<< Updated upstream
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}` );
});
=======
app.get("/profissionais", async (req, res) => {
  const lista = await profissionalGerenciador.listarTodos();
  res.json(lista);
});

app.post("/profissionais", async (req, res) => {
  const { nome, especialidade } = req.body;
  try {
    const novo = await profissionalGerenciador.inserir(nome, especialidade);
    res.status(201).json(novo);
  } catch (error) {
    res.status(500).json({ erro: "Erro ao criar profissional." });
  }
});

app.get("/servicos", async (req, res) => {
  const lista = await servicoGerenciador.listarTodos();
  res.json(lista);
});

app.post("/servicos", async (req, res) => {
  const { descricao, preco } = req.body;
  try {
    const novo = await servicoGerenciador.inserir(descricao, Number(preco));
    res.status(201).json(novo);
  } catch (error) {
    res.status(500).json({ erro: "Erro ao criar serviço." });
  }
});

app.get("/agendamentos", async (req, res) => {
  const lista = await agendamentoGerenciador.listarRelatorio();
  res.json(lista);
});

app.post("/agendamentos", async (req, res) => {
  const { clienteId, profissionalId, servicoId, dataHora } = req.body;
  try {
    const novo = await agendamentoGerenciador.agendar(
      Number(clienteId),
      Number(profissionalId),
      Number(servicoId),
      dataHora,
    );
    res.status(201).json(novo);
  } catch (error: any) {
    console.error("ERRO COMPLETO:", error);
    res.status(500).json({
      erro: "Erro ao criar agendamento.",
      detalhes: error.message || error,
    });
  }
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
>>>>>>> Stashed changes
