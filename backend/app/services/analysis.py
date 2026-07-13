import pandas as pd


def spending_summary(user_id: int):

    df = pd.read_csv("data/mock_transactions.csv")

    user_data = df[df["user_id"] == user_id]

    total = user_data["amount"].sum()

    category = (
        user_data
        .groupby("category")["amount"]
        .sum()
        .to_dict()
    )

    return {
        "total": int(total),
        "categories": category
    }