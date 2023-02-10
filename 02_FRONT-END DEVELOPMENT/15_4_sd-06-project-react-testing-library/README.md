# Projeto de testes com a React Testing Library!

## Neste projeto, verificamos se você é capaz de:

* Utilizar os seletores (queries) da React-Testing-Library em testes automatizados.

* Simular eventos com a React-Testing-Library em testes automatizados.

* Testar fluxos lógicos assíncronos com a React-Testing-Library.

* Escrever testes que permitam a refatoração da estrutura dos componentes da aplicação sem necessidade de serem alterados.

* Criar mocks de APIs utilizando fetch.

* Testar inputs.

## O que deverá ser desenvolvido

Nesse projeto você escreverá testes para uma aplicação React.

## Desenvolvimento

Este repositório já contém uma aplicação React criada e configurada. Após clonar o projeto e instalar as dependências (mais sobre isso abaixo), você não precisará realizar nenhuma configuração adicional. Você deverá utilizar [`Jest`](https://jestjs.io/) e a biblioteca [`React Testing Library`](https://testing-library.com/) (também já instaladas e configuradas) para escrever os testes. Note que a aplicação contém uma implementação completa de todos os requisitos da Pokédex. Seu trabalho será, para cada requisito listado a seguir, escrever testes que garantam sua corretude. Cuidado com [testes _falsos positivos_](https://talkingabouttesting.com/2015/08/04/falsos-negativos-falsos-positivos-verdadeiros-negativos-e-verdadeiros-positivos/). Falsos positivos serão desconsiderados na avaliação.

## Requisitos do projeto

A seguir estão listados todos os requisitos do projeto. Lembre-se que para a avaliação utilizaremos testes por mutação, então cada requisito só será aceito se os testes tiverem comportamento adequado tanto na aplicação original como na modificada.

Todos os arquivos de teste que vocês usarão **já estão previamente criados e novos arquivos não devem ser criados**. Como exemplo colocamos um teste dentro do arquivo `src/tests/App.test.js`. Além disso, **cada requisito se refere a um arquivo da aplicação da Pokédex**. Obter aprovação num requisito significa que todos os casos de erro daquele arquivo estão cobertos, ou seja, todos os mutantes criados naquele arquivo pelo avaliador foram mortos. Nos subitens de cada requisito detalhamos o que é necessário fazer para obter a aprovação neles.

### 1. Testando o arquivo App.js

  - Teste se a página principal da Pokédex é renderizada ao carregar a aplicação no caminho de URL `/`.

  - Teste se o topo da aplicação contém um conjunto fixo de links de navegação

    - O primeiro link deve possuir o texto `Home` com a URL `/`;

    - O segundo link deve possuir o texto `About` com a URL `/about`;

    - O terceiro link deve possuir o texto `Favorite Pokémons` com a URL `/favorites`.

  - Teste se a aplicação é redirecionada para a página inicial, na URL `/` ao clicar no link `Home` da barra de navegação. 

  - Teste se a aplicação é redirecionada para a página de `About`, na URL `/about`, ao clicar no link `About` da barra de navegação. 

  - Teste se a aplicação é redirecionada para a página de `Pokémons Favoritados`, na URL `/favorites`, ao clicar no link `Favorite Pokémons` da barra de navegação.

  - Teste se a aplicação é redirecionada para a página `Not Found` ao entrar em uma URL desconhecida.

### 2. Testando o arquivo About.js

  - Teste se a página contém as informações sobre a Pokédex.

  - Teste se a página contém um heading `h2` com o texto `About Pokédex`;

  - Teste se a página contém dois parágrafos com texto sobre a Pokédex;

  - Teste se a página contém a seguinte imagem de uma Pokédex: `https://cdn.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png`.

### 3. Testando o arquivo FavoritePokemons.js

  - Teste se é exibido na tela a mensagem `No favorite pokemon found`, caso a pessoa não tenha pokémons favoritos.

  - Teste se é exibido todos os cards de pokémons favoritados.

  - Teste se **Não** é exibido nenhum card de pokémon não favoritado.

### 4. Testando o arquivo NotFound.js

  - Teste se página contém um heading `h2` com o texto `Page requested not found 😭`;

  - Teste se página mostra a imagem `https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif`.

### 5. Testando o arquivo Pokedex.js

  - Teste se é exibido o próximo Pokémon da lista quando o botão `Próximo pokémon` é clicado.

    - O botão deve conter o texto `Próximo pokémon`;

    - Os próximos Pokémons da lista devem ser mostrados, um a um, ao clicar sucessivamente no botão.

    - O primeiro Pokémon da lista deve ser mostrado ao clicar no botão se estiver no último Pokémon da lista.

  - Teste se é mostrado apenas um Pokémon por vez.

  - Teste se a Pokédex tem os botões de filtro

    - Os Pokémons do tipo selecionado através do `botão de tipo` devem estar circulados.

    - O texto do botão deve corresponder ao `nome do tipo`, ex. `Psychic`.

  - Teste se a Pokédex contém um botão para resetar o filtro

    - O texto do botão deve ser `All`.

    - A Pokedéx deverá voltar a circular por todos os Pokémons quando o botão for clicado.

    - Ao carregar a página, o filtro selecionado deverá ser `All`.

  - Teste se é criado, dinamicamente, um botão de filtro para cada tipo de Pokémon.

    - Os botões de filtragem devem ser dinâmicos.

    - Deve existir um botão de filtragem para cada tipo de Pokémon disponível nos dados, independente de quais ou quantos sejam, sem repetição de tipos. Ou seja, a sua Pokédex deve possuir pokémons do tipo `Fire`, `Psychic`, `Electric` e `Normal`.
    
    - Deve ser mostrado como opção de filtro, um botão para cada um dos tipos. Além disso, o botão `All` precisa estar sempre visível.

  - O botão de `Próximo pokémon` deve ser desabilitado quando a lista filtrada de Pokémons tiver um só pokémon.

### 6. Testando o arquivo Pokemon.js

  - Teste se é renderizado um card com as informações de determinado pokémon.

    - O nome correto do Pokémon deve ser mostrado na tela.

    - O peso médio do pokémon deve ser exibido com um texto no formato `Average weight: <value> <measurementUnit>`; onde `<value>` e `<measurementUnit>` são, respectivamente, o peso médio do pokémon e sua unidade de medida.

    - A imagem do Pokémon deve ser exibida. Ela deve conter um atributo `src` com a URL da imagem e um atributo `alt` com o texto `<name> sprite`, onde `<name>` é o nome do pokémon.

  - Teste se o card do Pokémon indicado na Pokédex contém um link de navegação para exibir detalhes deste Pokémon. O link deve possuir a URL `/pokemons/<id>`, onde `<id>` é o id do Pokémon exibido;

  - Teste se ao clicar no link de navegação do Pokémon, é feito o redirecionamento da aplicação para a página de detalhes de Pokémon. 
  
  - Teste também se a URL exibida no navegador muda para `/pokemon/<id>`, onde `<id>` é o id do Pokémon cujos detalhes se deseja ver;

  - Teste se existe um ícone de estrela nos Pokémons favoritados.

    - O ícone deve ser uma imagem com o atributo `src` contendo o caminho `/star-icon.svg`;

    - A imagem deve ter o atributo `alt` igual a `<pokemon> is marked as favorite`, onde `<pokemon>` é o nome do Pokémon exibido.

### Testando o arquivo PokemonDetails.js

  - Teste se as informações detalhadas do Pokémon selecionado são mostradas na tela.

    - A página deve conter um texto `<name> Details`, onde `<name>` é o nome do Pokémon;

    - **Não** deve existir o link de navegação para os detalhes do Pokémon selecionado.

    - A seção de detalhes deve conter um heading `h2` com o texto `Summary`.

    - A seção de detalhes deve conter um parágrafo com o resumo do Pokémon específico sendo visualizado.

  - Teste se existe na página uma seção com os mapas contendo as localizações do pokémon

    - Deverá conter, na seção de detalhes, um heading `h2` com o texto `Game Locations of <name>`; onde `<name>` é o nome do Pokémon exibido.

    - Todas as localizações do Pokémon devem ser mostradas na seção de detalhes;

    - Devem ser exibidos, o nome da localização e uma imagem do mapa em cada localização.

    - A imagem da localização deve ter um atributo `src` com a URL da localização.

    - A imagem da localização deve ter um atributo `alt` com o texto `<name> location`, onde `<name>` é o nome do Pokémon.

  - Teste se o usuário pode favoritar um pokémon através da página de detalhes

    - A página deve exibir um checkbox que permite favoritar o Pokémon.
    - Cliques alternados no checkbox devem adicionar e remover o Pokémon da lista de favoritos.

    - O label do checkbox deve conter o texto `Pokémon favoritado?`.

## Quer fazer mais? Temos algumas sugestões!

O que temos a seguir não são requisitos bônus - são ideias para você se aprofundar mais no projeto e **aprender mais!** Que tal trabalhar neles? Começamos com algo bem direto:

  - A cobertura de testes deve ser 100%

    - Para ver a cobertura de testes, execute no terminal o comando `npm run test-coverage`.

Além disso, a Pokédex é uma aplicação estática, com seus dados pré-definidos. Utilizando a [PokéAPI](https://pokeapi.co/), é possível deixá-la mais dinâmica e realista.

Se quiser implemente os requisitos propostos a seguir e escreva testes para eles. Tente manter sempre a cobertura de testes em 100%, garantindo assim que não há código ou fluxos lógicos não testados. Para um desafio adicional, tente utilizar TDD - escreva os testes à medida que for implementando os requisitos.

  - Adicione uma rota para exibir uma lista de localizações

    - A URL da rota deve ser `/locations`;

    - A página deve exibir uma lista com as localizações retornadas pela PokéAPI. Você pode ler [aqui](https://pokeapi.co/docs/v2.html/#resource-lists-section) e [aqui](https://pokeapi.co/docs/v2.html/#locations-section) como utilizar a PokéAPI para buscar uma lista de localizações.

  - Adicione na barra de navegação um link para a lista de localizações

    - O link deve conter o texto `Locations`;

    - Ao clicar no link, a página com a lista de localizações deve ser exibida.

  - Adicione botões de paginação na lista de localizações

  Por default, os _endpoints_ da PokéAPI retornam no máximo 20 resultados. Utilizando os parâmetros `limit` e `offset`, você pode especificar qual página deseja buscar e qual seu tamanho. Veja [aqui](https://pokeapi.co/docs/v2.html/#resource-lists-section) como utilizar estes parâmetros.

    - Adicone dois botões "Anterior" e "Próxima" que permitam navegar entre as página da lista de localizações;

    - Na primeira página, o botão "Anterior" deve ser desabilitado. Da mesma forma, ao alcançar a última página, o botão "Próximo" deve ser desabilitado.

  - Adiciona uma rota para exibir uma lista de gerações

    - A URL da rota deve ser `/generations`;

    - A página deve exibir uma lista com as gerações retornadas pela PokéAPI. Você pode ler [aqui](https://pokeapi.co/docs/v2.html/#resource-lists-section) e [aqui](https://pokeapi.co/docs/v2.html/#generations) como utilizar a PokéAPI para buscar uma lista de gerações.

  - Adicione na barra de navegação um link para a lista de gerações

    - O link deve conter o texto `Generations`;

    - Ao clicar no link, a página com a lista de gerações deve ser exibida.

  - Adicione uma rota para exibir informações sobre uma geração

    - A URL da rota deve ser `/generations/<id>`, onde `<id>` é o id da geração exibida;

    - A página deve exibir, após buscar na PokéAPI, o nome da geração e uma lista com os nomes dos pokémons introduzidos nesta geração.

  - Adicione a cada geração na lista de gerações um link para a página de detalhes desta geração

    - Ao clicar no link, a página com informações sobre a geração clicada deve ser exibida.
