from collections.abc import Iterator


class InventoryIterator(Iterator):
    def __init__(self, stock):
        self.stock = stock
        self.index = 0

    def __next__(self):
        try:
            current_item = self.stock[self.index]
        except IndexError:
            raise StopIteration()
        else:
            self.index += 1
            return current_item