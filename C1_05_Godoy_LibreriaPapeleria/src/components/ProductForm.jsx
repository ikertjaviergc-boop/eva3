import React, { useState, useEffect } from 'react';

export default function ProductForm({ onSubmit, currentProduct, clearEdit }) {
  const [formData, setFormData] = useState({ nombre: '', categoria: '', precio: '', stock: '' });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (currentProduct) {
      setFormData(currentProduct);
    } else {
      setFormData({ nombre: '', categoria: '', precio: '', stock: '' });
    }
  }, [currentProduct]);

  const validar = () => {
    let localErrors = {};
    if (!formData.nombre.trim()) localErrors.nombre = "El nombre es obligatorio.";
    if (!formData.categoria) localErrors.categoria = "Debe seleccionar una categoría.";
    if (!formData.precio || formData.precio <= 0) localErrors.precio = "El precio debe ser mayor a 0.";
    if (!formData.stock || formData.stock < 0) localErrors.stock = "El stock no puede ser negativo.";
    setErrors(localErrors);
    return Object.keys(localErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!validar()) return;
    onSubmit({
      ...formData,
      precio: parseInt(formData.precio),
      stock: parseInt(formData.stock),
      id: currentProduct ? currentProduct.id : Date.now()
    });
    handleClear();
  };

  const handleClear = () => {
    setFormData({ nombre: '', categoria: '', precio: '', stock: '' });
    setErrors({});
    clearEdit();
  };

  return (
    <form onSubmit={handleFormSubmit} className="card" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <h3>{currentProduct ? 'Editar Producto' : 'Agregar Nuevo Producto'}</h3>
      
      <div>
        <label>Nombre Artículo:</label>
        <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} style={{ width: '100%', padding: '0.4rem' }} />
        {errors.nombre && <span className="error-msg">{errors.nombre}</span>}
      </div>

      <div>
        <label>Categoría:</label>
        <select name="categoria" value={formData.categoria} onChange={handleChange} style={{ width: '100%', padding: '0.4rem' }}>
          <option value="">-- Seleccionar --</option>
          <option value="Cuadernos">Cuadernos</option>
          <option value="Escritorio">Escritorio y Lápices</option>
          <option value="Papeles">Papeles y Resmas</option>
          <option value="Arte">Arte y Diseño</option>
        </select>
        {errors.categoria && <span className="error-msg">{errors.categoria}</span>}
      </div>

      <div>
        <label>Precio de Venta ($):</label>
        <input type="number" name="precio" value={formData.precio} onChange={handleChange} style={{ width: '100%', padding: '0.4rem' }} />
        {errors.precio && <span className="error-msg">{errors.precio}</span>}
      </div>

      <div>
        <label>Stock Local:</label>
        <input type="number" name="stock" value={formData.stock} onChange={handleChange} style={{ width: '100%', padding: '0.4rem' }} />
        {errors.stock && <span className="error-msg">{errors.stock}</span>}
      </div>

      <div style={{ display: 'flex', gap: '0.5rem' }}>
        <button type="submit" className="btn btn-primary">{currentProduct ? 'Actualizar' : 'Guardar'}</button>
        <button type="button" className="btn" onClick={handleClear}>Cancelar</button>
      </div>
    </form>
  );
}