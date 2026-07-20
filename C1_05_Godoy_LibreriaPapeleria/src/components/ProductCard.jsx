import React from 'react';

export default function ProductCard({ item, onEdit, onDelete, isExternal }) {
  return (
    <div className="card">
      <h3>{item.nombre}</h3>
      <p><strong>Categoría:</strong> {item.categoria}</p>
      <p><strong>Precio:</strong> ${isExternal ? item.precio_mayorista : item.precio}</p>
      <p><strong>Stock:</strong> {isExternal ? item.stock_disponible : item.stock} unidades</p>
      
      {!isExternal && (
        <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1rem' }}>
          <button className="btn btn-primary" onClick={() => onEdit(item)}>Editar</button>
          <button className="btn btn-danger" onClick={() => onDelete(item.id)}>Eliminar</button>
        </div>
      )}
    </div>
  );
}