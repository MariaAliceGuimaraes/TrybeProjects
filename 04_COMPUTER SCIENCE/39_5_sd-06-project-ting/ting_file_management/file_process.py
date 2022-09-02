import sys
from ting_file_management.file_management import txt_importer


def process(path_file, instance):
    data = txt_importer(path_file)
    file = {}

    file['nome_do_arquivo'] = path_file
    file['qtd_linhas'] = len(data)
    file['linhas_do_arquivo'] = data

    instance.enqueue(file)
    sys.stdout.write(str(file))


def remove(instance):
    if not len(instance):
        return sys.stdout.write('Não há elementos\n')

    file_to_remove = instance.dequeue()['nome_do_arquivo']
    sys.stdout.write(f'Arquivo {file_to_remove} removido com sucesso\n')


def file_metadata(instance, position):
    try:
        info = instance.search(position)

        return sys.stdout.write(str(info))

    except IndexError:
        return sys.stderr.write('Posição inválida')
