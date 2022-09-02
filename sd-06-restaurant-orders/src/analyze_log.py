from src.utils.read_csv import read_csv_file
from src.reports.favorite_meal import favorite_meal
from src.reports.meal_quantity import meal_quantity_by_client
from src.reports.never_ordered import never_ordered_meals
from src.reports.days_client_not import days_client_not_here


def analyze_log(path_to_file):
    answers = ""
    orders = read_csv_file(path_to_file)

    # Qual o prato mais pedido por 'maria'?
    answers += str(favorite_meal("maria", orders)) + "\n"

    # Quantas vezes 'arnaldo' pediu 'hamburguer'?
    answers += (
        str(meal_quantity_by_client("arnaldo", "hamburguer", orders)) + "\n"
    )

    # Quais pratos 'joao' nunca pediu?
    answers += str(never_ordered_meals("joao", orders)) + "\n"

    # Quais dias 'joao' nunca foi na lanchonete?
    answers += str(days_client_not_here("joao", orders))

    with open("data/mkt_campaign.txt", "w") as file:
        file.write(answers)
