import express, { Request, Response } from "express";
import cors from "cors";
import { ClienteGerenciador } from "./clienteGerenciador";
import {
  ProfissionalGerenciador,
  ServicoGerenciador,
  AgendamentoGerenciador,
  VendedorGerenciador,
  ProdutoGerenciador,
  VendaGerenciador
} from "./gerenciadores";
import { PrismaClient } from "./generated";

const app = express();
const prisma = new PrismaClient();
const gerenciador = new ClienteGerenciador();
const profissionalGerenciador = new ProfissionalGerenciador();
const servicoGerenciador = new ServicoGerenciador();
const agendamentoGerenciador = new AgendamentoGerenciador();
const vendedorGerenciador = new VendedorGerenciador();
const produtoGerenciador = new ProdutoGerenciador();
const vendaGerenciador = new VendaGerenciador();

app.use(cors());
app.use(express.json());

// --- Clientes ---
app.get("/clientes", async (req, res) => {
  const lista = await gerenciador.listarTodos();
  res.json(lista);
});

app.post("/clientes", async (req: Request, res: Response) => {
  const { nome, telefone, email, isFlamengo, assisteOP, cidadeNascimento } = req.body;
  try {
    const novoCliente = await gerenciador.inserir(nome, telefone, email, isFlamengo, assisteOP, cidadeNascimento);
    return res.status(201).json(novoCliente);
  } catch (error: any) {
    if (error?.code === "P2002") {
      return res.status(400).json({ erro: "Um ou mais dados (telefone/email) informados já estão cadastrados." });
    }
    console.error(error);
    return res.status(500).json({ erro: "Erro interno do servidor." });
  }
});

app.get("/clientes/busca", async (req, res) => {
  const { nome } = req.query;
  const resultados = await gerenciador.pesquisarPorNome(String(nome));
  res.json(resultados);
});

app.get("/clientes/:id", async (req, res) => {
  const id = Number(req.params.id);
  const cliente = await gerenciador.exibirUm(id);
  if (!cliente) return res.status(404).json({ erro: "Cliente não encontrado." });
  res.json(cliente);
});

app.put("/clientes/:id", async (req, res) => {
  const id = Number(req.params.id);
  const { nome, telefone, email, isFlamengo, assisteOP, cidadeNascimento } = req.body;
  try {
    const atualizado = await gerenciador.alterar(id, nome, telefone, email, isFlamengo, assisteOP, cidadeNascimento);
    return res.json(atualizado);
  } catch (error: any) {
    if (error?.code === "P2025") return res.status(404).json({ erro: "Cliente não encontrado." });
    if (error?.code === "P2002") return res.status(400).json({ erro: "Telefone ou e-mail já cadastrado." });
    return res.status(500).json({ erro: "Erro ao alterar cliente." });
  }
});

app.delete("/clientes/:id", async (req, res) => {
  await gerenciador.remover(Number(req.params.id));
  res.status(204).send();
});

// --- Relatório e Agendamentos ---
app.get("/relatorio", async (req, res) => {
  const relatorio = await gerenciador.gerarRelatorio();
  res.json(relatorio);
});

app.get("/profissionais", async (req, res) => {
  res.json(await profissionalGerenciador.listarTodos());
});

app.post("/profissionais", async (req, res) => {
  try {
    res.status(201).json(await profissionalGerenciador.inserir(req.body.nome, req.body.especialidade));
  } catch {
    res.status(500).json({ erro: "Erro" });
  }
});

app.get("/servicos", async (req, res) => {
  res.json(await servicoGerenciador.listarTodos());
});

app.post("/servicos", async (req, res) => {
  try {
    res.status(201).json(await servicoGerenciador.inserir(req.body.descricao, Number(req.body.preco)));
  } catch {
    res.status(500).json({ erro: "Erro" });
  }
});

app.get("/agendamentos", async (req, res) => {
  res.json(await agendamentoGerenciador.listarRelatorio());
});

app.get("/agendamentos/:id", async (req, res) => {
  const data = await agendamentoGerenciador.exibirUmComHistorico(Number(req.params.id));
  if (!data) return res.status(404).json({ erro: "Agendamento não encontrado." });
  res.json(data);
});

app.post("/agendamentos", async (req, res) => {
  const { clienteId, profissionalId, servicosIds, dataHora } = req.body;
  try {
    const novo = await agendamentoGerenciador.agendar(Number(clienteId), Number(profissionalId), servicosIds || [], dataHora);
    res.status(201).json(novo);
  } catch (error: any) {
    res.status(400).json({ erro: error.message || "Erro ao criar agendamento." });
  }
});

app.delete("/agendamentos/:id", async (req, res) => {
  try {
    await agendamentoGerenciador.cancelar(Number(req.params.id));
    res.status(204).send();
  } catch (error: any) {
    if (error?.code === "P2025") return res.status(404).json({ erro: "Não encontrado." });
    res.status(500).json({ erro: "Erro" });
  }
});

// --- Vendas Module ---
app.get("/vendedores", async (req, res) => res.json(await vendedorGerenciador.listarTodos()));

app.post("/vendedores", async (req, res) => {
  try {
    res.status(201).json(await vendedorGerenciador.inserir(req.body.nome));
  } catch {
    res.status(500).json({ erro: "Erro" });
  }
});

app.get("/produtos", async (req, res) => {
  try {
    res.json(await produtoGerenciador.listar(req.query));
  } catch (error: any) {
    res.status(500).json({ erro: "Erro ao listar produtos." });
  }
});

app.post("/produtos", async (req, res) => {
  const { nome, preco, categoria, fabricadoEmMari, estoque } = req.body;
  try {
    res.status(201).json(await produtoGerenciador.inserir(nome, parseFloat(preco), categoria, Boolean(fabricadoEmMari), parseInt(estoque)));
  } catch {
    res.status(500).json({ erro: "Erro" });
  }
});

app.post("/vendas", async (req, res) => {
  const { clienteId, vendedorId, formaPagamento, itens } = req.body;
  try {
    const venda = await vendaGerenciador.registrarVenda(Number(clienteId), Number(vendedorId), String(formaPagamento), itens);
    res.status(201).json(venda);
  } catch (error: any) {
    res.status(400).json({ erro: error.message });
  }
});

app.get("/vendas/cliente/:id", async (req, res) => {
  try {
    res.json(await vendaGerenciador.exibirVendasCliente(Number(req.params.id)));
  } catch {
    res.status(500).json({ erro: "Erro" });
  }
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
