class TrackOrders:
    def __init__(self):
        self.orders = []

    def __len__(self):
        return len(self.orders)

    def add_new_order(self, costumer, order, day):
        self.orders.append([costumer, order, day])

    def get_most_ordered_dish_per_costumer(self, costumer):
        customer_orders = [
            order for order in self.orders if order[0] == costumer
        ]
        customer_meals = dict()

        for order in customer_orders:
            if order[1] not in customer_meals:
                customer_meals[order[1]] = 1
            else:
                customer_meals[order[1]] += 1

        return sorted(
            customer_meals.items(), key=lambda k: k[1], reverse=True
        )[0][0]

    def get_order_frequency_per_costumer(self, costumer, order):
        pass

    def get_never_ordered_per_costumer(self, costumer):
        customer_orders = [
            order for order in self.orders if order[0] == costumer
        ]
        customer_meals = set([order[1] for order in customer_orders])
        all_meals = set([order[1] for order in self.orders])

        return all_meals.difference(customer_meals)

    def get_days_never_visited_per_costumer(self, costumer):
        customer_orders = [
            order for order in self.orders if order[0] == costumer
        ]
        days_visited_per_customer = set(
            [order[2] for order in customer_orders]
        )
        days_open = set([order[2] for order in self.orders])

        return days_open.difference(days_visited_per_customer)

    def get_busiest_day(self):
        pass

    def get_least_busy_day(self):
        pass
