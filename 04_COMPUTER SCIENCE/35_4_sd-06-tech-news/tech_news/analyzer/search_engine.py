from tech_news.database import search_news
from datetime import datetime


# Requisito 6
def search_by_title(title):
    news_found = search_news({"title": {"$regex": title, "$options": "i"}})
    output = [(new["title"], new["url"]) for new in news_found]
    return output


# Requisito 7
def search_by_date(date):
    try:
        datetime.strptime(date, "%Y-%m-%d")
        news_found = search_news({"timestamp": {"$regex": date}})
        output = [(new["title"], new["url"]) for new in news_found]
    except ValueError:
        raise ValueError("Data inválida")

    return output


# Requisito 8
def search_by_source(source):
    news_found = search_news({"sources": {
        "$regex": source,
        "$options": "i"
    }})
    output = [(new["title"], new["url"]) for new in news_found]
    return output


# Requisito 9
def search_by_category(category):
    news_found = search_news({"categories": {
        "$regex": category,
        "$options": "i"
    }})
    output = [(new["title"], new["url"]) for new in news_found]
    return output


if __name__ == "__main__":
    print(search_by_category("Tesla"))
