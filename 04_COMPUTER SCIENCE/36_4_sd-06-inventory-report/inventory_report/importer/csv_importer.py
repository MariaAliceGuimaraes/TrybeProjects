import csv
from .importer import Importer


class CsvImporter(Importer):
    @classmethod
    def import_data(cls, file_path):
        file_extension = file_path.split(".")[1]
        if file_extension == "csv":
            with open(file_path) as output:
                reader = csv.DictReader(output)
                file_as_array = [item for item in reader]
                return file_as_array
        else:
            raise ValueError("Arquivo inválido")