import React from 'react';
import ProductCard from './ProductCard';

export default function ProductList({ products, onEdit, onDelete }) {
  if (products.length === 0) {
    return <p>No hay artículos registrados en el inventario de la tienda.</p>;
  }

  return (
    <div className="grid-layout">
      {products.map((prod) => (
        <ProductCard key={prod.id} item={prod} onEdit={onEdit} onDelete={onDelete} isExternal={false} />
      ))}
    </div>
  );
}