import xmltodict
from .importer import Importer


class XmlImporter(Importer):
    @classmethod
    def import_data(cls, file_path):
        file_extension = file_path.split(".")[1]
        if file_extension == "xml":
            with open(file_path) as output:
                file_as_array = xmltodict.parse(output.read())["dataset"][
                    "record"
                ]
                return file_as_array
        else:
            raise ValueError("Arquivo inválido")