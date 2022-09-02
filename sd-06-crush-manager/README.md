### Termos e acordos

Ao iniciar este projeto, você concorda com as diretrizes do Código de Ética e Conduta e do Manual da Pessoa Estudante da Trybe.

---

# Boas vindas ao repositório do Crush Manager!

Você já usa o GitHub diariamente para desenvolver os exercícios, certo? Agora, para desenvolver os projetos, você deverá seguir as instruções a seguir. Fique atento a cada passo, e se tiver qualquer dúvida, nos envie por Slack! #vqv 🚀

Aqui você vai encontrar os detalhes de como estruturar o desenvolvimento do seu projeto a partir deste repositório, utilizando uma branch específica e um Pull Request para colocar seus códigos.

---

# Sumário

- [Habilidades](#habilidades)
- [Entregáveis](#entregáveis)
  - [O que deverá ser desenvolvido](#o-que-deverá-ser-desenvolvido)
  - [Desenvolvimento](#desenvolvimento)
  - [Data de entrega](#data-de-entrega)
- [Instruções para entregar seu projeto](#instruções-para-entregar-seu-projeto)
  - [Antes de começar a desenvolver](#antes-de-começar-a-desenvolver)
  - [Durante o desenvolvimento](#durante-o-desenvolvimento)
  - [Depois de terminar o desenvolvimento (opcional)](#depois-de-terminar-o-desenvolvimento-opcional)
- [Como desenvolver](#como-desenvolver)
- [Requisitos do projeto](#requisitos-do-projeto)
  - [Linter](#linter)
  - [Lista de requisitos](#lista-de-requisitos)
    - [1 - Crie o endpoint GET /crush](#1---crie-o-endpoint-get-crush)
    - [2 - Crie o endpoint GET /crush/:id](#2---crie-o-endpoint-get-crushid)
    - [3 - Crie o endpoint POST /login](#3---crie-o-endpoint-post-login)
    - [4 - Crie o endpoint POST /crush](#4---crie-o-endpoint-post-crush)
    - [5 - Crie o endpoint PUT /crush/:id](#5---crie-o-endpoint-put-crushid)
    - [6 - Crie o endpoint DELETE /crush/:id](#6---crie-o-endpoint-delete-crushid)
    - [7 - Crie o endpoint GET /crush/search?q=searchTerm](#7---crie-o-endpoint-get-crushsearchqsearchterm)
- [Avisos Finais](#avisos-finais)

---

# Habilidades

Neste projeto, verificamos se você é capaz de:

- Realizar operações assíncronas utilizando callbacks;
- Realizar operações assíncronas utilizando Promises;
- Ler e escrever arquivos localmente com NodeJS;
- Escrever seus próprios scripts que criam e consomem Promises;
- Reescrever código que usa callbacks para que use Promises;
- Realizar chamadas de funções de forma consciente;
- Entender os conceitos básicos de como o JavaScript funciona;
- Detectar e solucionar problemas no código de forma mais objetiva;
- Entender a diferença entre execução síncrona e assíncrona;
- Entender o que é o HTTP, o que é uma API e o que os dois têm a ver com o Express;
- Escrever APIs utilizando Node e Express;
- Entender a estrutura de uma aplicação Express e como organizar seu código;
- Criar rotas e aplicar middlewares.
---

# Entregáveis

Para entregar o seu projeto você deverá criar um Pull Request neste repositório.

Lembre-se que você pode consultar nosso conteúdo sobre [Git & GitHub](https://course.betrybe.com/intro/git/) sempre que precisar!

## O que deverá ser desenvolvido

Você vai desenvolver uma API de um CRUD (**C**reate, **R**ead, **U**pdate e **D**elete) de crushs. Você vai desenvolver alguns endpoints que irão ler e escrever em um arquivo, isso utilizando o módulo `fs`.

## Desenvolvimento

### Data de Entrega

O projeto tem até a seguinte data: `23/02/2021 - 14:00h`. Para ser entregue a avaliação final.

---

# Instruções para entregar seu projeto

## Antes de começar a desenvolver:

1. Clone o repositório

- `git clone https://github.com/tryber/sd-06-crush-manager.git`.
- Entre na pasta do repositório que você acabou de clonar:
  - `cd sd-06-crush-manager`

2. Instale as dependências [**Caso existam**]

- `npm install`

3. Crie uma branch a partir da branch `master`

- Verifique que você está na branch `master`
  - Exemplo: `git branch`
- Se não estiver, mude para a branch `master`
  - Exemplo: `git checkout master`
- Agora crie uma branch à qual você vai submeter os `commits` do seu projeto
  - Você deve criar uma branch no seguinte formato: `nome-de-usuario-nome-do-projeto`
  - Exemplo: `git checkout -b joaozinho-sd-0x-project-crush-manager`

4. Adicione as mudanças ao _stage_ do Git e faça um `commit`

- Verifique que as mudanças ainda não estão no _stage_
  - Exemplo: `git status` (deve aparecer listada a pasta _joaozinho_ em vermelho)
- Adicione o novo arquivo ao _stage_ do Git
  - Exemplo:
    - `git add .` (adicionando todas as mudanças - _que estavam em vermelho_ - ao stage do Git)
    - `git status` (deve aparecer listado o arquivo _joaozinho/README.md_ em verde)
- Faça o `commit` inicial
  - Exemplo:
    - `git commit -m 'iniciando o projeto x'` (fazendo o primeiro commit)
    - `git status` (deve aparecer uma mensagem tipo _nothing to commit_ )

5. Adicione a sua branch com o novo `commit` ao repositório remoto

- Usando o exemplo anterior: `git push -u origin joaozinho-sd-06-crush-manager`

6. Crie um novo `Pull Request` _(PR)_

- Vá até a página de _Pull Requests_ do [repositório no GitHub](https://github.com/tryber/sd-06-crush-manager/pulls)
- Clique no botão verde _"New pull request"_
- Clique na caixa de seleção _"Compare"_ e escolha a sua branch **com atenção**
- Clique no botão verde _"Create pull request"_
- Adicione uma descrição para o _Pull Request_ e clique no botão verde _"Create pull request"_
- **Não se preocupe em preencher mais nada por enquanto!**
- Volte até a [página de _Pull Requests_ do repositório](https://github.com/tryber/sd-06-crush-manager/pulls) e confira que o seu _Pull Request_ está criado

## Durante o desenvolvimento

- Faça `commits` das alterações que você fizer no código regularmente

- Lembre-se de sempre após um (ou alguns) `commits` atualizar o repositório remoto

- Os comandos que você utilizará com mais frequência são:
  1. `git status` _(para verificar o que está em vermelho - fora do stage - e o que está em verde - no stage)_
  2. `git add` _(para adicionar arquivos ao stage do Git)_
  3. `git commit` _(para criar um commit com os arquivos que estão no stage do Git)_
  4. `git push -u nome-da-branch` _(para enviar o commit para o repositório remoto na primeira vez que fizer o `push` de uma nova branch)_
  5. `git push` _(para enviar o commit para o repositório remoto após o passo anterior)_

## Depois de terminar o desenvolvimento (opcional):

Para sinalizar que o seu projeto está pronto para o _"Code Review"_ dos seus colegas, faça o seguinte:

- Vá até a página **DO SEU** _Pull Request_, adicione a label de _"code-review"_ e marque seus colegas:

  - No menu à direita, clique no _link_ **"Labels"** e escolha a _label_ **code-review**;

  - No menu à direita, clique no _link_ **"Assignees"** e escolha **o seu usuário**;

  - No menu à direita, clique no _link_ **"Reviewers"** e digite `students`, selecione o time `tryber/students-sd-06`.

Caso tenha alguma dúvida, [aqui tem um video explicativo](https://vimeo.com/362189205).

### Revisando um pull request

Use o conteúdo sobre [Code Review](https://course.betrybe.com/real-life-engineer/code-review/) para te ajudar a revisar os _Pull Requests_.

---

# Como desenvolver:

## Sobre o avaliador

O avaliador automático não necessariamente avalia seu projeto na ordem em que os requisitos aparecem no readme. Isso acontece para deixar o processo de avaliação mais rápido. Então, não se assuste se isso acontecer, ok?

# Requisitos do projeto

### Linter

Usaremos o [ESLint](https://eslint.org/) para fazer a análise estática do seu código.

Este projeto já vem com as dependências relacionadas ao _linter_ configuradas nos arquivos `package.json`.

Para poder rodar os `ESLint` em um projeto basta executar o comando `npm install` dentro do projeto e depois `npm run lint`. Se a análise do `ESLint` encontrar problemas no seu código, tais problemas serão mostrados no seu terminal. Se não houver problema no seu código, nada será impresso no seu terminal.

Você pode também instalar o plugin do `ESLint` no `VSCode`, bastar ir em extensions e baixar o [plugin `ESLint`](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint).

---

## Lista de requisitos

### Observações

1. Com exceção do requisito 3, todos os outros requisitos deverão ser feitos utilizando o módulo `fs`.

2. O arquivo `crush.json` será utilizado como base para fazer as requisições da API. As operações de leitura e escrita dos requisitos deve ser feito nesse arquivo usando os métodos da biblioteca `fs`.

3. Há um arquivo `index.js` no repositório. Não remova, nele, o seguinte trecho de código:

```javascript
app.get('/', (_request, response) => {
  response.status(SUCCESS).send();
});
```

Isso está configurado para o avaliador funcionar.


---

### 1 - Crie o endpoint GET `/crush`

#### Os seguintes pontos serão avaliados:

- O endpoint deve retornar um array com todos os crushs cadastrados. Devendo retornar o `status 200`, com o seguinte corpo:

```js
[
  {
    "name": "Madonna",
    "age": 62,
    "id": 1,
    "date": { "datedAt": "23/10/2020", "rate": 5 }
  },
  {
    "name": "Cyndi Lauper",
    "age": 67,
    "id": 2,
    "date": { "datedAt": "23/10/2020", "rate": 5 }
  },
  {
    "name": "Kendrick Lamar",
    "age": 33,
    "id": 3,
    "date": { "datedAt": "23/10/2020", "rate": 5 }
  },
  {
    "name": "Tom Holland",
    "age": 24,
    "id": 4,
    "date": { "datedAt": "23/10/2020", "rate": 5 }
  }
]
```

- Caso não exista nenhum crush cadastrado o endpoint deve retornar um array vazio e o `status 200`.


### 2 - Crie o endpoint GET `/crush/:id`

- O endpoint deve retornar um crush baseado no id da rota. Devendo retornar o `status 200` ao fazer uma requisição `/crush/1`, com o seguinte corpo:

  ```js
  {
    "name": "Madonna",
    "age": 62,
    "id": 1,
    "date": { "datedAt": "23/10/2020", "rate": 5 }
  }
  ```

- Caso não seja encontrado um crush baseado no id da rota, o endpoint deve retornar o `status 404` com o seguinte corpo:

  ```js
  {
    "message": "Crush não encontrado"
  }
  ```

### 3 - Crie o endpoint POST `/login`

#### Os seguintes pontos serão avaliados:

- O endpoint deve ser capaz de retornar um token aleatório de 16 caracteres que deverá ser utilizado nas demais requisições.

  - O endpoint deverá o retornar o token gerado, da seguinte forma:

  ```js
  {
    "token": "7mqaVRXJSp886CGr"
  }
  ```

- O corpo da requisição deverá ter o seguinte formato:

  ```js
  {
    "email": "email@email.com",
    "password": 123456
  }
  ```

- O campo `email` deverá ser um email válido. Ele é obrigatório.

  - Caso o campo não seja passado ou esteja vazio retorne um código de `status 400`, com o seguinte corpo:

    ```js
    {
      "message": "O campo \"email\" é obrigatório"
    }
    ```

  - Caso o email passado não seja um email válido retorne um código de `status 400`, com o seguinte corpo:

    ```js
    {
      "message": "O \"email\" deve ter o formato \"email@email.com\""
    }
    ```

- O campo `password` deverá ter pelo menos 6 caracteres.

  - Caso o campo não seja passado ou esteja vazio retorne um código de `status 400`, com o seguinte corpo:

    ```js
    {
      "message": "O campo \"password\" é obrigatório"
    }
    ```

  - Caso a senha não tenha pelo menos 6 caracteres retorne um código de `status 400`, com o seguinte corpo:

    ```js
    {
      "message": "O \"password\" ter pelo menos 6 caracteres"
    }
    ```

### 4 - Crie o endpoint POST `/crush`

#### Os seguintes pontos serão avaliados:

- O endpoint deve ser capaz de adicionar um novo crush ao seu arquivo;

- O corpo da requisição deverá ter o seguinte formato:

  ```js
  {
    "name": "Keanu Reeves",
    "age": 56,
    "date": {
      "datedAt": "22/10/2019",
      "rate": 5
    }
  }
  ```

- A requisição deve ter o token de autenticação nos headers.

  - Caso o token não seja encontrado retorne um código de `status 401`, com o seguinte corpo:

    ```js
    {
      "message": "Token não encontrado"
    }
    ```

  - Caso o token seja inválido retorne um código de `status 401`, com o seguinte corpo:

    ```js
    {
      "message": "Token inválido"
    }
    ```

- O campo `name` deverá ter no mínimo 3 caracteres. Ele é obrigatório.

  - Caso o campo não seja passado ou esteja vazio retorne um código de `status 400`, com o seguinte corpo:

    ```js
    {
      "message": "O campo \"name\" é obrigatório"
    }
    ```

  - Caso o nome não tenha pelo menos 3 caracteres retorne um código de `status 400`, com o seguinte corpo:

    ```js
    {
      "message": "O \"name\" deve ter pelo menos 3 caracteres"
    }
    ```

- O campo `age` deverá ser um inteiro e apenas pessoas maiores de idade (pelo menos `18 anos`) podem ser cadastrados. Ele é obrigatório.

  - Caso o campo não seja passado ou esteja vazio retorne um código de `status 400`, com o seguinte corpo:

    ```js
    {
      "message": "O campo \"age\" é obrigatório"
    }
    ```

  - Caso o crush não tenha pelo menos 18 anos retorne `status 400`, com o seguinte corpo:

    ```js
    {
      "message": "O crush deve ser maior de idade"
    }
    ```

- O campo `date` deverá ser um objeto com as seguintes chaves:

  - A chave `datedAt` deve ser uma data no formato `dd/mm/aaaa`.

    - Caso a data não respeito o formato `dd/mm/aaaa` retorne `status 400`, com o seguinte corpo:

    ```js
    {
      "message": "O campo \"datedAt\" deve ter o formato \"dd/mm/aaaa\""
    }
    ```

  - A chave `rate` deve ser um inteiro de 1 à 5.

    - Caso a nota não seja um inteiro de 1 à 5 retorne `status 400`, com o seguinte corpo:

      ```js
      {
        "message": "O campo \"rate\" deve ser um inteiro de 1 à 5"
      }
      ```

  - O campo `date` é obrigatório e nenhuma das chaves citadas anteriormente podem ser vazias.

    - Caso o campo não seja informa, esteja vazio ou então alguma de suas chaves não tenham sido informadas retorne `status 400`, com o seguinte corpo:

      ```js
      {
        "message": "O campo \"date\" é obrigatório e \"datedAt\" e \"rate\" não podem ser vazios"
      }
      ```

- O endpoint deve retornar o `status 201` e o crush que foi cadastrado, dá seguinte forma:

  ```js
  {
    "id": 1,
    "name": "Keanu Reeves",
    "age": 56,
    "date": {
      "datedAt": "22/10/2019",
      "rate": 5
    }
  }
  ```

### 5 - Crie o endpoint PUT `/crush/:id`

#### Os seguintes pontos serão avaliados:

- O endpoint deve ser capaz de editar um crush baseado no id da rota, sem alterar o id registrado.

- O corpo da requisição deverá ter o seguinte formato:

  ```js
  {
    "name": "Keanu Reeves",
    "age": 56,
    "date": {
      "datedAt": "22/10/2019",
      "rate": 5
    }
  }
  ```
  
- A requisição deve ter o token de autenticação nos headers.

  - Caso o token não seja encontrado retorne um código de `status 401`, com o seguinte corpo:

    ```js
    {
      "message": "Token não encontrado"
    }
    ```

  - Caso o token seja inválido retorne um código de `status 401`, com o seguinte corpo:

    ```js
    {
      "message": "Token inválido"
    }
    ```

- O campo `name` deverá ter no mínimo 3 caracteres. Ele é obrigatório.

  - Caso o campo não seja passado ou esteja vazio retorne um código de `status 400`, com o seguinte corpo:

    ```js
    {
      "message": "O campo \"name\" é obrigatório"
    }
    ```

  - Caso o nome não tenha pelo menos 3 caracteres retorne um código de `status 400`, com o seguinte corpo:

    ```js
    {
      "message": "O \"name\" ter pelo menos 3 caracteres"
    }
    ```

- O campo `age` deverá ser um inteiro e apenas pessoas maiores de idade (pelo menos `18 anos`) podem ser cadastrados. Ele é obrigatório.

  - Caso o campo não seja passado ou esteja vazio retorne um código de `status 400`, com o seguinte corpo:

    ```js
    {
      "message": "O campo \"age\" é obrigatório"
    }
    ```

  - Caso o crush não tenha pelo menos 18 anos retorne `status 400`, com o seguinte corpo:

    ```js
    {
      "message": "O crush deve ser maior de idade"
    }
    ```

- O campo `date` deverá ser um objeto com as seguintes chaves:

  - A chave `datedAt` deve ser uma data no formato `dd/mm/aaaa`.

    - Caso a data não respeito o formato `dd/mm/aaaa` retorne `status 400`, com o seguinte corpo:

    ```js
    {
      "message": "O campo \"datedAt\" deve ter o formato \"dd/mm/aaaa\""
    }
    ```

  - A chave `rate` deve ser um inteiro de 1 à 5.

    - Caso a nota não seja um inteiro de 1 à 5 retorne `status 400`, com o seguinte corpo:

      ```js
      {
        "message": "O campo \"rate\" deve ser um inteiro de 1 à 5"
      }
      ```

  - O campo `date` é obrigatório e nenhuma das chaves citadas anteriormente podem ser vazias.

    - Caso o campo não seja informa, esteja vazio ou então alguma de suas chaves não tenham sido informadas retorne `status 400`, com o seguinte corpo:

      ```js
      {
        "message": "O campo \"date\" é obrigatório e \"datedAt\" e \"rate\" não podem ser vazios"
      }
      ```

- O endpoint deve retornar o `status 200` e o crush que foi editado, dá seguinte forma:

  ```js
  {
    "id": 1,
    "name": "Keanu Reeves",
    "age": 56,
    "date": {
      "datedAt": "22/10/2019",
      "rate": 4
    }
  }
  ```

### 6 - Crie o endpoint DELETE `/crush/:id`

#### Os seguintes pontos serão avaliados:

- A requisição deve ter o token de autenticação nos headers.

  - Caso o token não seja encontrado retorne um código de `status 401`, com o seguinte corpo:

    ```js
    {
      "message": "Token não encontrado"
    }
    ```

  - Caso o token seja inválido retorne um código de `status 401`, com o seguinte corpo:

    ```js
    {
      "message": "Token inválido"
    }
    ```

- O endpoint deve deletar um crush baseado no id da rota. Devendo retornar o `status 200`, com o seguinte corpo:

  ```js
  { "message": "Crush deletado com sucesso" }
  ```


### 7 - Crie o endpoint GET `/crush/search?q=searchTerm`

#### Os seguintes pontos serão avaliados:

- O endpoint deve retornar um array de crushs que contenham em seu nome o termo pesquisado no queryParam da URL. Devendo retornar o `status 200`, com o seguinte corpo:

  ```
  /search?q=Ke
  ```

  ```js
  [
    {
      id: 1,
      name: "Keanu Reeves",
      age: 56,
      date: {
        datedAt: "22/10/2019",
        rate: 5,
      },
    }
  ];
  ```

- A requisição deve ter o token de autenticação nos headers.

  - Caso o token não seja encontrado retorne um código de `status 401`, com o seguinte corpo:

    ```js
    {
      "message": "Token não encontrado"
    }
    ```

  - Caso o token seja inválido retorne um código de `status 401`, com o seguinte corpo:

    ```js
    {
      "message": "Token inválido"
    }
    ```

- Caso `searchTerm` não seja informado ou esteja vazio, o endpoint devera retornar um array com todos os crushs cadastrados, assim como no endpoint GET `/crush`, com um `status 200`.

- Caso nenhum crush satisfaça a busca, o endpoint deve retornar o `status 200` e um array vazio.

**Dica** é importante ter atenção se essa rota não entra em conflito com as outras, já que a ordem das rotas faz diferença na interpretação da aplicação


---

# Avisos finais

Ao finalizar e submeter o projeto, não se esqueça de avaliar sua experiência preenchendo o formulário. Leva menos de 3 minutos!

Link: [FORMULÁRIO DE AVALIAÇÃO DE PROJETO](https://be-trybe.typeform.com/to/ZTeR4IbH)

O avaliador automático não necessariamente avalia seu projeto na ordem em que os requisitos aparecem no readme. Isso acontece para deixar o processo de avaliação mais rápido. Então, não se assuste se isso acontecer, ok?
