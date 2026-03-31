import { useState, useEffect } from "react";
import axios from "axios";
import {
  UserPlus, Users, Trash2, Search, UserCircle, Pencil, Eye, FileText,
  Calendar, ArrowLeft, Scissors, Clock, User, ShoppingCart, Filter,
  CheckCircle2, Plus, Minus
} from "lucide-react";
import {
  PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer,
  BarChart, Bar, XAxis, YAxis, CartesianGrid
} from "recharts";

const API_URL = "http://localhost:3001";

interface Cliente {
  id: number; nome: string; telefone: string; email?: string;
  isFlamengo?: boolean; assisteOP?: boolean; cidadeNascimento?: string;
  dataCadastro?: string;
}

interface Profissional { id: number; nome: string; especialidade: string; }
interface Servico { id: number; descricao: string; preco: number; }
interface Vendedor { id: number; nome: string; }
interface Produto { id: number; nome: string; preco: number; categoria: string; fabricadoEmMari: boolean; estoque: number; }

interface Agendamento {
  id: number;
  dataHora: string;
  cliente: { nome: string };
  profissional: { nome: string };
  servicos: Servico[];
}

export default function App() {
  const [tela, setTela] = useState<
    "home" | "novo" | "listar" | "agendar" | "profissionais" |
    "servicos" | "relatorio" | "exibir-cliente" | "vendas" | "exibir-agendamento"
  >("home");

  // Models State
  const [clientes, setClientes] = useState<Cliente[]>([]);
  const [profissionais, setProfissionais] = useState<Profissional[]>([]);
  const [servicos, setServicos] = useState<Servico[]>([]);
  const [agendamentos, setAgendamentos] = useState<Agendamento[]>([]);
  const [vendedores, setVendedores] = useState<Vendedor[]>([]);
  const [produtos, setProdutos] = useState<Produto[]>([]);

  // Form Cliente
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");
  const [isFlamengo, setIsFlamengo] = useState(false);
  const [assisteOP, setAssisteOP] = useState(false);
  const [cidadeNascimento, setCidadeNascimento] = useState("");
  const [clienteEditandoId, setClienteEditandoId] = useState<number | null>(null);
  
  // Views Selection
  const [clienteSelecionado, setClienteSelecionado] = useState<Cliente | null>(null);
  const [agendamentoSelecionado, setAgendamentoSelecionado] = useState<any | null>(null);

  // Search
  const [busca, setBusca] = useState("");

  // Form Agendamento
  const [clienteAgendamento, setClienteAgendamento] = useState("");
  const [profissionalAgendamento, setProfissionalAgendamento] = useState("");
  const [servicosAgendamento, setServicosAgendamento] = useState<number[]>([]);
  const [dataAgendamento, setDataAgendamento] = useState("");
  const [horaAgendamento, setHoraAgendamento] = useState("");

  // Relatório
  const [relatorioData, setRelatorioData] = useState<any>(null);

  // Vendas
  const [carrinho, setCarrinho] = useState<{produto: Produto; qnt: number}[]>([]);
  const [clienteCompra, setClienteCompra] = useState("");
  const [vendedorCompra, setVendedorCompra] = useState("");
  const [formaPagamento, setFormaPagamento] = useState("");
  // Filtros Produto
  const [filtroProdNome, setFiltroProdNome] = useState("");
  const [filtroProdCat, setFiltroProdCat] = useState("");
  const [filtroProdMari, setFiltroProdMari] = useState(false);
  const [filtroProdPrecoMin, setFiltroProdPrecoMin] = useState("");
  const [filtroProdPrecoMax, setFiltroProdPrecoMax] = useState("");

  const [vendaNovoCliente, setVendaNovoCliente] = useState(false);
  const [vendaNovoClienteNome, setVendaNovoClienteNome] = useState("");
  const [vendaNovoClienteTelefone, setVendaNovoClienteTelefone] = useState("");
  const [vendaNovoClienteEmail, setVendaNovoClienteEmail] = useState("");

  const [historicoVendasVisivel, setHistoricoVendasVisivel] = useState(false);
  const [historicoVendas, setHistoricoVendas] = useState<any[]>([]);

  const [mensagemErro, setMensagemErro] = useState("");
  
  // Handlers base
  const fetchAllForSelects = async () => {
    listarClientes();
    listarProfissionais();
    listarServicos();
    listarVendedores();
  }

  const listarClientes = async () => {
    const res = await axios.get(`${API_URL}/clientes`);
    setClientes(res.data);
  };
  const listarProfissionais = async () => {
    const res = await axios.get(`${API_URL}/profissionais`);
    setProfissionais(res.data);
  };
  const listarServicos = async () => {
    const res = await axios.get(`${API_URL}/servicos`);
    setServicos(res.data);
  };
  const listarAgendamentos = async () => {
    const res = await axios.get(`${API_URL}/agendamentos`);
    setAgendamentos(res.data);
  };
  const listarVendedores = async () => {
    const res = await axios.get(`${API_URL}/vendedores`);
    setVendedores(res.data);
  };
  const listarProdutos = async () => {
    try {
      const params = new URLSearchParams();
      if (filtroProdNome) params.append("nome", filtroProdNome);
      if (filtroProdCat) params.append("categoria", filtroProdCat);
      if (filtroProdPrecoMin) params.append("precoMin", filtroProdPrecoMin);
      if (filtroProdPrecoMax) params.append("precoMax", filtroProdPrecoMax);
      if (filtroProdMari) params.append("fabricadoEmMari", "true");
      const res = await axios.get(`${API_URL}/produtos?${params.toString()}`);
      setProdutos(res.data);
    } catch {
      setMensagemErro("Erro ao carregar produtos");
    }
  };

  const buscarHistoricoVendas = async (clienteId: number) => {
    try {
      const res = await axios.get(`${API_URL}/vendas/cliente/${clienteId}`);
      setHistoricoVendas(res.data);
      setHistoricoVendasVisivel(true);
    } catch {
      alert("Erro ao buscar histórico.");
    }
  };

  const adicionarCliente = async (e: React.FormEvent) => {
    e.preventDefault();
    setMensagemErro("");
    const payload = { nome, telefone, email, isFlamengo, assisteOP, cidadeNascimento };
    try {
      if (clienteEditandoId) {
        await axios.put(`${API_URL}/clientes/${clienteEditandoId}`, payload);
        alert("Cliente alterado!");
        setTela("listar");
      } else {
        await axios.post(`${API_URL}/clientes`, payload);
        alert("Cliente cadastrado!");
        setTela("home");
      }
      listarClientes();
    } catch (error: any) {
      setMensagemErro(error.response?.data?.erro || "Erro de conexão.");
    }
  };

  const exibirCliente = async (id: number) => {
    try {
      const res = await axios.get(`${API_URL}/clientes/${id}`);
      setClienteSelecionado(res.data);
      setTela("exibir-cliente");
    } catch {
      alert("Erro");
    }
  };

  const exibirAgendamentoComHistorico = async (id: number) => {
    try {
      const res = await axios.get(`${API_URL}/agendamentos/${id}`);
      setAgendamentoSelecionado(res.data);
      setTela("exibir-agendamento");
    } catch {
      alert("Erro ao carregar");
    }
  };

  const editarCliente = (cliente: Cliente) => {
    setClienteEditandoId(cliente.id);
    setNome(cliente.nome);
    setTelefone(cliente.telefone);
    setEmail(cliente.email || "");
    setIsFlamengo(cliente.isFlamengo || false);
    setAssisteOP(cliente.assisteOP || false);
    setCidadeNascimento(cliente.cidadeNascimento || "");
    setTela("novo");
  };

  const salvarAgendamento = async (e: React.FormEvent) => {
    e.preventDefault();
    setMensagemErro("");
    if (!dataAgendamento || !horaAgendamento) return setMensagemErro("Selecione data/hora.");
    if (servicosAgendamento.length === 0) return setMensagemErro("Selecione no min 1 serviço.");
    
    const dataHoraCombinada = `${dataAgendamento}T${horaAgendamento}:00`;
    try {
      await axios.post(`${API_URL}/agendamentos`, {
        clienteId: clienteAgendamento,
        profissionalId: profissionalAgendamento,
        servicosIds: servicosAgendamento,
        dataHora: dataHoraCombinada,
      });
      alert("Agendado!");
      listarAgendamentos();
    } catch (err: any) {
      setMensagemErro(err.response?.data?.erro || "Erro no agendamento");
    }
  };

  const registrarVenda = async () => {
    let finalClienteId = clienteCompra;

    if (vendaNovoCliente) {
      if (!vendaNovoClienteNome || !vendaNovoClienteTelefone) {
         return alert("Preencha nome e telefone do novo cliente comprador.");
      }
      try {
         const res = await axios.post(`${API_URL}/clientes`, {
            nome: vendaNovoClienteNome,
            telefone: vendaNovoClienteTelefone,
            email: vendaNovoClienteEmail,
            isFlamengo: false,
            assisteOP: false
         });
         finalClienteId = res.data.id;
      } catch (e: any) {
         return alert(e.response?.data?.erro || "Erro ao registrar novo cliente durante a compra.");
      }
    }

    if (!finalClienteId || !vendedorCompra || !formaPagamento || carrinho.length === 0) {
      alert("Oops! Preencha cliente, vendedor, forma de pag. e adicione itens.");
      return;
    }
    const payload = {
      clienteId: finalClienteId,
      vendedorId: vendedorCompra,
      formaPagamento,
      itens: carrinho.map(c => ({
        produtoId: c.produto.id, quantidade: c.qnt, precoUnitario: c.produto.preco
      }))
    };

    try {
      await axios.post(`${API_URL}/vendas`, payload);
      alert("Venda Registrada com Sucesso!");
      setCarrinho([]);
      setVendaNovoClienteNome("");
      setVendaNovoClienteTelefone("");
      setVendaNovoClienteEmail("");
      listarProdutos();
      listarClientes();
    } catch(e: any) {
      alert(e.response?.data?.erro || "Erro ao registrar venda.");
    }
  };

  const addAoCarrinho = (p: Produto) => {
    if (p.estoque === 0) return alert("Sem estoque.");
    setCarrinho(prev => {
      const exibe = prev.find(i => i.produto.id === p.id);
      if (exibe) {
        if (exibe.qnt + 1 > p.estoque) return prev;
        return prev.map(i => i.produto.id === p.id ? { ...i, qnt: i.qnt + 1 } : i);
      }
      return [...prev, { produto: p, qnt: 1 }];
    });
  }

  // --- RENDERS ---
  const HomeBtn = ({ t, title, icon, color, hoverBorder }: any) => (
    <button onClick={() => { setTela(t); fetchAllForSelects(); if(t==='listar')listarClientes(); if(t==='agendar')listarAgendamentos(); if(t==='vendas'){ listarProdutos(); setCarrinho([]); } }} 
      className={`bg-white p-8 rounded-3xl shadow-sm border-2 border-transparent ${hoverBorder || 'hover:border-indigo-500'} transition flex flex-col items-center gap-4 group`}>
      <div className={`p-4 rounded-2xl ${color} transition`}>{icon}</div>
      <span className="font-bold text-xl text-slate-700">{title}</span>
    </button>
  );

  return (
    <div className="min-h-screen bg-slate-50 p-4 md:p-8 font-sans text-slate-900">
      <div className="max-w-6xl mx-auto">
        <header className="mb-8 flex justify-between items-center bg-white p-4 rounded-full shadow-sm">
          <div className="flex items-center gap-4">
            {tela !== "home" && (
              <button onClick={() => setTela("home")} className="p-2 hover:bg-slate-200 rounded-full transition">
                <ArrowLeft size={24} />
              </button>
            )}
            <h1 className="text-2xl font-black text-indigo-600 flex items-center gap-2 px-4">
              <UserCircle size={32} /> Salão dos Manos
            </h1>
          </div>
        </header>

        {tela === "home" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <HomeBtn t="novo" title="Novo Cliente" icon={<UserPlus size={32} />} color="bg-indigo-100 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white" hoverBorder="hover:border-indigo-500" />
            <HomeBtn t="listar" title="Listar Clientes" icon={<Users size={32} />} color="bg-emerald-100 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white" hoverBorder="hover:border-emerald-500" />
            <HomeBtn t="agendar" title="Agendamentos" icon={<Calendar size={32} />} color="bg-rose-100 text-rose-600 group-hover:bg-rose-600 group-hover:text-white" hoverBorder="hover:border-rose-500" />
            <HomeBtn t="vendas" title="Módulo Vendas" icon={<ShoppingCart size={32} />} color="bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white" hoverBorder="hover:border-blue-500" />
            <button onClick={async () => { const res = await axios.get(`${API_URL}/relatorio`); setRelatorioData(res.data); setTela("relatorio"); }} className="bg-white p-8 rounded-3xl shadow-sm border-2 border-transparent hover:border-amber-500 transition-all flex flex-col items-center gap-4 group">
               <div className="bg-amber-100 p-4 rounded-2xl text-amber-600 group-hover:bg-amber-600 group-hover:text-white transition"><FileText size={32} /></div>
               <span className="font-bold text-xl text-slate-700">Relatórios</span>
            </button>
          </div>
        )}

        {tela === "novo" && (
          <div className="bg-white p-8 rounded-3xl shadow-sm max-w-xl mx-auto border border-slate-100">
            <h2 className="text-2xl font-bold mb-6 flex gap-2 text-indigo-600">
              <UserPlus /> {clienteEditandoId ? "Alterar" : "Cadastrar"} Cliente
            </h2>
            <form onSubmit={adicionarCliente} className="flex flex-col gap-4">
              {mensagemErro && <p className="text-red-500 font-bold bg-red-50 p-3 rounded-lg">{mensagemErro}</p>}
              <input className="border border-slate-200 p-3 rounded-xl outline-none" placeholder="Nome" value={nome} onChange={(e) => setNome(e.target.value)} required />
              <input className="border border-slate-200 p-3 rounded-xl outline-none" placeholder="Telefone" value={telefone} onChange={(e) => setTelefone(e.target.value)} required />
              <input className="border border-slate-200 p-3 rounded-xl outline-none" placeholder="E-mail (opicional)" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
              
              <div className="bg-slate-50 p-4 rounded-xl space-y-3 border border-slate-100">
                 <p className="font-bold text-slate-700">Atributos e Descontos</p>
                 <label className="flex items-center gap-2 text-slate-600 cursor-pointer">
                    <input type="checkbox" checked={isFlamengo} onChange={e => setIsFlamengo(e.target.checked)} className="w-5 h-5 accent-red-500 rounded" />
                    Torce Flamengo (Desconto 10%)
                 </label>
                 <label className="flex items-center gap-2 text-slate-600 cursor-pointer">
                    <input type="checkbox" checked={assisteOP} onChange={e => setAssisteOP(e.target.checked)} className="w-5 h-5 accent-purple-500 rounded" />
                    Assiste One Piece (Desconto 10%)
                 </label>
                 <input className="border border-slate-200 p-2 rounded-xl outline-none w-full" placeholder="Cidade de Nascimento (ex: Sousa para desconto)" value={cidadeNascimento} onChange={e => setCidadeNascimento(e.target.value)} />
              </div>
              
              <button className="bg-indigo-600 text-white font-bold py-4 rounded-xl hover:bg-indigo-700 transition">Salvar Cliente</button>
            </form>
          </div>
        )}

        {tela === "listar" && (
          <div className="bg-white p-6 rounded-3xl shadow-sm">
            <div className="flex gap-2 mb-6">
               <input className="border border-slate-200 p-3 rounded-xl flex-1 outline-none" placeholder="Busque por nome" value={busca} onChange={e=>setBusca(e.target.value)} />
               <button onClick={async () => setClientes((await axios.get(`${API_URL}/clientes/busca?nome=${busca}`)).data)} className="bg-indigo-600 text-white font-bold px-6 rounded-xl hover:bg-indigo-700">Buscar</button>
            </div>
            <div className="grid gap-4">
              {clientes.map(c => (
                <div key={c.id} className="border border-slate-100 p-4 rounded-xl flex justify-between items-center hover:bg-indigo-50 hover:border-indigo-200 transition">
                  <div>
                    <p className="font-bold text-lg">{c.nome}</p>
                    <p className="text-slate-500 text-sm">Cel: {c.telefone} | Nasc.: {c.cidadeNascimento || 'N/A'}</p>
                  </div>
                  <div className="flex gap-2">
                    <button onClick={() => exibirCliente(c.id)} className="bg-indigo-50 p-2 rounded-lg text-indigo-600"><Eye size={20}/></button>
                    <button onClick={() => editarCliente(c)} className="bg-amber-50 p-2 rounded-lg text-amber-600"><Pencil size={20}/></button>
                    <button onClick={() => buscarHistoricoVendas(c.id)} className="bg-emerald-50 p-2 rounded-lg text-emerald-600" title="Histórico de Vendas"><ShoppingCart size={20}/></button>
                    <button onClick={async () => { if(confirm('Excluir Cliente?')){ await axios.delete(`${API_URL}/clientes/${c.id}`); listarClientes()} }} className="bg-red-50 p-2 rounded-lg text-red-600" title="Excluir"><Trash2 size={20}/></button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {tela === "exibir-cliente" && clienteSelecionado && (
           <div className="bg-white max-w-xl mx-auto rounded-3xl p-8 shadow-lg text-center">
              <UserCircle size={80} className="mx-auto text-indigo-500 mb-4" />
              <h2 className="text-3xl font-black mb-1">{clienteSelecionado.nome}</h2>
              <p className="text-slate-500 mb-6 font-medium">Cadastrado em {new Date(clienteSelecionado.dataCadastro || "").toLocaleDateString()}</p>
              
              <div className="grid grid-cols-2 gap-4 text-left">
                <div className="bg-slate-50 p-4 rounded-xl"><span className="block text-slate-400 font-bold text-xs uppercase">Telefone</span> {clienteSelecionado.telefone}</div>
                <div className="bg-slate-50 p-4 rounded-xl"><span className="block text-slate-400 font-bold text-xs uppercase">Email</span> {clienteSelecionado.email || '-'}</div>
                <div className="bg-slate-50 p-4 rounded-xl"><span className="block text-slate-400 font-bold text-xs uppercase">Cidade Nasc.</span> {clienteSelecionado.cidadeNascimento || '-'}</div>
                <div className="bg-slate-50 p-4 rounded-xl"><span className="block text-slate-400 font-bold text-xs uppercase">Tags</span> 
                  {(clienteSelecionado.isFlamengo || false) && <span className="bg-red-100 text-red-700 text-xs px-2 py-1 rounded inline-block">Mengo</span>}
                  {' '}{(clienteSelecionado.assisteOP || false) && <span className="bg-purple-100 text-purple-700 text-xs px-2 py-1 rounded inline-block">One Piece</span>}
                </div>
              </div>
           </div>
        )}

        {tela === "agendar" && (
           <div className="grid md:grid-cols-2 gap-8 items-start">
             <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
               <h2 className="text-2xl font-bold mb-6 text-rose-600 flex items-center gap-2"><Calendar /> Novo Agendamento</h2>
               <form onSubmit={salvarAgendamento} className="flex flex-col gap-4">
                 {mensagemErro && <p className="text-red-600 bg-red-50 py-2 px-4 rounded">{mensagemErro}</p>}
                 <select className="border p-3 rounded-xl focus:border-rose-500 outline-none" value={clienteAgendamento} onChange={e=>setClienteAgendamento(e.target.value)} required>
                    <option value="">Selecione o Cliente</option>
                    {clientes.map(c => <option key={c.id} value={c.id}>{c.nome}</option>)}
                 </select>
                 <select className="border p-3 rounded-xl outline-none" value={profissionalAgendamento} onChange={e=>setProfissionalAgendamento(e.target.value)} required>
                    <option value="">Selecione Profissional</option>
                    {profissionais.map(p => <option key={p.id} value={p.id}>{p.nome}</option>)}
                 </select>
                 
                 <div className="border border-slate-200 p-4 rounded-xl bg-slate-50">
                   <p className="font-bold mb-2 text-slate-700 text-sm uppercase">Selecione os Serviços</p>
                   {servicos.map(s => (
                     <label key={s.id} className="flex items-center gap-2 mb-2 cursor-pointer">
                       <input type="checkbox" className="w-4 h-4" 
                         checked={servicosAgendamento.includes(s.id)}
                         onChange={(e) => {
                           if(e.target.checked) setServicosAgendamento([...servicosAgendamento, s.id])
                           else setServicosAgendamento(servicosAgendamento.filter(id => id !== s.id))
                         }} 
                       /> <span>{s.descricao} - R${s.preco.toFixed(2)}</span>
                     </label>
                   ))}
                 </div>
                 
                 <div className="flex gap-4">
                    <input type="date" className="border p-3 rounded-xl w-full" value={dataAgendamento} onChange={e=>setDataAgendamento(e.target.value)} required/>
                    <select className="border p-3 rounded-xl w-full" value={horaAgendamento} onChange={e=>setHoraAgendamento(e.target.value)} required>
                      <option value="">Hora</option>
                      {["08:00","09:00","10:00","11:00","13:00","14:00","15:00","16:00"].map(h=><option key={h} value={h}>{h}</option>)}
                    </select>
                 </div>
                 
                 <button className="bg-rose-600 hover:bg-rose-700 text-white font-bold p-4 rounded-xl mt-2 transition">Confirmar Horário</button>
               </form>
             </div>
             
             <div className="space-y-4">
               <h3 className="font-bold text-2xl text-slate-700 mb-4 px-2">Agendamentos Lançados</h3>
               {agendamentos.map(ag => (
                 <div key={ag.id} className="bg-white p-5 rounded-2xl shadow border-l-4 border-rose-500 flex justify-between hover:bg-rose-50 transition">
                   <div>
                     <p className="font-bold text-lg">{ag.cliente.nome}</p>
                     <p className="text-slate-500 text-sm">c/ {ag.profissional.nome}</p>
                     <p className="text-xs text-rose-500 font-bold mt-1 bg-rose-50 px-2 py-0.5 rounded-full inline-block">
                       {ag.servicos?.length || 0} serviço(s)
                     </p>
                   </div>
                   <div className="text-right flex flex-col items-end gap-2">
                     <span className="font-bold text-indigo-700 bg-indigo-50 px-3 py-1 rounded-full text-sm">
                       {new Date(ag.dataHora).toLocaleString('pt-BR', {hour:'2-digit', minute:'2-digit', day:'2-digit', month:'2-digit'})}
                     </span>
                     <button onClick={() => exibirAgendamentoComHistorico(ag.id)} className="bg-indigo-100 text-indigo-700 text-xs font-bold px-3 py-1 rounded hover:bg-indigo-200">Exibir Detalhes</button>
                     <button onClick={async() => { if(confirm('Cancelar Agendamento?')){ await axios.delete(`${API_URL}/agendamentos/${ag.id}`); listarAgendamentos()} }} className="text-red-500 text-xs font-bold flex gap-1 hover:underline mt-1"><Trash2 size={14}/> Apagar</button>
                   </div>
                 </div>
               ))}
             </div>
           </div>
        )}

        {tela === "exibir-agendamento" && agendamentoSelecionado && (
           <div className="max-w-4xl mx-auto space-y-6">
              <div className="bg-white p-8 rounded-3xl shadow-lg relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-10"><Calendar size={120}/></div>
                <h2 className="text-3xl font-black text-rose-600 mb-6 border-b pb-4">Detalhes do Agendamento #{agendamentoSelecionado.id}</h2>
                <div className="grid md:grid-cols-2 gap-8 relative z-10">
                  <div>
                    <p className="text-xl font-bold">{agendamentoSelecionado.cliente.nome}</p>
                    <p className="text-slate-500 mb-4">Com profissional: <span className="font-bold">{agendamentoSelecionado.profissional.nome}</span></p>
                    <p className="text-lg font-bold text-indigo-600 flex items-center gap-2 mb-4 bg-indigo-50 p-2 rounded-lg inline-flex">
                      <Clock size={20}/> {new Date(agendamentoSelecionado.dataHora).toLocaleString('pt-BR')}
                    </p>
                  </div>
                  <div className="bg-slate-50 border border-slate-100 p-4 rounded-2xl">
                    <p className="font-bold uppercase text-xs tracking-wider text-slate-400 mb-2">Serviços Contratados ({agendamentoSelecionado.servicos.length})</p>
                    {agendamentoSelecionado.servicos.map((s:any) => (
                       <div key={s.id} className="flex justify-between border-b last:border-0 border-slate-200 py-2 font-medium">
                         <span>{s.descricao}</span>
                         <span className="text-emerald-600">R$ {s.preco.toFixed(2)}</span>
                       </div>
                    ))}
                    <div className="mt-4 pt-2 border-t-2 border-dashed border-slate-300 flex justify-between font-black text-lg">
                       <span>Total Estimado:</span>
                       <span className="text-emerald-700">R$ {agendamentoSelecionado.servicos.reduce((a:any, b:any)=>a+b.preco, 0).toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* O Histórico */}
              <div className="bg-white p-8 rounded-3xl shadow">
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-2 text-indigo-700"><Clock/> Histórico deste Cliente</h3>
                {agendamentoSelecionado.historico && agendamentoSelecionado.historico.length > 0 ? (
                   <div className="grid gap-4">
                     {agendamentoSelecionado.historico.map((h:any) => (
                        <div key={h.id} className="border border-slate-200 p-4 rounded-xl flex justify-between hover:bg-slate-50">
                          <div>
                            <p className="font-bold text-slate-700">Com {h.profissional.nome}</p>
                            <p className="text-sm text-slate-500">{h.servicos.map((s:any)=>s.descricao).join(', ')}</p>
                          </div>
                          <div className="font-bold text-slate-500 text-sm">
                            {new Date(h.dataHora).toLocaleDateString()}
                          </div>
                        </div>
                     ))}
                   </div>
                ) : (
                   <p className="text-slate-500 italic p-4 bg-slate-50 rounded-xl">Nenhum agendamento anterior para este cliente.</p>
                )}
              </div>
           </div>
        )}

        {tela === "vendas" && (
           <div className="grid lg:grid-cols-3 gap-6">
             <div className="lg:col-span-2 space-y-4">
               {/* Painel Buscar Produtos */}
               <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 flex flex-wrap gap-4 items-end">
                 <div className="flex-1 min-w-[200px]"><input className="w-full border p-2 rounded-lg outline-none" placeholder="Buscar Produto (Nome)" value={filtroProdNome} onChange={e=>setFiltroProdNome(e.target.value)} /></div>
                 <div className="w-32"><input className="w-full border p-2 rounded-lg outline-none" placeholder="Categoria" value={filtroProdCat} onChange={e=>setFiltroProdCat(e.target.value)} /></div>
                 
                 <div className="flex gap-2 w-48">
                   <input type="number" className="w-full border p-2 rounded-lg outline-none" placeholder="Min R$" value={filtroProdPrecoMin} onChange={e=>setFiltroProdPrecoMin(e.target.value)} />
                   <input type="number" className="w-full border p-2 rounded-lg outline-none" placeholder="Max R$" value={filtroProdPrecoMax} onChange={e=>setFiltroProdPrecoMax(e.target.value)} />
                 </div>
                 
                 <label className="flex items-center gap-1 font-bold text-sm text-slate-600 bg-slate-100 p-2 rounded-lg cursor-pointer">
                    <input type="checkbox" checked={filtroProdMari} onChange={e=>setFiltroProdMari(e.target.checked)} />
                    De Mari
                 </label>
                 <button onClick={listarProdutos} className="bg-indigo-600 text-white p-2 rounded-lg font-bold px-4 flex gap-1"><Filter size={18}/> Filtrar</button>
               </div>
               
               {/* Lista de Produtos */}
               <div className="grid sm:grid-cols-2 gap-4">
                 {produtos.map(p => (
                    <div key={p.id} className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100 flex flex-col relative overflow-hidden">
                       {p.fabricadoEmMari && <span className="absolute top-0 right-0 bg-yellow-400 text-yellow-900 font-bold text-[10px] px-2 py-0.5 rounded-bl-lg">Fabricado em Mari</span>}
                       <p className="font-black text-xl text-slate-800">{p.nome}</p>
                       <p className="text-sm text-slate-500 mb-2 uppercase tracking-wide">{p.categoria}</p>
                       <p className="text-2xl font-black text-emerald-600 mb-4">R$ {p.preco.toFixed(2)}</p>
                       <div className="flex justify-between items-center mt-auto">
                         <span className={`font-bold text-sm ${p.estoque < 5 ? 'text-red-500' : 'text-slate-500'}`}>{p.estoque > 0 ? `${p.estoque} no estoque` : 'Esgotado'}</span>
                         <button onClick={() => addAoCarrinho(p)} disabled={p.estoque===0} className="bg-blue-600 disabled:bg-slate-300 text-white p-2 rounded-lg font-bold"><Plus size={18}/></button>
                       </div>
                    </div>
                 ))}
                 {produtos.length === 0 && <div className="col-span-2 text-center p-8 text-slate-400 font-bold">Nenhum produto encontra-se no momento.</div>}
               </div>
             </div>
             
             {/* Carrinho Checkout */}
             <div className="bg-white p-6 rounded-3xl shadow-lg border border-slate-100 h-max sticky top-8">
               <h3 className="text-2xl font-black mb-6 text-blue-600 flex gap-2 border-b pb-4"><ShoppingCart/> Carrinho Checkout</h3>
               
               <div className="space-y-4 mb-6 relative z-20">
                 <div className="bg-slate-50 border border-slate-200 p-3 rounded-xl">
                   <div className="flex gap-4 mb-3 border-b pb-2">
                      <label className="flex items-center gap-1 cursor-pointer font-bold text-slate-600 text-sm">
                         <input type="radio" checked={!vendaNovoCliente} onChange={() => setVendaNovoCliente(false)} name="tipoCli" className="accent-blue-600"/> Existente
                      </label>
                      <label className="flex items-center gap-1 cursor-pointer font-bold text-slate-600 text-sm">
                         <input type="radio" checked={vendaNovoCliente} onChange={() => setVendaNovoCliente(true)} name="tipoCli" className="accent-blue-600"/> Cadastrar Novo
                      </label>
                   </div>
                   
                   {!vendaNovoCliente ? (
                     <select className="w-full border border-white p-2 rounded-lg outline-none focus:border-blue-500 shadow-sm" value={clienteCompra} onChange={e=>setClienteCompra(e.target.value)}>
                        <option value="">Selecione na lista...</option>
                        {clientes.map(c => <option key={c.id} value={c.id}>{c.nome}</option>)}
                     </select>
                   ) : (
                     <div className="space-y-2">
                       <input className="w-full border border-white p-2 rounded-lg text-sm outline-none focus:border-blue-500 shadow-sm" placeholder="Nome Completo" value={vendaNovoClienteNome} onChange={e=>setVendaNovoClienteNome(e.target.value)} />
                       <input className="w-full border border-white p-2 rounded-lg text-sm outline-none focus:border-blue-500 shadow-sm" placeholder="Telefone" value={vendaNovoClienteTelefone} onChange={e=>setVendaNovoClienteTelefone(e.target.value)} />
                       <input className="w-full border border-white p-2 rounded-lg text-sm outline-none focus:border-blue-500 shadow-sm" placeholder="Email (opcional)" value={vendaNovoClienteEmail} onChange={e=>setVendaNovoClienteEmail(e.target.value)} />
                     </div>
                   )}
                 </div>
                 
                 <select className="w-full border border-slate-200 p-3 rounded-xl focus:border-blue-500 outline-none" value={vendedorCompra} onChange={e=>setVendedorCompra(e.target.value)}>
                    <option value="">2. Vendedor Responsável</option>
                    {vendedores.map(v => <option key={v.id} value={v.id}>{v.nome}</option>)}
                 </select>
               </div>
               
               <div className="space-y-3 mb-6 max-h-48 overflow-y-auto pr-2">
                 {carrinho.map(item => (
                   <div key={item.produto.id} className="flex justify-between items-center text-sm font-medium border-b border-slate-100 pb-2">
                     <span className="flex-1 truncate pr-2">{item.produto.nome}</span>
                     <span className="bg-slate-100 px-2 py-0.5 rounded mr-2">x{item.qnt}</span>
                     <span className="text-emerald-700">R$ {(item.produto.preco * item.qnt).toFixed(2)}</span>
                   </div>
                 ))}
                 {carrinho.length === 0 && <p className="text-slate-400 text-center italic text-sm">Carrinho vazio</p>}
               </div>
               
               <div className="bg-slate-50 p-4 rounded-xl border border-dashed border-slate-300 mb-6">
                 <div className="flex justify-between font-bold text-slate-500 mb-1">
                   <span>Subtotal</span>
                   <span>R$ {carrinho.reduce((a,b)=>a+(b.qnt*b.produto.preco), 0).toFixed(2)}</span>
                 </div>
                 <div className="flex justify-between font-black text-xl text-blue-800 border-t pt-2 mt-2 border-slate-200">
                   <span>Total Estimado</span>
                   <span>R$ {carrinho.reduce((a,b)=>a+(b.qnt*b.produto.preco), 0).toFixed(2)}</span>
                 </div>
                 <p className="text-[10px] text-center text-slate-400 mt-2">* Descontos automáticos de perfil são aplicados ao finalizar.</p>
               </div>
               
               <select className="w-full border-2 border-slate-200 p-3 mb-4 rounded-xl focus:border-emerald-500 outline-none font-bold text-slate-700" value={formaPagamento} onChange={e=>setFormaPagamento(e.target.value)}>
                  <option value="">Forma de Pagamento</option>
                  <option value="Dinheiro">Dinheiro</option>
                  <option value="Cartão">Cartão</option>
                  <option value="PIX">PIX</option>
                  <option value="Berries">Berries (One Piece Mod)</option>
                  <option value="Boleto">Boleto Bancário</option>
               </select>

               <button onClick={registrarVenda} className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-black text-lg py-4 rounded-xl shadow-lg transition flex justify-center gap-2 items-center">
                 <CheckCircle2/> Finalizar Venda
               </button>
             </div>
           </div>
        )}

        {tela === "relatorio" && relatorioData && (
           <div className="bg-transparent p-4 w-full max-w-6xl mx-auto space-y-6">
             <div className="flex justify-between items-center mb-6">
               <h2 className="text-3xl font-black text-amber-600 flex items-center gap-2"><FileText/> {relatorioData.titulo}</h2>
             </div>
             
             {/* Totals Grid */}
             <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
               <div className="bg-white shadow-sm p-6 rounded-3xl border border-slate-100 flex flex-col justify-center">
                   <p className="font-bold text-slate-400 uppercase text-xs mb-1">Clientes Registrados</p>
                   <p className="text-4xl font-black text-slate-800">{relatorioData.totalClientes}</p>
               </div>
               <div className="bg-white shadow-sm p-6 rounded-3xl border border-slate-100">
                   <p className="font-bold text-slate-400 uppercase text-xs mb-1">Faturamento Serviços</p>
                   <p className="text-3xl font-black text-emerald-500">R$ {relatorioData.faturamentoServicos?.toFixed(2) || '0.00'}</p>
               </div>
               <div className="bg-white shadow-sm p-6 rounded-3xl border border-slate-100">
                   <p className="font-bold text-slate-400 uppercase text-xs mb-1">Faturamento Vendas</p>
                   <p className="text-3xl font-black text-blue-500">R$ {relatorioData.faturamentoVendas?.toFixed(2) || '0.00'}</p>
               </div>
               <div className="bg-indigo-600 shadow-lg p-6 rounded-3xl text-white">
                   <p className="font-bold text-indigo-200 uppercase text-xs mb-1">Total Geral Líquido</p>
                   <p className="text-3xl font-black">R$ {relatorioData.faturamentoTotal.toFixed(2)}</p>
               </div>
             </div>
             
             {/* Charts Row */}
             <div className="grid md:grid-cols-2 gap-6">
                
                {/* Serviços Stats */}
                <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
                  <h3 className="font-bold text-slate-700 mb-6 flex items-center gap-2"><Scissors size={20} className="text-emerald-500"/> Serviços Mais Executados</h3>
                  <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={relatorioData.servicosMaisPedidos || []} layout="vertical" margin={{top: 0, right: 30, left: 20, bottom: 0}}>
                        <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#e2e8f0"/>
                        <XAxis type="number" hide />
                        <YAxis dataKey="name" type="category" width={120} tick={{fontSize: 12, fill: '#64748b', fontWeight: 600}} axisLine={false} tickLine={false} />
                        <Tooltip cursor={{fill: '#f8fafc'}} contentStyle={{borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'}} />
                        <Bar dataKey="value" fill="#10b981" radius={[0, 4, 4, 0]} barSize={24} />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                {/* Produtos Stats */}
                <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
                  <h3 className="font-bold text-slate-700 mb-6 flex items-center gap-2"><ShoppingCart size={20} className="text-blue-500"/> Produtos Campeões de Vendas</h3>
                  <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={relatorioData.produtosMaisVendidos || []} margin={{top: 0, right: 0, left: 0, bottom: 0}}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0"/>
                        <XAxis dataKey="name" tick={{fontSize: 12, fill: '#64748b', fontWeight: 600}} axisLine={false} tickLine={false}/>
                        <YAxis hide />
                        <Tooltip cursor={{fill: '#f8fafc'}} formatter={(val: any)=>[`${val} unidades`, 'Vendido']} contentStyle={{borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'}} />
                        <Bar dataKey="value" fill="#3b82f6" radius={[4, 4, 0, 0]} barSize={40} />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>

             </div>

             <div className="grid md:grid-cols-2 gap-6">
                {/* Formas de Pagamento (Donut) */}
                <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 flex flex-col items-center">
                  <h3 className="font-bold text-slate-700 w-full mb-2 border-b pb-4">Volume por Forma de Pagamento (Vendas)</h3>
                  <div className="h-64 w-full max-w-xs mt-4">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie data={relatorioData.pagamentosChart || []} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} paddingAngle={5}>
                           {(relatorioData.pagamentosChart || []).map((_entry: any, index: number) => (
                              <Cell key={`cell-${index}`} fill={['#10b981', '#3b82f6', '#f59e0b', '#8b5cf6', '#ec4899'][index % 5]} />
                           ))}
                        </Pie>
                        <Tooltip formatter={(val: any) => `R$ ${Number(val).toFixed(2)}`} contentStyle={{borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'}}/>
                        <Legend wrapperStyle={{fontSize: '12px', fontWeight: 600, color: '#64748b'}} />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </div>
                
                {/* Blank Space or Extra Stats */}
                <div className="bg-gradient-to-br from-amber-100 to-orange-100 p-8 rounded-3xl border border-amber-200 flex flex-col justify-center items-center text-center">
                   <div className="bg-white/50 p-4 rounded-full mb-4 inline-block"><CheckCircle2 size={32} className="text-amber-600"/></div>
                   <h3 className="text-xl font-black text-amber-900 mb-2">Visão Geral Completa</h3>
                   <p className="text-amber-700 text-sm font-medium">Os gráficos são atualizados em tempo real conforme as operações no sistema são realizadas pelos vendedores e profissionais.</p>
                </div>
             </div>

           </div>
        )}
        {historicoVendasVisivel && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto shadow-2xl">
              <div className="flex justify-between items-center mb-6">
                 <h2 className="text-2xl font-black text-slate-800 flex items-center gap-2"><ShoppingCart className="text-blue-500"/> Histórico de Vendas</h2>
                 <button onClick={() => setHistoricoVendasVisivel(false)} className="text-slate-400 hover:text-slate-700 font-bold bg-slate-100 py-1 px-3 rounded-full transition">Fechar</button>
              </div>
              <div className="space-y-4">
                 {historicoVendas.length === 0 && <p className="text-slate-500 text-center bg-slate-50 p-4 rounded-xl">Nenhuma venda registrada para este cliente.</p>}
                 {historicoVendas.map(v => (
                    <div key={v.id} className="border border-slate-200 p-4 rounded-xl shadow-sm hover:border-blue-200 transition">
                       <div className="flex justify-between border-b pb-2 mb-2">
                         <span className="font-bold text-emerald-600 flex items-center gap-1"><CheckCircle2 size={16}/> {v.statusPagamento}</span>
                         <span className="text-sm font-medium text-slate-500">{new Date(v.dataHora).toLocaleString('pt-BR')}</span>
                       </div>
                       <p className="font-bold text-slate-700 mb-2">Vendedor: <span className="text-blue-600">{v.vendedor?.nome}</span> | <span className="bg-slate-100 px-2 py-0.5 rounded text-sm">{v.formaPagamento}</span></p>
                       <ul className="text-sm text-slate-600 space-y-1 bg-slate-50 p-3 rounded-lg border border-slate-100 mb-2">
                         {v.itens.map((i:any) => <li key={i.id} className="flex justify-between"><span>{i.quantidade}x {i.produto?.nome}</span> <span>(R$ {i.precoUnitario.toFixed(2)})</span></li>)}
                       </ul>
                       <p className="text-right font-black text-lg text-emerald-700 mt-2">Valor Pago: R$ {v.valorTotal.toFixed(2)}</p>
                    </div>
                 ))}
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
