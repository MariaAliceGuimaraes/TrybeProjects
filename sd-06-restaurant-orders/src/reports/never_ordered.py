from src.utils.orders_by_name import orders_by_name
from src.utils.menu import ordered_meals


def never_ordered_meals(name, orders):
    client_orders = orders_by_name(name, orders)
    client_meals = ordered_meals(client_orders)
    all_meals = ordered_meals(orders)

    return all_meals.difference(client_meals)
