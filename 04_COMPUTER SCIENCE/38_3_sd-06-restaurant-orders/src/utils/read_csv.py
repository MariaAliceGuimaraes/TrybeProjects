import csv


def read_csv_file(path):
    if not path.endswith(".csv"):
        raise FileNotFoundError(f"No such file or directory: '{path}'")

    with open(path) as file:
        csv_file = csv.reader(file)
        return list(csv_file)