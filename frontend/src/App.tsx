import { useState } from 'react';
import axios from 'axios';
import { 
  UserPlus, Users, Trash2, Search, UserCircle, 
  FileText, Calendar, ArrowLeft 
} from 'lucide-react';

const API_URL = 'http://localhost:3001/clientes';
const RELATORIO_URL = 'http://localhost:3001/relatorio';

interface Cliente {
  id: number;
  nome: string;
  telefone: string;
  email?: string;
}

function App() {
  // Controle de Navegação: 'home', 'novo', 'listar', 'agendar'
  const [tela, setTela] = useState<'home' | 'novo' | 'listar' | 'agendar'>('home');
  
  const [clientes, setClientes] = useState<Cliente[]>([]);
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');
  const [busca, setBusca] = useState('');

  // 1. ESTADO RECUPERADO: Controle de erro
  const [mensagemErro, setMensagemErro] = useState('');

  // Funções de Lógica
  const listarClientes = async () => {
    const response = await axios.get(API_URL);
    setClientes(response.data);
  };

  // 2. FUNÇÃO RECUPERADA: try...catch para pegar o erro do backend
  const adicionarCliente = async (e: React.FormEvent) => {
    e.preventDefault();
    setMensagemErro(''); // Limpa erro anterior

    try {
      await axios.post(API_URL, { nome, telefone, email });
      setNome(''); setTelefone(''); setEmail('');
      alert("Cliente cadastrado com sucesso!");
      setTela('home'); // Volta para a home após cadastrar
    } catch (error: any) {
      if (error.response && error.response.data && error.response.data.erro) {
        setMensagemErro(error.response.data.erro);
      } else {
        setMensagemErro("Erro ao conectar com o backend. O servidor está rodando?");
      }
    }
  };

  const removerCliente = async (id: number) => {
    if (window.confirm("Excluir cliente?")) {
      await axios.delete(`${API_URL}/${id}`);
      listarClientes();
    }
  };

  const buscarPorNome = async () => {
    const response = await axios.get(`${API_URL}/busca?nome=${busca}`);
    setClientes(response.data);
  };

  const exibirRelatorio = async () => {
    try {
      const response = await axios.get(RELATORIO_URL);
      const r = response.data;
      alert(`--- ${r.titulo} ---\nTotal: ${r.quantidadeElementos}\nData: ${r.dataGeracao}`);
    } catch {
      alert("Erro ao gerar relatório. Rota não encontrada ou servidor offline.");
    }
  };

  // --- COMPONENTE DA TELA HOME ---
  const TelaHome = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
      <button onClick={() => { setTela('novo'); setMensagemErro(''); }} className="bg-white p-8 rounded-3xl shadow-sm border-2 border-transparent hover:border-indigo-500 transition-all flex flex-col items-center gap-4 group">
        <div className="bg-indigo-100 p-4 rounded-2xl text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition">
          <UserPlus size={32} />
        </div>
        <span className="font-bold text-xl text-slate-700">Novo Cliente</span>
      </button>

      <button onClick={() => { setTela('listar'); listarClientes(); }} className="bg-white p-8 rounded-3xl shadow-sm border-2 border-transparent hover:border-indigo-500 transition-all flex flex-col items-center gap-4 group">
        <div className="bg-emerald-100 p-4 rounded-2xl text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition">
          <Users size={32} />
        </div>
        <span className="font-bold text-xl text-slate-700">Listar Clientes</span>
      </button>

      <button onClick={exibirRelatorio} className="bg-white p-8 rounded-3xl shadow-sm border-2 border-transparent hover:border-amber-500 transition-all flex flex-col items-center gap-4 group">
        <div className="bg-amber-100 p-4 rounded-2xl text-amber-600 group-hover:bg-amber-600 group-hover:text-white transition">
          <FileText size={32} />
        </div>
        <span className="font-bold text-xl text-slate-700">Gerar Relatório</span>
      </button>

      <button onClick={() => setTela('agendar')} className="bg-white p-8 rounded-3xl shadow-sm border-2 border-transparent hover:border-rose-500 transition-all flex flex-col items-center gap-4 group">
        <div className="bg-rose-100 p-4 rounded-2xl text-rose-600 group-hover:bg-rose-600 group-hover:text-white transition">
          <Calendar size={32} />
        </div>
        <span className="font-bold text-xl text-slate-700">Agendar</span>
      </button>
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-50 p-4 md:p-8 font-sans text-slate-900">
      <div className="max-w-4xl mx-auto">
        
        {/* HEADER DINÂMICO */}
        <header className="mb-8 flex justify-between items-center">
          <div className="flex items-center gap-4">
            {tela !== 'home' && (
              <button onClick={() => setTela('home')} className="p-2 hover:bg-slate-200 rounded-full transition">
                <ArrowLeft size={24} />
              </button>
            )}
            <h1 className="text-3xl font-black text-indigo-600 flex items-center gap-2">
              <UserCircle size={36} /> Sistema Cabeleireiro
            </h1>
          </div>
          <div className="text-slate-400 font-medium hidden md:block">Parte 1 - Luiz, Bruno e Gabriel</div>
        </header>

        {/* CONTEÚDO BASEADO NA TELA ATUAL */}
        {tela === 'home' && <TelaHome />}

        {tela === 'novo' && (
          <div className="bg-white p-8 rounded-3xl shadow-sm max-w-lg mx-auto border border-slate-100">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-indigo-600">
              <UserPlus /> Cadastrar Cliente
            </h2>
            <form onSubmit={adicionarCliente} className="flex flex-col gap-5">
              
              {/* 3. ALERTA RECUPERADO: Só aparece se houver erro */}
              {mensagemErro && (
                <div className="bg-red-50 border-l-4 border-red-500 p-3 rounded-r-lg">
                  <p className="text-red-700 text-sm font-medium">{mensagemErro}</p>
                </div>
              )}

              <input className="border-2 border-slate-100 p-3 rounded-xl outline-none focus:border-indigo-500 transition" placeholder="Nome" value={nome} onChange={e => setNome(e.target.value)} required />
              <input className="border-2 border-slate-100 p-3 rounded-xl outline-none focus:border-indigo-500 transition" placeholder="Telefone" value={telefone} onChange={e => setTelefone(e.target.value)} required />
              <input className="border-2 border-slate-100 p-3 rounded-xl outline-none focus:border-indigo-500 transition" placeholder="E-mail" type="email" value={email} onChange={e => setEmail(e.target.value)} />
              <button className="bg-indigo-600 text-white font-bold py-4 rounded-xl hover:bg-indigo-700 shadow-lg shadow-indigo-100 transition">Salvar Cliente</button>
            </form>
          </div>
        )}

        {tela === 'listar' && (
          <div className="space-y-6">
            <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 flex gap-2">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-3 text-slate-400" size={18} />
                <input className="w-full bg-slate-50 p-2.5 pl-10 rounded-xl outline-none" placeholder="Buscar por nome..." value={busca} onChange={e => setBusca(e.target.value)} />
              </div>
              <button onClick={buscarPorNome} className="bg-indigo-600 text-white px-6 rounded-xl font-bold">Buscar</button>
            </div>
            <div className="grid gap-4">
              {clientes.map(c => (
                <div key={c.id} className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100 flex justify-between items-center hover:border-indigo-200 transition">
                  <div>
                    <p className="font-bold text-lg">{c.nome}</p>
                    <p className="text-slate-500 text-sm">{c.telefone} | {c.email || 'Sem e-mail'}</p>
                  </div>
                  <button onClick={() => removerCliente(c.id)} className="text-slate-300 hover:text-red-500 p-2 transition"><Trash2 /></button>
                </div>
              ))}
            </div>
          </div>
        )}

        {tela === 'agendar' && (
          <div className="bg-white p-8 rounded-3xl shadow-sm max-w-lg mx-auto border border-slate-100 text-center">
            <Calendar size={64} className="mx-auto text-rose-500 mb-4" />
            <h2 className="text-2xl font-bold mb-2">Agendamentos</h2>
            <p className="text-slate-500 mb-6">Módulo de Agendamento será implementado na Parte 2.</p>
            <button onClick={() => setTela('home')} className="bg-slate-100 text-slate-600 px-8 py-3 rounded-xl font-bold hover:bg-slate-200 transition">Voltar</button>
          </div>
        )}

      </div>
    </div>
  );
}

export default App;