from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.routes.chat import router as chat_router
from app.routes.insights import router as insights_router
from app.routes.goals import router as goals_router
from app.routes.risk import router as risk_router

app = FastAPI(
    title="AVA API",
    version="1.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(chat_router)
app.include_router(insights_router)
app.include_router(goals_router)
app.include_router(risk_router)


@app.get("/")
def home():
    return {
        "message": "AVA Backend Running 🚀"
    }


@app.get("/health")
def health():
    return {
        "status": "healthy"
    }