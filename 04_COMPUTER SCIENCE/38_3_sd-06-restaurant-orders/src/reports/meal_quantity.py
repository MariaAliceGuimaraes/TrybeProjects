from src.utils.orders_by_name import orders_by_name


def meal_quantity_by_client(name, meal, orders):
    client_orders = orders_by_name(name, orders)

    return len([order[1] for order in client_orders if order[1] == meal])
