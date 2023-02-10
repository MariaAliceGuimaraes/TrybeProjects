# Projeto de Movie Cards CRUD!

## O que deverá ser desenvolvido

Dando continuidade aos últimos projetos, você criará um **CRUD** de cartões de filmes em React. 
A sigla **CRUD** significa, _Create, Read, Update and Delete_, então deve ser possível realizar as seguintes operações nesse projeto:

  - Adicionar um novo filme à lista - **CREATE**;
  - Listar todos os filmes cadastrados, com uma página de informações resumidas sobre cada filme e uma página de informações detalhadas de um filme selecionado - **READ**;
  - Editar um filme da lista - **UPDATE**;
  - E apagar um filme da lista - **DELETE**;

Nos últimos projetos, por mais que o app tenha sido desenvolvido utilizando múltiplos componentes, o que é uma boa prática, todas as funcionalidades eram acessadas ao mesmo tempo, no mesmo lugar, utilizando apenas uma URL (`localhost:3000`, normalmente). Na mesma página onde havia a listagem de filmes, havia um formulário pra criar um novo filme, por exemplo. À medida que seus apps se tornarem maiores e mais complexos, isso se tornará inviável. Desta vez, as funcionalidades do app serão agrupadas e organizadas em rotas.

Uma rota define o que deve ser renderizado na página ao abri-la. Cada rota está associada a um caminho. O caminho é a parte da URL após o domínio (nome do site, de forma simplificada). Por exemplo, em `www.site.com/projetos/meu-jogo`, o caminho é `/projetos/meu-jogo`. Até agora, todos os apps React que você desenvolveu possuíam somente uma rota, a raiz (`/`).

Este app terá 4 rotas:

1. A rota raiz (index), no caminho `/`. Esta rota exibirá uma lista com todos os filmes cadastrados. Essa lista contém informações resumidas sobre cada filme.

2. Uma rota para criar novos filmes, no caminho `/movies/new`. Essa rota renderizará um formulário para adicionar um novo filme.

3. Uma rota para mostrar informações detalhadas de um filme, no caminho `/movies/:id`. Onde o `:id` é o parâmetro da URL que representa o _id_ do filme exibido. Por exemplo, ao entrar no caminho `/movies/5`, serão exibidas informações sobre o filme com _id_ `5`.

4. Uma rota para editar um filme, no caminho `/movies/:id/edit`. Assim como na rota 3, `:id` é o _id_ do filme a ser editado. Essa rota renderizará um formulário idêntico ao da rota 2. Nesse caso, porém, o formulário virá preenchido com as informações do filme a ser editado. Ao submeter o formulário, ao invés de criar um novo filme, o filme em questão terá seus dados atualizados.

Relacionado a cada rota haverá um componente React responsável por renderizar seu conteúdo. Esse mapeamento entre o caminho da URL, rota e componente será feito pelo `React Router`, a principal biblioteca de roteamento em `React`.

Naturalmente, haverá links de navegação e redirecionamento entre as diferentes rotas. Por exemplo, na rota 1 (caminho `/`), haverá, para cada filme, um link para a rota 3 (caminho `/movies/:id`), onde se poderá ver informações detalhadas sobre o filme escolhido. Na rota 3 (caminho `/movies/:id`), haverá um link para a rota 4 (caminho `/movies/:id/edit`), a fim de se editar informações do filme. Ao submeter o formulário, o app automaticamente será levado de volta à rota 3 (caminho `/movies/:id`), mostrando as informações atualizadas do filme. Tudo isso será feito utilizando os componentes da biblioteca `React Router`.

Outra diferença importante neste projeto em relação aos anteriores é que os dados virão de uma API (simulada) e não mais de um arquivo estático. Você utilizará essa API para criar, ler, atualizar e apagar filmes. Logo, você terá que lidar com requisições assíncronas e _promises_. Também deverá fazer uso de _lifecycle methods_ e de estados para controlar o que é renderizado por seus componentes a depender de em que momento as requisições se encontram.

---

## Requisitos do projeto

### 1 - Rotas: O componente `App` deve renderizar `BrowserRouter`

Você deve utilizar um `BrowserRouter` pra criar as rotas da sua aplicação. As urls de cada página devem ser desenvolvidas conforme especificado na seção _O que será desenvolvido_.

#### O que será testado:
- a rota `/` deve renderizar MovieList
- a rota `/movies/:id` deve renderizar MovieDetails
- a rota `/movies/new` deve renderizar NewMovie
- a rota `/movies/:id/edit` deve renderizar EditMovie
- qualquer rota não declarada deve renderizar NotFound

### 2 - Movie list: Ao ser montado, `MovieList` deve fazer uma requisição para buscar a lista de filmes a ser renderizada

Para buscar a lista, você deve utilizar a função `getMovies` importada do módulo `movieAPI` em `MovieList`. Essa função retorna uma _promise_. A requisição deve ser feita no momento em que o `MovieList` for montado no DOM. Enquanto a requisição estiver em curso, `MovieList` deve renderizar o componente `Loading`, como ilustrado na imagem a seguir.

![image](loading.png)

Obs: O componente `Loading` deve conter o texto `Carregando...`

Uma vez que a requisição retornar, o resultado deve ser renderizado. Para cada filme, renderize um componente `MovieCard`, como ilustrado abaixo.

![image](index.png)

Você precisará adicionar um estado em `MovieList` para controlar o que será exibido.

#### O que será testado:
- `MovieList` deverá exibir o texto `Carregando...` enquanto estiver fazendo a requisição
- `MovieList` deverá exibir um `MovieCard` para cada filme retornado pela API


### 3 - `MovieCard`: deve possuir um link para a página de detalhes de um filme

Todos os `MovieCard`s devem possuir em seu conteúdo, pelo menos, o título, a sinopse e um link com o texto "VER DETALHES" que aponta para a rota `movies/:id`, onde `:id` é o id do filme. Esta rota exibirá informações detalhadas de um filme.

#### O que será testado:
- cada `MovieCard` deve exibir pelo menos o título e a sinopse de seu respectivo filme
- cada `MovieCard` deve conter um link com o texto `VER DETALHES` que redireciona para a página de detalhes do filme

### 4 - `MovieDetails`: deve fazer uma requisição para buscar o filme que deverá ser renderizado

`MovieDetails` se comporta de forma muito semelhante ao `MovieList`. Ao ser montado, deve fazer uma requisição utilizando a função `getMovie`, se atente para o nome da função que é muito semelhante ao de outra função que já utilizamos, a `getMovies`, do módulo `movieAPI`, passando o id do filme. O componente `Loading` deve ser renderizado enquanto a requisição estiver em curso. Após terminar, deve-se renderizar um card com mais detalhes sobre o filme, contendo:

  - Uma `<img>` com a imagem do filme e `alt='Movie Cover'`;
  - Título;
  - Subtítulo;
  - Sinopse;
  - Gênero;
  - Avaliação;
  - um link com o texto "EDITAR" apontando para a rota `/movies/:id/edit` e um link apontando para a rota raiz (`/`) com o texto "VOLTAR".

Os campos devem existir no cartão conforme ilustrado na imagem abaixo.

#### O que será testado

![image](card-details.png)

### Para os requisitos 5 e 6:

Para correta avaliação, os campos do formulário devem possuir as seguintes tags `<label>` e  tipos de entrada:
- label: 'Título', entrada: tag `<input>` de tipo 'text'
- label: 'Subtítulo', entrada: tag `<input>` de tipo 'text'
- label: 'Imagem', entrada: tag `<input>` de tipo 'text'
- label: 'Sinopse', entrada: tag `<textarea>`
- label: 'Gênero', entrada: tag `<select>`, com as seguintes opções:
    - `<option value="action">Ação</option>`
    - `<option value="comedy">Comédia</option>`
    - `<option value="thriller">Suspense</option>`
    - `<option value="fantasy">Fantasia</option>`
- label: 'Avaliação', entrada: tag `<input>`, de tipo 'number' com valores que vão de 0 (mínimo) a 5 (máximo), com um step de 0.1.

Obs: O conteúdo das tags `<label>` devem estar idênticos ao específicado acima. Importante associar corretamente todas as suas entradas e labels!

#### O que será testado:
- `MovieDetails` deverá exibir o texto "Carregando..." enquanto estiver fazendo a requisição
- `MovieDetails` deverá exibir o título, o subtítulo, a sinopse, a imagem e o gênero do filme
- `MovieDetails` deverá conter um botão com o texto "VOLTAR" que redireciona para a página inicial
- `MovieDetails` deverá conter um botão com o texto "EDITAR" que redireciona para a página de edição de filme

### 5 - `EditMovie`: deve realizar uma requisição para buscar o filme que será editado.

Ao ser montada, a página de edição do filme deve fazer uma requisição pra buscar o filme que será editado e deve, ao ter seu formulário submetido, atualizar o filme e redirecionar a página pra rota raíz.

#### O que será testado:
- `EditMovie` deverá exibir o texto "Carregando..." enquanto estiver fazendo a requisição
- `EditMovie` deverá conter um formulário preenchido com o título, subtítulo, sinopse, caminho da imagem e gênero do filme selecionado
- Quando clicar no botão de submit, deverá fazer uma requisição para API para atualizar o filme selecionado. Após a conclusão da atualização a pessoa usuária deverá ser redirecionada para a página inicial

### 6 - `NewMovie`: Na página inicial, deve haver um link para criar novos cartões.

O link deve conter o texto "ADICIONAR CARTÃO" e apontar para a rota `/movies/new`, contendo um formulário para criar novos cartões.

Na rota `/movies/new`, utilizando a callback passada para `MovieForm`, `NewMovie` deve criar um novo cartão utilizando a função `createMovie` do módulo `movieAPI`. Após o fim da requisição, `NewMovie` deve redirecionar o app para a página inicial, contento o novo cartão.

#### O que será testado:
- a página inicial deverá conter um link "ADICIONAR CARTÃO". Esse link deve redirecionar para a página de criação de filmes
- `NewMovie` deverá conter um formulário que faz uma requisição para API para criar um novo filme. Após a criação, a pessoa usuária deverá ser redirecionada para a página inicial

### 7 - Adicione proptypes a todos os componentes

Todos os componentes que recebem _props_ devem ter suas _proptypes_ corretamente declaradas. O _eslint_ checa automaticamente declaração de _proptypes_, portanto seu _Pull Request_ deverá passar no _Code Climate_ para satisfazer esse requisito.

#### O que será testado:
- Se o Code Climate aprovar o seu PR, esse requisito está sendo satisfeito

### Bônus: Adicione um link para deletar um cartão em `MovieDetails`.

Ao clicar neste link, faça uma requisição utilizando a função `deleteMovie` do módulo `movieAPI`. Após finalizar a requisição, redirecione o app para a página inicial. O cartão apagado não deverá mais se encontrar na lista.

#### O que será testado:
- `MovieDetails` deverá conter um botão com o texto "DELETAR"
- o botão "DELETAR" deverá fazer uma requisição para a API para excluir o filme em questão

