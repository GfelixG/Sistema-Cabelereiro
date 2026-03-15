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

// 2. Inserir um novo cliente
app.post("/clientes", async (req: Request, res: Response) => {
  const { nome, telefone, email } = req.body;

  try {
    const novoCliente = await prisma.client.create({
      data: {
        nome,
        telefone,
        email,
      },
    });
    
    return res.status(201).json(novoCliente);

  } catch (error: any) { // Usamos 'any' aqui para facilitar a leitura das propriedades do erro
    
    // Verifica se o erro é de duplicidade (P2002)
    if (error?.code === 'P2002') {
      
      // O Prisma guarda os campos que causaram o erro dentro de meta.target
      const camposDuplicados = error.meta?.target;
      
      // Checa se o erro foi no e-mail
      if (camposDuplicados?.includes('email')) {
        return res.status(400).json({ 
          erro: "Já existe um cliente cadastrado com este e-mail." 
        });
      }
      
      // Checa se o erro foi no telefone
      if (camposDuplicados?.includes('telefone')) {
        return res.status(400).json({ 
          erro: "Já existe um cliente cadastrado com este telefone." 
        });
      }

      // Caso seja algum outro campo único que não previmos
      return res.status(400).json({ 
        erro: "Um ou mais dados informados já estão cadastrados." 
      });
    }

    // Se for um erro diferente de duplicidade, aí sim ele avisa no terminal
    console.error("Erro interno ao criar cliente:", error);
    return res.status(500).json({ 
      erro: "Erro interno do servidor." 
    });
  }
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
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});