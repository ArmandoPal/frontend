import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import PaginaRegistro from "./pages/PaginaRegistro";
import PaginaLogin from "./pages/PaginaLogin";
import PaginaPrincipal from "./pages/PaginaPrincipal";

const App = () => {
  const location = useLocation();

  // Verifica si la ruta actual es /login o /registro
  const isLoginOrRegister = location.pathname === "/login" || location.pathname === "/registro";

  return (
    <div className="h-screen flex flex-col">
      {/* Barra de navegación visible SOLO en las páginas de Login y Registro */}
      {isLoginOrRegister && (
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
      )}

      {/* Rutas de la aplicación */}
      <div className="flex-grow">
        <Routes>
          <Route path="/login" element={<PaginaLogin />} />
          <Route path="/registro" element={<PaginaRegistro />} />
          <Route path="/principal" element={<PaginaPrincipal />} />
          <Route path="*" element={<PaginaLogin />} />
        </Routes>
      </div>
    </div>
  );
};

// Para envolver con el Router
const RootApp = () => {
  return (
    <Router>
      <App />
    </Router>
  );
};

export default RootApp;
