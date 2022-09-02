import sys


def txt_importer(path_file):
    if not path_file.endswith('.txt'):
        return sys.stderr.write('Formato inválido\n')

    try:
        file = open(path_file, 'r')
        return file.read().splitlines()

    except FileNotFoundError:
        return sys.stderr.write(f'Arquivo {path_file} não encontrado\n')
