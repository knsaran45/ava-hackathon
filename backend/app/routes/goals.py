from fastapi import APIRouter

from app.services.goals_service import get_goal

router = APIRouter()


@router.get("/goals/{user_id}")
def goals(user_id: int):

    return get_goal(user_id)