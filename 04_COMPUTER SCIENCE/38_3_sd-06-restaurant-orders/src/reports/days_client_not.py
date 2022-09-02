from src.utils.days import days_with_order
from src.utils.orders_by_name import orders_by_name


def days_client_not_here(name, orders):
    client_orders = orders_by_name(name, orders)
    days_client_yes = days_with_order(client_orders)
    days_open = days_with_order(orders)

    return days_open.difference(days_client_yes)
