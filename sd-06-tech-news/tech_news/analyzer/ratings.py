from tech_news.database import db

pipeline_news = [
    {
        "$project": {
            "popularity": {"$sum": ["$shares_count", "$comments_count"]},
            "_id": 0,
            "title": 1,
            "url": 1,
        }
    },
    {"$sort": {"popularity": -1, "title": 1}},
    {"$limit": 5},
]

pipeline_categories = [
    {"$unwind": "$categories"},
    {"$group": {"_id": {"categories": "$categories"}, "total": {"$sum": 1}}},
    {"$sort": {"total": -1, "_id.categories": 1}},
    {"$limit": 5},
    {"$project": {"_id.categories": 1, "total": 1}},
]


# Requisito 10
def top_5_news():
    news_output = db.news.aggregate(pipeline_news)
    output = [(new["title"], new["url"]) for new in news_output]
    return output


# Requisito 11
def top_5_categories():
    categories_output = db.news.aggregate(pipeline_categories)
    top_five_categories = [
        category["_id"]["categories"] for category in categories_output
    ]
    return top_five_categories


if __name__ == "__main__":
    print(top_5_categories())
