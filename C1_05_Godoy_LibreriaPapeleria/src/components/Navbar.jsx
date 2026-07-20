import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <header>
      <h2>📚 Papelería Godoy</h2>
      <nav>
        <NavLink to="/" end>Inicio</NavLink>
        <NavLink to="/gestion">Gestión de Inventario</NavLink>
        <NavLink to="/proveedor">Catálogo Proveedor API</NavLink>
      </nav>
    </header>
  );
}