import { Sidebar } from "./components/sidebar";

export const App = () => {
  return (
    <div className="w-dvw h-dvh flex bg-primary">
      <Sidebar />
      <div className="w-full">
        <div className="text-white text-center text-3xl font-semibold">
          Foco principal de Hoje
        </div>
        <div className="text-white text-center text-4xl font-bold mt-2">
          Tarefa1
        </div>
        <div className="flex justify-center mt-20">
          <input
            className="w-[35rem] h-12 pl-20 rounded-lg border-none outline-none text-gray-500 font-semibold text-lg bg-[#F5F5F5] placeholder-italic placeholder-text-purple-400"
            type="text"
            placeholder="Qual é a sua próxima tarefa?"
          />
        </div>
      </div>

      <div className="fixed top-0 w-full flex justify-around bg-white p-4 lg:hidden">
        <button className="w-1/3 h-12 bg-blue-500 text-white rounded-lg">
          Tarefas
        </button>
        <button className="w-1/3 h-12 bg-green-500 text-white rounded-lg">
          Agenda
        </button>
        <button className="w-1/3 h-12 bg-red-500 text-white rounded-lg">
          Configurações
        </button>
      </div>
    </div>
  );
};
