from fastapi import APIRouter

from app.services.risk_service import get_risk_profile

router = APIRouter()


@router.get("/risk-profile/{user_id}")
def risk(user_id: int):

    return get_risk_profile(user_id)