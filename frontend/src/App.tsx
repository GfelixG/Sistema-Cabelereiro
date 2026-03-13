import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import {
  UserPlus,
  Users,
  Trash2,
  Search,
  UserCircle,
  ClipboardList,
} from "lucide-react";

const API_URL = "http://localhost:3001/clientes";

interface Cliente {
  id: number;
  nome: string;
  telefone: string;
  email?: string;
}

function App() {
  const [clientes, setClientes] = useState<Cliente[]>([]);
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");
  const [busca, setBusca] = useState("");

  const listarClientes = useCallback(async () => {
    try {
      const response = await axios.get(API_URL);
      setClientes(response.data);
    } catch (error) {
      console.error("Erro ao conectar com o backend:", error);
    }
  }, []);

  // Carregar clientes ao abrir a página
  useEffect(() => {
    const carregar = async () => {
      await listarClientes();
    };

    void carregar();
  }, [listarClientes]);

  const adicionarCliente = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post<Cliente>(API_URL, {
        nome,
        telefone,
        email,
      });
      setClientes((prev) => [response.data, ...prev]);
      setNome("");
      setTelefone("");
      setEmail("");
      setBusca("");
    } catch {
      alert("Erro ao cadastrar cliente. O backend está rodando?");
    }
  };

  const removerCliente = async (id: number) => {
    if (!window.confirm("Deseja realmente excluir este cliente?")) {
      return;
    }

    try {
      await axios.delete(`${API_URL}/${id}`);
      listarClientes();
    } catch (error) {
      console.error("Erro ao remover cliente:", error);
      alert("Nao foi possivel remover o cliente.");
    }
  };

  const buscarPorNome = async () => {
    const termo = busca.trim();
    if (!termo) {
      listarClientes();
      return;
    }

    try {
      const response = await axios.get(`${API_URL}/busca?nome=${termo}`);
      setClientes(response.data);
    } catch (error) {
      console.error("Erro ao buscar clientes:", error);
      alert("Nao foi possivel realizar a busca.");
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 p-4 md:p-8 font-sans text-slate-900">
      <div className="max-w-4xl mx-auto">
        <header className="mb-10 text-center md:text-left">
          <h1 className="text-4xl font-extrabold text-indigo-600 flex items-center justify-center md:justify-start gap-3">
            <UserCircle size={44} className="text-indigo-500" />
            Sistema Cabeleireiro
          </h1>
          <p className="text-slate-500 mt-2">
            Gerenciamento de Clientes - Parte 1
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 sticky top-8">
              <h2 className="text-lg font-bold mb-6 flex items-center gap-2 text-slate-700">
                <UserPlus size={20} className="text-indigo-500" /> Novo Cliente
              </h2>
              <form onSubmit={adicionarCliente} className="flex flex-col gap-4">
                <div>
                  <label className="text-xs font-semibold text-slate-400 uppercase mb-1 block">
                    Nome
                  </label>
                  <input
                    className="w-full border border-slate-200 p-2.5 rounded-lg focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition"
                    placeholder="Ex: Ana Silva"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-slate-400 uppercase mb-1 block">
                    Telefone
                  </label>
                  <input
                    className="w-full border border-slate-200 p-2.5 rounded-lg focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition"
                    placeholder="(83) 99999-9999"
                    value={telefone}
                    onChange={(e) => setTelefone(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-slate-400 uppercase mb-1 block">
                    E-mail
                  </label>
                  <input
                    className="w-full border border-slate-200 p-2.5 rounded-lg focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition"
                    placeholder="ana@email.com"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <button className="mt-2 bg-indigo-600 text-white font-bold py-3 rounded-lg hover:bg-indigo-700 active:scale-95 transition shadow-lg shadow-indigo-200">
                  Cadastrar
                </button>
              </form>
            </div>
          </div>

          <div className="md:col-span-2">
            <div className="bg-indigo-600 text-white p-5 rounded-2xl shadow-lg shadow-indigo-100 mb-6 flex items-center justify-between">
              <div>
                <p className="text-indigo-100 text-sm font-medium">
                  Relatório de Clientes
                </p>
                <h3 className="text-2xl font-bold">Total Cadastrados</h3>
              </div>
              <div className="text-4xl font-black bg-white/20 px-4 py-2 rounded-xl">
                {clientes.length}
              </div>
            </div>

            {/* BUSCA */}
            <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-200 mb-6 flex gap-3">
              <div className="relative flex-1">
                <Search
                  className="absolute left-3 top-3 text-slate-400"
                  size={18}
                />
                <input
                  className="w-full bg-slate-50 border-none p-2.5 pl-10 rounded-xl focus:ring-2 focus:ring-indigo-500/20 outline-none transition"
                  placeholder="Pesquisar por nome..."
                  value={busca}
                  onChange={(e) => setBusca(e.target.value)}
                />
              </div>
              <button
                onClick={buscarPorNome}
                className="bg-slate-100 text-slate-600 px-4 rounded-xl hover:bg-slate-200 transition font-bold text-sm"
              >
                Buscar
              </button>
            </div>

            {/* LISTA */}
            <div className="space-y-4">
              <h2 className="text-lg font-bold flex items-center gap-2 text-slate-700 px-2">
                <Users size={20} className="text-indigo-500" /> Clientes Ativos
              </h2>

              {clientes.map((c) => (
                <div
                  key={c.id}
                  className="group bg-white p-5 rounded-2xl shadow-sm border border-slate-200 hover:border-indigo-200 transition-all flex justify-between items-center"
                >
                  <div>
                    <p className="font-bold text-lg text-slate-800 group-hover:text-indigo-600 transition">
                      {c.nome}
                    </p>
                    <div className="flex gap-3 mt-1">
                      <span className="text-slate-500 text-sm font-medium">
                        {c.telefone}
                      </span>
                      {c.email && <span className="text-slate-300">|</span>}
                      <span className="text-slate-400 text-sm">{c.email}</span>
                    </div>
                  </div>
                  <button
                    onClick={() => removerCliente(c.id)}
                    className="text-slate-300 hover:text-red-500 hover:bg-red-50 p-2 rounded-xl transition"
                  >
                    <Trash2 size={22} />
                  </button>
                </div>
              ))}

              {clientes.length === 0 && (
                <div className="text-center py-12 bg-white rounded-2xl border border-dashed border-slate-300">
                  <ClipboardList
                    size={48}
                    className="mx-auto text-slate-200 mb-3"
                  />
                  <p className="text-slate-400">Nenhum cliente encontrado.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
