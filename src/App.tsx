import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import PaginaRegistro from "./pages/PaginaRegistro";
import PaginaLogin from "./pages/PaginaLogin";

const App = () => {
  return (
    <Router>
      <div className="h-screen flex flex-col">
        {/* Barra de navegación */}
        <nav className="bg-gray-800 text-white p-4 flex justify-end space-x-4">
          <Link
            to="/login"
            className="text-white px-4 py-2 rounded hover:bg-gray-700"
          >
            Login
          </Link>
          <Link
            to="/registro"
            className="text-white px-4 py-2 rounded hover:bg-gray-700"
          >
            Registro
          </Link>
        </nav>

        {/* Rutas de la aplicación */}
        <div className="flex-grow">
          <Routes>
            <Route path="/login" element={<PaginaLogin />} />
            <Route path="/registro" element={<PaginaRegistro />} />
            {/* Ruta por defecto */}
            <Route path="*" element={<PaginaRegistro />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;