from inventory_report.reports.simple_report import SimpleReport
from inventory_report.reports.complete_report import CompleteReport
from inventory_report.importer.csv_importer import CsvImporter
from inventory_report.importer.json_importer import JsonImporter
from inventory_report.importer.xml_importer import XmlImporter


class Inventory:
    @classmethod
    def import_data(cls, file_path, report_type):
        file_extension = file_path.split(".")[1]
        if file_extension == "csv":
            file_as_array = CsvImporter.import_data(file_path)
        elif file_extension == "json":
            file_as_array = JsonImporter.import_data(file_path)
        else:
            file_as_array = XmlImporter.import_data(file_path)
        return cls.generate_report(report_type, file_as_array)

    @classmethod
    def generate_report(cls, report_type, file_as_array):
        if report_type == "simples":
            return SimpleReport.generate(file_as_array)
        else:
            return CompleteReport.generate(file_as_array)