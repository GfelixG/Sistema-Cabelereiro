import { useState } from 'react';
import axios from 'axios';
import { 
  UserPlus, Users, Trash2, Search, UserCircle, 
  FileText, Calendar, ArrowLeft, Scissors, Clock, User
} from 'lucide-react';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const API_URL = 'http://localhost:3001/clientes';
const API_URL_PROFISSIONAIS = 'http://localhost:3001/profissionais';
const API_URL_SERVICOS = 'http://localhost:3001/servicos';
const API_URL_AGENDAMENTOS = 'http://localhost:3001/agendamentos';
const RELATORIO_URL = 'http://localhost:3001/relatorio';

interface Cliente {
  id: number;
  nome: string;
  telefone: string;
  email?: string;
}

interface Profissional {
  id: number;
  nome: string;
  especialidade: string;
}

interface Servico {
  id: number;
  descricao: string;
  preco: number;
}

interface Agendamento {
  id: number;
  dataHora: string;
  cliente: { nome: string };
  profissional: { nome: string };
  servico: { descricao: string; preco: number };
}

function App() {
  // Controle de Navegação
  const [tela, setTela] = useState<'home' | 'novo' | 'listar' | 'agendar' | 'profissionais' | 'servicos' | 'relatorio'>('home');
  
  const [clientes, setClientes] = useState<Cliente[]>([]);
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');
  const [busca, setBusca] = useState('');

  // Novos Estados
  const [profissionais, setProfissionais] = useState<Profissional[]>([]);
  const [servicos, setServicos] = useState<Servico[]>([]);

  const [agendamentos, setAgendamentos] = useState<Agendamento[]>([]);
  const [clienteAgendamento, setClienteAgendamento] = useState('');
  const [profissionalAgendamento, setProfissionalAgendamento] = useState('');
  const [servicoAgendamento, setServicoAgendamento] = useState('');
  const [dataAgendamento, setDataAgendamento] = useState('');
  const [horaAgendamento, setHoraAgendamento] = useState('');

  const horariosDisponiveis = [
    "08:00", "08:30", "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
    "13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30"
  ];

  interface RelatorioData {
    titulo: string;
    totalClientes: number;
    faturamentoTotal: number;
    servicosMaisPedidos: { name: string; value: number }[];
    dataGeracao: string;
  }

  const [relatorioData, setRelatorioData] = useState<RelatorioData | null>(null);

  // 1. ESTADO RECUPERADO: Controle de erro
  const [mensagemErro, setMensagemErro] = useState('');

  // Funções de Lógica
  const listarClientes = async () => {
    const response = await axios.get(API_URL);
    setClientes(response.data);
  };

  const listarProfissionais = async () => {
    const response = await axios.get(API_URL_PROFISSIONAIS);
    setProfissionais(response.data);
  };

  const listarServicos = async () => {
    const response = await axios.get(API_URL_SERVICOS);
    setServicos(response.data);
  };

  const listarAgendamentos = async () => {
    const response = await axios.get(API_URL_AGENDAMENTOS);
    setAgendamentos(response.data);
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
      setRelatorioData(response.data);
      setTela('relatorio');
    } catch {
      alert("Erro ao gerar relatório. Rota não encontrada ou servidor offline.");
    }
  };

  // Funções para Novas Entidades
  const salvarAgendamento = async (e: React.FormEvent) => {
    e.preventDefault();
    setMensagemErro('');
    try {
      if (!dataAgendamento || !horaAgendamento) {
        setMensagemErro("Selecione a data e o horário para o agendamento.");
        return;
      }
      const dataHoraCombinada = `${dataAgendamento}T${horaAgendamento}:00`;
      
      if (new Date(dataHoraCombinada) < new Date()) {
        setMensagemErro("O horário selecionado já passou. Escolha um horário no futuro.");
        return;
      }

      await axios.post(API_URL_AGENDAMENTOS, {
        clienteId: clienteAgendamento,
        profissionalId: profissionalAgendamento,
        servicoId: servicoAgendamento,
        dataHora: dataHoraCombinada
      });
      setClienteAgendamento('');
      setProfissionalAgendamento('');
      setServicoAgendamento('');
      setDataAgendamento('');
      setHoraAgendamento('');
      alert("Agendamento realizado!");
      listarAgendamentos();
    } catch (error: any) {
      console.error(error);
      const msg = error.response?.data?.detalhes || error.response?.data?.erro || "Erro ao realizar agendamento.";
      setMensagemErro(String(msg));
    }
  };

  // --- COMPONENTE DA TELA HOME ---
  const TelaHome = () => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
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

      <button onClick={() => { setTela('profissionais'); listarProfissionais(); }} className="bg-white p-8 rounded-3xl shadow-sm border-2 border-transparent hover:border-indigo-500 transition-all flex flex-col items-center gap-4 group">
        <div className="bg-purple-100 p-4 rounded-2xl text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition">
          <User size={32} />
        </div>
        <span className="font-bold text-xl text-slate-700">Profissionais</span>
      </button>

      <button onClick={() => { setTela('servicos'); listarServicos(); }} className="bg-white p-8 rounded-3xl shadow-sm border-2 border-transparent hover:border-indigo-500 transition-all flex flex-col items-center gap-4 group">
        <div className="bg-cyan-100 p-4 rounded-2xl text-cyan-600 group-hover:bg-cyan-600 group-hover:text-white transition">
          <Scissors size={32} />
        </div>
        <span className="font-bold text-xl text-slate-700">Serviços</span>
      </button>

      <button onClick={() => { 
        setTela('agendar'); 
        listarClientes(); 
        listarProfissionais(); 
        listarServicos(); 
        listarAgendamentos(); 
      }} className="bg-white p-8 rounded-3xl shadow-sm border-2 border-transparent hover:border-rose-500 transition-all flex flex-col items-center gap-4 group">
        <div className="bg-rose-100 p-4 rounded-2xl text-rose-600 group-hover:bg-rose-600 group-hover:text-white transition">
          <Calendar size={32} />
        </div>
        <span className="font-bold text-xl text-slate-700">Agendar</span>
      </button>

      <button onClick={exibirRelatorio} className="bg-white p-8 rounded-3xl shadow-sm border-2 border-transparent hover:border-amber-500 transition-all flex flex-col items-center gap-4 group">
        <div className="bg-amber-100 p-4 rounded-2xl text-amber-600 group-hover:bg-amber-600 group-hover:text-white transition">
          <FileText size={32} />
        </div>
        <span className="font-bold text-xl text-slate-700">Gerar Relatório</span>
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
          <div className="space-y-6 max-w-2xl mx-auto">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-rose-600">
                <Calendar /> Agendar Serviço
              </h2>
              <form onSubmit={salvarAgendamento} className="flex flex-col gap-5">
                {mensagemErro && (
                  <div className="bg-red-50 border-l-4 border-red-500 p-3 rounded-r-lg">
                    <p className="text-red-700 text-sm font-medium">{mensagemErro}</p>
                  </div>
                )}
                
                <select className="border-2 border-slate-100 p-3 rounded-xl outline-none focus:border-rose-500 transition" value={clienteAgendamento} onChange={e => setClienteAgendamento(e.target.value)} required>
                  <option value="">Selecione o Cliente</option>
                  {clientes.map(c => <option key={c.id} value={c.id}>{c.nome}</option>)}
                </select>

                <select className="border-2 border-slate-100 p-3 rounded-xl outline-none focus:border-rose-500 transition" value={profissionalAgendamento} onChange={e => setProfissionalAgendamento(e.target.value)} required>
                  <option value="">Selecione o Profissional</option>
                  {profissionais.map(p => <option key={p.id} value={p.id}>{p.nome} ({p.especialidade})</option>)}
                </select>

                <select className="border-2 border-slate-100 p-3 rounded-xl outline-none focus:border-rose-500 transition" value={servicoAgendamento} onChange={e => setServicoAgendamento(e.target.value)} required>
                  <option value="">Selecione o Serviço</option>
                  {servicos.map(s => <option key={s.id} value={s.id}>{s.descricao} - R$ {s.preco}</option>)}
                </select>

                <div className="grid grid-cols-2 gap-4">
                  <input type="date" min={new Date(Date.now() - new Date().getTimezoneOffset() * 60000).toISOString().split('T')[0]} className="border-2 border-slate-100 p-3 rounded-xl outline-none focus:border-rose-500 transition w-full" value={dataAgendamento} onChange={e => setDataAgendamento(e.target.value)} required />
                  <select className="border-2 border-slate-100 p-3 rounded-xl outline-none focus:border-rose-500 transition w-full" value={horaAgendamento} onChange={e => setHoraAgendamento(e.target.value)} required>
                    <option value="">Horário</option>
                    {horariosDisponiveis.map(h => <option key={h} value={h}>{h}</option>)}
                  </select>
                </div>

                <button className="bg-rose-600 text-white font-bold py-4 rounded-xl hover:bg-rose-700 shadow-lg shadow-rose-100 transition">Confirmar Agendamento</button>
              </form>
            </div>

            <div className="grid gap-4 mt-8">
              <h3 className="font-bold text-xl text-slate-700 mb-2">Agendamentos Recentes</h3>
              {agendamentos.map((a: any) => (
                <div key={a.id} className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100 flex justify-between items-center">
                  <div>
                    <p className="font-bold text-lg">{a.clientes.nome} com {a.profissional.nome}</p>
                    <p className="text-slate-500 text-sm capitalize">{a.servico.descricao} (R$ {a.servico.preco})</p>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-1 text-indigo-600 font-medium bg-indigo-50 px-3 py-1 rounded-full text-sm">
                      <Clock size={14} /> {new Date(a.dataHora).toLocaleString('pt-BR')}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {tela === 'profissionais' && (
          <div className="space-y-6 max-w-2xl mx-auto">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 mb-6">
              <h2 className="text-2xl font-bold flex items-center gap-2 text-purple-600">
                <User /> Profissionais Cadastrados
              </h2>
            </div>
            
            <div className="grid gap-4">
              {profissionais.map(p => (
                <div key={p.id} className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100">
                  <p className="font-bold text-lg">{p.nome}</p>
                  <p className="text-slate-500 text-sm">{p.especialidade}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {tela === 'servicos' && (
          <div className="space-y-6 max-w-2xl mx-auto">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 mb-6">
              <h2 className="text-2xl font-bold flex items-center gap-2 text-cyan-600">
                <Scissors /> Serviços Cadastrados
              </h2>
            </div>
            
            <div className="grid gap-4">
              {servicos.map(s => (
                <div key={s.id} className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100 flex justify-between items-center">
                  <p className="font-bold text-lg">{s.descricao}</p>
                  <p className="text-emerald-600 font-bold bg-emerald-50 px-4 py-1 rounded-full">R$ {s.preco}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {tela === 'relatorio' && relatorioData && (
          <div className="space-y-6 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
              <div className="text-center mb-10">
                <div className="bg-amber-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <FileText size={40} className="text-amber-600" />
                </div>
                <h2 className="text-3xl font-black text-slate-800 mb-2">{relatorioData.titulo}</h2>
                <p className="text-slate-500">Gerado em: {new Date(relatorioData.dataGeracao).toLocaleString('pt-BR')}</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-inner">
                  <p className="text-slate-500 text-sm font-bold uppercase tracking-wider mb-2">Total de Clientes</p>
                  <p className="text-4xl font-black text-indigo-600">{relatorioData.totalClientes}</p>
                </div>
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-inner">
                  <p className="text-slate-500 text-sm font-bold uppercase tracking-wider mb-2">Faturamento Total</p>
                  <p className="text-4xl font-black text-emerald-600">
                    {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(relatorioData.faturamentoTotal || 0)}
                  </p>
                </div>
              </div>

              <div className="mt-8 border-t border-slate-100 pt-8">
                <h3 className="text-xl font-bold text-slate-700 mb-6 text-center">Serviços Mais Pedidos</h3>
                {relatorioData.servicosMaisPedidos && relatorioData.servicosMaisPedidos.length > 0 ? (
                  <div className="h-80 w-full flex justify-center">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={relatorioData.servicosMaisPedidos}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          outerRadius={100}
                          fill="#8884d8"
                          dataKey="value"
                          label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                        >
                          {relatorioData.servicosMaisPedidos.map((_, index) => (
                            <Cell key={`cell-${index}`} fill={['#6366f1', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#06b6d4'][index % 6]} />
                          ))}
                        </Pie>
                        <Tooltip formatter={(value) => [`${value} agendamentos`, 'Quantidade']} />
                        <Legend />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                ) : (
                  <p className="text-center text-slate-500">Nenhum serviço agendado ainda.</p>
                )}
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

export default App;