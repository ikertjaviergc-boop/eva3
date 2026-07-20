import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Management from './pages/Management';
import ExternalData from './pages/ExternalData';

export default function App() {
  const location = useLocation();

  // useEffect Justificado: Actualiza dinámicamente el título de la pestaña del navegador según la ruta activa
  useEffect(() => {
    const titles = {
      '/': 'Inicio | Papelería Godoy',
      '/gestion': 'Gestión de Inventario | Control Interno',
      '/proveedor': 'Catálogo Mayorista | Conexión API'
    };
    document.title = titles[location.pathname] || 'Papelería Godoy';
  }, [location]);

  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gestion" element={<Management />} />
          <Route path="/proveedor" element={<ExternalData />} />
        </Routes>
      </main>
      <footer>
        <p>&copy; 2026 Sistema Base Librería Godoy. Evaluación Frente End SPA. INACAP Coyhaique.</p>
      </footer>
    </>
  );
}