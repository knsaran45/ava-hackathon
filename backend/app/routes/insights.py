from fastapi import APIRouter
from app.services.analysis import spending_summary

router = APIRouter()


@router.get("/insights/{user_id}")
def get_insights(user_id: int):

    return spending_summary(user_id)