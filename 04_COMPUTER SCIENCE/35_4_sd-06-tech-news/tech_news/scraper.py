import time
import requests

from requests.exceptions import ReadTimeout
from parsel import Selector
from tech_news.database import create_news


# Requisito 1 start
# Esta função será responsável por fazer a requisição
# HTTP ao site Tecmundo e obter o conteúdo HTML
def fetch(url):
    time.sleep(1)
    try:
        response = requests.get(url, timeout=3)
    except ReadTimeout:
        return None

    return response.text if response.status_code == 200 else None


# Requisito 2
def scrape_noticia(html_content):
    selector = Selector(text=html_content)
    get_url = selector.css("head link[rel=canonical]::attr(href)").get()
    get_title = selector.css("#js-article-title::text").get()
    get_timestamp = selector.css("#js-article-date::attr(datetime)").get()
    writer = selector.css(
        "#js-author-bar > div > p.z--m-none.z--truncate.z--font-bold "
        "> a::text"
    ).get()
    get_writer = writer.strip() if writer else None
    get_shares_count = selector.css(
        "#js-author-bar > nav > div:nth-child(1)::text"
    ).re_first(r"\d+")
    shares = int(get_shares_count) if get_shares_count else 0
    comments = selector.css("#js-comments-btn::text").re_first(r"\d+")
    get_comments_count = int(comments) if comments else None
    summary = selector.css(
        ".tec--article__body p:nth-child(1) *::text"
    ).getall()
    get_summary = "".join(summary)
    get_sources = selector.css(".z--mb-16 .tec--badge::text").getall()
    sources = [source.strip() for source in get_sources]
    get_categories = selector.css("#js-categories > a *::text").getall()
    categories = [category.strip() for category in get_categories]
    dic_news = {
        "url": get_url,
        "title": get_title,
        "timestamp": get_timestamp,
        "writer": get_writer,
        "shares_count": shares,
        "comments_count": get_comments_count,
        "summary": get_summary,
        "sources": sources,
        "categories": categories,
    }
    return dic_news


# Requisito 3
def scrape_novidades(html_content):
    if html_content == "":
        return []
    else:
        selector = Selector(text=html_content)
        news = selector.css(".tec--card__info h3 a::attr(href)").getall()
        return news


# Requisito 4
def scrape_next_page_link(html_content):
    selector = Selector(text=html_content)
    next_url = selector.css(
        "#js-main > div > div > .z--w-2-3 > div.tec--list--lg > a::attr(href)"
    ).get()
    return next_url


# Requisito 5
def get_tech_news(amount):
    url = "https://www.tecmundo.com.br/novidades"
    news_inserted = []
    while True:
        response = fetch(url)
        news_current_page = scrape_novidades(response)
        for new in news_current_page:
            news_next_page = fetch(new)
            next_news = scrape_noticia(news_next_page)
            news_inserted.append(next_news)
            if len(news_inserted) == amount:
                create_news(news_inserted)
                return news_inserted
        url = scrape_next_page_link(response)


if __name__ == "__main__":
    # URL = "https://www.tecmundo.com.br/novidades"
    # response = fetch(URL)
    get_tech_news(3)
