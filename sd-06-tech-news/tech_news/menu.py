import sys


# Requisito 12
OPTIONS = [
    {"option": 0, "value": "0 - Popular banco"},
    {"option": 1, "value": "1 - Buscar notícias por título"},
    {"option": 2, "value": "2 - Buscar noticias por data"},
    {"option": 3, "value": "3 - Buscar notícias por fonte"},
    {"option": 4, "value": "4 - Buscar notícias por categoria"},
    {"option": 5, "value": "5 - Listar top 5 notícias"},
    {"option": 6, "value": "6 - Listar top 5 categorias"},
    {"option": 7, "value": "7 - Sair"},
]

INPUTS = [
    {"option": 0, "user_input": "Digite quantas notícias serão buscadas: "},
    {"option": 1, "user_input": "Digite o título: "},
    {"option": 2, "user_input": "Digite a data no formato aaaa-mm-dd: "},
    {"option": 3, "user_input": "Digite a fonte: "},
    {"option": 4, "user_input": "Digite a categoria: "},
]


def menu_options():
    user_options = "".join([f"\n{option['value']}" for option in OPTIONS])
    user_input = int(
        input(f"Selecione uma das opções a seguir: {user_options}\n")
    )
    return user_input


def analyzer_menu():
    user_choice = menu_options()
    try:
        for i in INPUTS:
            user_action = INPUTS[user_choice]["user_input"]
            int(input(user_action))
            break
    except Exception:
        print(sys.stderr, "Opção inválida")


if __name__ == "__main__":
    # URL = "https://www.tecmundo.com.br/novidades"
    # response = fetch(URL)
    analyzer_menu()
