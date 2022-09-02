from collections import Counter
from datetime import datetime


def get_company_with_most_items(stock):
    return max(
        Counter([stock_item["nome_da_empresa"] for stock_item in stock])
    )


def get_oldest_fabrication_date(stock):
    return min([stock_item["data_de_fabricacao"] for stock_item in stock])


def get_nearest_expire_date(stock):
    today = str(datetime.now())

    nearest_expire_date = min(
        [
            stock_item["data_de_validade"]
            for stock_item in stock
            if stock_item["data_de_validade"] >= today
        ]
    )

    return nearest_expire_date


def get_stocked_by_company(stock):

    companies_by_stock = Counter(
        [stock_item["nome_da_empresa"] for stock_item in stock]
    )
    companies_stock_items = companies_by_stock.items()
    acumulator_item = "Produtos estocados por empresa: \n"
    for item in companies_stock_items:
        company_stock_string = f"- {item[0]}: {item[1]}\n"
        acumulator_item += company_stock_string
    return acumulator_item