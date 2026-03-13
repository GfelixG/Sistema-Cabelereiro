import express from "express";
import cors from "cors";
import { PrismaClient } from "@prisma/client";

const app = express();
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());

// CRUD

// 1. Listar todos os clientes
app.get("/clientes", async (req, res) => {
  const clientes = await prisma.client.findMany();
  res.json(clientes);
});

// 2. Inserir um novo cliente
app.post("/clientes", async (req, res) => {
  const { nome, telefone, email } = req.body;
  const novoCliente = await prisma.client.create({
    data: {
      nome,
      telefone,
      email,
    },
  });
  res.json;
});

//3. Pesquisar por nome
app.get("/clientes/busca", async (req, res) => {
  const { nome } = req.query;
  const clientes = await prisma.client.findMany({
    where: {
      nome: { contains: String(nome) },
    },
  });
  res.json(clientes);
});

// 4. REemover cliente
app.delete("/clientes/:id", async (req, res) => {
  const { id } = req.params;
  await prisma.client.delete({
    where: { id: Number(id) },
  });
  res.status(204).send();
});

// 5. Alterar cliente
app.put("/clientes/:id", async (req, res) => {
  const { id } = req.params;
  const { nome, telefone, email } = req.body;
  const atualizado = await prisma.client.update({
    where: { id: Number(id) },
    data: { nome, telefone, email },
  });
  res.json(atualizado);
});

// 6. Exibir cliente
app.get("/clientes/:id", async (req, res) => {
  const { id } = req.params;
  const cliente = await prisma.client.findUnique({
    where: { id: Number(id) },
  });
  res.json(cliente);
});

// Iniciar servidor
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});
