import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';

export default function ExternalData() {
  const [externalData, setExternalData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // URL de la API Godoy montada en local/producción
    fetch('http://127.0.0.1:8000/api/proveedor/productos')
      .then((res) => {
        if (!res.ok) throw new Error('Error al conectar con la pasarela del proveedor.');
        return res.json();
      })
      .then((data) => {
        setExternalData(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <section className="card">
      <h2>Catálogo de Suministros (API Externa Mayorista)</h2>
      <p>Consulta en tiempo real de productos disponibles directamente del proveedor central de distribución.</p>

      {loading && <div style={{ textAlign: 'center', padding: '2rem' }}>🔄 Cargando catálogo externo de papelería...</div>}
      
      {error && (
        <div className="card" style={{ borderColor: 'var(--accent)', background: '#fdf2f2', color: 'var(--accent)', padding: '1rem' }}>
          ⚠️ <strong>Error de Sincronización:</strong> {error}. Verifique que el servicio Uvicorn de la API esté encendido.
        </div>
      )}

      {!loading && !error && (
        <div className="grid-layout">
          {externalData.map((item) => (
            <ProductCard key={item.id} item={item} isExternal={true} />
          ))}
        </div>
      )}
    </section>
  );
}