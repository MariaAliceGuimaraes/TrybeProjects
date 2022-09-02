from src.utils.orders_by_name import orders_by_name


def favorite_meal(name, orders):
    client_orders = orders_by_name(name, orders)
    client_meals = dict()

    for order in client_orders:
        if order[1] not in client_meals:
            client_meals[order[1]] = 1
        else:
            client_meals[order[1]] += 1

    return sorted(client_meals.items(), key=lambda k: k[1], reverse=True)[0][0]
