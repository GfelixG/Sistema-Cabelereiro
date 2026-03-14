import express from 'express';
import cors from 'cors';
import { ClienteGerenciador } from './ClienteGerenciador';

const app = express();
const gerenciador = new ClienteGerenciador(); // Instanciando a classe gerenciadora

app.use(cors());
app.use(express.json());

// Agora as rotas chamam os MÉTODOS da CLASSE
app.get('/clientes', async (req, res) => {
  const lista = await gerenciador.listarTodos();
  res.json(lista);
});

app.post('/clientes', async (req, res) => {
  const { nome, telefone, email } = req.body;
  const novo = await gerenciador.inserir(nome, telefone, email);
  res.json(novo);
});

app.get('/clientes/busca', async (req, res) => {
  const { nome } = req.query;
  const resultados = await gerenciador.pesquisarPorNome(String(nome));
  res.json(resultados);
});

app.delete('/clientes/:id', async (req, res) => {
  await gerenciador.remover(Number(req.params.id));
  res.status(204).send();
});

// Rota para o RELATÓRIO (Item 6)
app.get('/relatorio', async (req, res) => {
  const relatorio = await gerenciador.gerarRelatorio();
  res.json(relatorio);
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}` );
});