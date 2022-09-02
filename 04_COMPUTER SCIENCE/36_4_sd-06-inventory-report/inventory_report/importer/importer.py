from abc import ABC, abstractmethod


class Importer(ABC):
    @abstractmethod
    def import_data(self, file_path):
        raise NotImplementedError