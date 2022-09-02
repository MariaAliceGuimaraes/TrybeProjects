import json
from .importer import Importer


class JsonImporter(Importer):
    @classmethod
    def import_data(cls, file_path):
        file_extension = file_path.split(".")[1]
        if file_extension == "json":
            with open(file_path) as output:
                file_as_array = json.load(output)
                return file_as_array
        else:
            raise ValueError("Arquivo inválido")