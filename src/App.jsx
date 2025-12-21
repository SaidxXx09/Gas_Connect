import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect } from "react"; // 1. Importamos useEffect
import AOS from "aos";             // 2. Importamos la librería
import "aos/dist/aos.css";        // 3. Importamos los estilos de AOS

import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";

function App() {
  // 4. Inicializamos AOS cuando cargue la App
  useEffect(() => {
    AOS.init({
      duration: 1000, // La animación durará 1 segundo
      once: false,    // Esto hace que la animación se repita al subir y bajar
      mirror: true,   // Animaciones al hacer scroll hacia arriba también
    });
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Landing />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
