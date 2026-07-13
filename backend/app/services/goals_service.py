import json


def get_goal(user_id: int):

    with open("data/mock_goals.json", "r") as file:
        goals = json.load(file)

    goal = goals[str(user_id)]

    completion = round(
        (goal["saved"] / goal["target"]) * 100,
        2
    )

    months_remaining = (
        goal["target"] - goal["saved"]
    ) / goal["monthly_saving"]

    remaining = goal["target"] - goal["saved"]

    advice = (
        "You're on track! Keep saving consistently."
        if completion >= 30
        else "Increase your monthly savings to reach your goal sooner."
    )

    return {
        "goal_name": goal["goal_name"],
        "target": goal["target"],
        "saved": goal["saved"],
        "completion": completion,
        "months_remaining": round(months_remaining, 1),
        "remaining": remaining,
        "advice": advice
    }