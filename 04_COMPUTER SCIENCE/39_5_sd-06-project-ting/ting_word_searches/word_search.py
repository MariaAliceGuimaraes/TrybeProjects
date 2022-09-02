def exists_word(word, instance):
    results = []

    for index in range(len(instance)):
        file = instance.search(index)
        lines = file['linhas_do_arquivo']
        ocorrencias = []

        i = 0
        for line in lines:
            i += 1
            if word in line:
                ocorrencias.append({'linha': i})

        if len(ocorrencias) > 0:
            detalhes = {}

            detalhes['palavra'] = word
            detalhes['arquivo'] = file['nome_do_arquivo']
            detalhes['ocorrencias'] = ocorrencias

            results.append(detalhes)

    return results


def search_by_word(word, instance):
    """Aqui irá sua implementação"""
