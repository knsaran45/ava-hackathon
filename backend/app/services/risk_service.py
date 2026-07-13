from app.services.analysis import spending_summary


def get_risk_profile(user_id: int):

    data = spending_summary(user_id)

    total = data["total"]

    shopping = data["categories"].get("Shopping", 0)

    shopping_percent = shopping / total

    if shopping_percent > 0.45:
        risk = "High"
        score = 85

    elif shopping_percent > 0.25:
        risk = "Moderate"
        score = 60

    else:
        risk = "Low"
        score = 30

    return {
        "risk": risk,
        "score": score,
        "shopping_percentage": round(shopping_percent * 100, 2)
    }