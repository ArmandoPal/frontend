import React from "react";

const PaginaPrincipal: React.FC = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar Izquierdo */}
      <aside className="w-1/4 bg-[#947575] text-white flex flex-col justify-between p-6">
        {/* Logo */}
        <div className="flex flex-col items-center">
          <div className="text-4xl font-bold mb-6">PawJourney</div>
          <nav className="space-y-4">
            <button className="w-full text-left p-3 rounded-full bg-black hover:bg-gray-700 transition">
              Pagina Principal
            </button>
            <button className="w-full text-left p-3 rounded-full bg-black hover:bg-gray-700 transition">
              Eventos
            </button>
            <button className="w-full text-left p-3 rounded-full bg-black hover:bg-gray-700 transition">
              Perfil de Usuario
            </button>
            <button className="w-full text-left p-3 rounded-full bg-black hover:bg-gray-700 transition">
              Perfil de Mascotas
            </button>
            <button className="w-full text-left p-3 rounded-full bg-black hover:bg-gray-700 transition">
              Ficha Veterinaria
            </button>
            <button className="w-full text-left p-3 rounded-full bg-black hover:bg-gray-700 transition">
              Mapa
            </button>
          </nav>
        </div>
        {/* Botón de Cerrar Sesión */}
        <button className="w-full p-3 rounded-full bg-black hover:bg-gray-700 transition">
          Cerrar Sesión
        </button>
      </aside>

      {/* Contenido Principal */}
      <main className="w-3/4 bg-[#E3D2CF] p-6">
        {/* Publicación Nueva */}
        <div className="bg-[#947575] text-white p-4 rounded flex items-center space-x-4">
          <div className="h-10 w-10 rounded-full bg-black flex items-center justify-center text-xl font-bold">
            U
          </div>
          <input
            type="text"
            placeholder="Publicar imagen y descripción"
            className="flex-grow bg-[#C6A5A2] text-black placeholder-gray-300 p-2 rounded"
          />
        </div>
      </main>
    </div>
  );
};

export default PaginaPrincipal;
