from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from contextlib import asynccontextmanager #for database lifecycle management
from config.db import connect_db #db functions
from routes.item_routes import router as product_router
from routes.ws_routes import router as ws_router

@asynccontextmanager
async def lifespan(app: FastAPI):
    # Connect to database on startup
    await connect_db()
    yield
    # Cleanup on shutdown (if needed)
    
app = FastAPI(lifespan=lifespan)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Adjust as needed for production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(product_router, prefix="/items")
app.include_router(ws_router, prefix="/ws")

@app.get("/")
async def root():
    return {"message": "FastAPI MERN Store API"}
