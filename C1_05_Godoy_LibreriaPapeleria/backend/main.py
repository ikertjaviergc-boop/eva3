from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="API Godoy - Proveedor de Papelería")

# Permitir CORS para conectar con React en desarrollo
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Datos simulación del proveedor externo masivo
PRODUCTOS_PROVEEDOR = [
    {"id": 101, "nombre": "Cuaderno Universitario Cuadriculado 100hj", "categoria": "Cuadernos", "precio_mayorista": 1200, "stock_disponible": 500},
    {"id": 102, "nombre": "Lápiz Pasta Azul Bic (Caja 50u)", "categoria": "Escritorio", "precio_mayorista": 7500, "stock_disponible": 120},
    {"id": 103, "nombre": "Resma de Papel Carta Report A4", "categoria": "Papeles", "precio_mayorista": 3800, "stock_disponible": 300},
    {"id": 104, "nombre": "Destacador Pastel Faber-Castell (Set 4u)", "categoria": "Arte", "precio_mayorista": 2900, "stock_disponible": 80},
    {"id": 105, "nombre": "Tijera Escolar Mapped 13cm", "categoria": "Escolar", "precio_mayorista": 950, "stock_disponible": 250}
]

@app.get("/api/proveedor/productos")
def obtener_productos_proveedor():
    return PRODUCTOS_PROVEEDOR