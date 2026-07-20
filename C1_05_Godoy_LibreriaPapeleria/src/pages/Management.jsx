import React, { useState, useEffect } from 'react';
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';

export default function Management() {
  const [products, setProducts] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);

  // Carga inicial persistente vía Local Storage
  useEffect(() => {
    const localData = localStorage.getItem('godoy_inventario');
    if (localData) {
      setProducts(JSON.parse(localData));
    }
  }, []);

  // Guardado automático al actualizar el estado
  const saveToLocalStorage = (newProducts) => {
    setProducts(newProducts);
    localStorage.setItem('godoy_inventario', JSON.stringify(newProducts));
  };

  const handleAddOrUpdate = (product) => {
    if (editingProduct) {
      const updated = products.map(p => p.id === product.id ? product : p);
      saveToLocalStorage(updated);
    } else {
      saveToLocalStorage([...products, product]);
    }
    setEditingProduct(null);
  };

  const handleDelete = (id) => {
    if (window.confirm("¿Seguro que deseas dar de baja este producto del inventario?")) {
      const filtered = products.filter(p => p.id !== id);
      saveToLocalStorage(filtered);
    }
  };

  return (
    <div className="management-container">
      <section className="form-section">
        <ProductForm onSubmit={handleAddOrUpdate} currentProduct={editingProduct} clearEdit={() => setEditingProduct(null)} />
      </section>
      <section className="list-section card">
        <h2>Inventario Local Actual</h2>
        <ProductList products={products} onEdit={(p) => setEditingProduct(p)} onDelete={handleDelete} />
      </section>
    </div>
  );
}