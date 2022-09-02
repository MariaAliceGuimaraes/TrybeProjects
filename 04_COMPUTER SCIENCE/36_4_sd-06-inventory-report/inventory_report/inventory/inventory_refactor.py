from inventory_report.reports.simple_report import SimpleReport
from inventory_report.reports.complete_report import CompleteReport
from collections.abc import Iterable
from .inventory_iterator import InventoryIterator


class InventoryRefactor(Iterable):
    def __init__(self, importer):
        self.stock = []
        self.importer = importer

    def import_data(self, file_path, report_type):
        self.stock += self.importer.import_data(file_path)
        return self.generate_report(report_type, self.stock)

    def __iter__(self):
        return InventoryIterator(self.stock)

    def generate_report(cls, report_type, file_as_array):
        if report_type == "simples":
            return SimpleReport.generate(file_as_array)
        else:
            return CompleteReport.generate(file_as_array)