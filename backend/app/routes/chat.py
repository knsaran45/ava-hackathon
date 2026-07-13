from fastapi import APIRouter
from app.schemas import ChatRequest, ChatResponse

router = APIRouter()

@router.post("/chat", response_model=ChatResponse)
def chat(request: ChatRequest):

    msg = request.message.lower()

    if "laptop" in msg:
        return ChatResponse(
            reply="You should wait one more month before buying the laptop.",
            why="Your savings goal is only 32.5% complete.",
            action="Save ₹5,000 more before purchasing."
        )

    elif "shopping" in msg:
        return ChatResponse(
            reply="Your shopping expenses are quite high this month.",
            why="Nearly half of your spending went to shopping.",
            action="Reduce shopping by ₹2,000 next month."
        )

    elif "food" in msg:
        return ChatResponse(
            reply="Your food spending is under control.",
            why="Food accounts for only a small portion of your monthly expenses.",
            action="Keep following your current budget."
        )

    elif "hello" in msg or "hi" in msg:
        return ChatResponse(
            reply="Hello! I'm AVA, your AI financial assistant.",
            why="I'm here to analyze your spending and help you achieve your goals.",
            action="Ask me about your expenses, goals, or financial decisions."
        )

    else:
        return ChatResponse(
            reply=f"I understand you asked: '{request.message}'.",
            why="This is a demo AI response based on your financial profile.",
            action="Try asking about your laptop goal, shopping, or monthly spending."
        )