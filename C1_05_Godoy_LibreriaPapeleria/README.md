# 📚 SPA Librería y Papelería Godoy

## Descripción del Negocio
Aplicación SPA orientada a optimizar la gestión y control de inventarios de la "Librería y Papelería Godoy" en la Región de Aysén. Permite pasar del registro manual en papel a una interfaz interactiva donde el operario registra artículos locales de venta al público mediante persistencia en el navegador, y simultáneamente consulta de forma directa la disponibilidad y tarifas del distribuidor central a través del consumo seguro de la API de abastecimiento.

## Instrucciones de Ejecución

### 1. Inicializar el Servidor API Backend (FastAPI)
```bash
cd backend
pip install -r requirements.txt
uvicorn main:app --reload