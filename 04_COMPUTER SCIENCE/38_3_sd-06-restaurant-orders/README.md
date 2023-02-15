# Projeto Restaurant Orders!

# Sumário

- [Habilidades](#habilidades)
- [Entregáveis](#entregáveis)
  - [O que deverá ser desenvolvido](#o-que-deverá-ser-desenvolvido)
  - [Desenvolvimento](#desenvolvimento)
  - [Data de Entrega](#data-de-entrega)
- [Instruções para entregar seu projeto](#instruções-para-entregar-seu-projeto)
  - [Antes de começar a desenvolver](#antes-de-começar-a-desenvolver)
  - [Durante o desenvolvimento](#durante-o-desenvolvimento)
- [Como desenvolver](#como-desenvolver)
  - [Linter](#linter)
- [Requisitos do projeto](#requisitos-do-projeto)

    `Requisitos obrigatórios:`
    - [1 - Campanha de publicidade, implemente um método chamado analyze_log no módulo src/analyze_log.py que gere informações de uma lanchonete.](#1---campanha-de-publicidade-implemente-um-método-chamado-analyze_log-no-módulo-srcanalyze_logpy-que-gere-informações-de-uma-lanchonete)
    - [2 - Análises contínuas, implemente a classe TrackOrders que gere informações contínuas de uma lanchonete.](#2---análises-contínuas-implemente-a-classe-trackorders-que-gere-informações-contínuas-de-uma-lanchonete)
    
    `Requisitos bônus:`
    - [3 - Controle de estoque](#3---controle-de-estoque)
    - [4 - Estoque pode acabar](#4---estoque-pode-acabar)
- [Depois de terminar o desenvolvimento](#depois-de-terminar-o-desenvolvimento)
- [Revisando um pull request](#revisando-um-pull-request)
- [Avisos Finais](#avisos-finais)

---

## Habilidades

- Trabalhar com Hash map e Dict

- Trabalhar com Set

---

## Entregáveis

Para entregar o seu projeto você deverá criar um _Pull Request_ neste repositório. Este _Pull Request_ deverá conter os arquivos do diretório `src` devidamente preenchidos de acordo com as instruções, que conterão seu código `Python` e seus testes, respectivamente.

### ⚠️ É importante que seus arquivos tenham exatamente os nomes definidos dentro do diretório src! ⚠️

Você pode adicionar outros arquivos se julgar necessário. Qualquer dúvida, procure a monitoria.

Lembre-se que você pode consultar nosso conteúdo sobre [Git & GitHub](https://course.betrybe.com/intro/git/) sempre que precisar!

---

## O que deverá ser desenvolvido

A lanchonete Pão na Chapa, atualmente, possui um sistema de faturamento dos pedidos dos clientes, que salva o nome da pessoa, o pedido realizado, e dia do atendimento (dia da semana). O projeto consiste em ajudar a lanchonete a melhorar esse sistema para que ele possibilite extração de relatórios e, num segundo momento, a controlar seu estoque.

O projeto está estruturado em duas etapas obrigatórias, e a tarefa bônus, também em duas etapas, totalizando 4 requisitos. Foque nas etapas obrigatórias e com o mesmo cuidado que teria com um cliente real: código limpo, com boa manutenção e legibilidade.

---

## Requisitos obrigatórios:

### 1 - Campanha de publicidade, implemente um método chamado `analyze_log` no módulo `src/analyze_log.py` que gere informações de uma lanchonete.

A lanchonete quer promover ações de marketing e, para isso, a agência de publicidade precisa exatamente das informações abaixo:

- Qual o prato mais pedido por 'maria'?

- Quantas vezes 'arnaldo' pediu 'hamburguer'?

- Quais pratos 'joao' nunca pediu?

- Quais dias 'joao' nunca foi na lanchonete?

#### Dados

O atual sistema guarda os `logs` de todos os pedidos feitos em um arquivo _csv_, contendo o formato `cliente, pedido, dia`, um por linha e sem nome das colunas (a primeira linha já é um pedido).

O `log` a ser utilizado é o arquivo `data/orders_1.csv`. Todas as informações são _strings_ com letras minúsculas. O histórico contém pedidos feitos em todos os dias da semana e de todos os pratos que a lanchonete oferece. Ou seja, é possível saber o cardápio completo. Os dias da semana estão no formato `"...-feira", "sabado" ou "domingo"`.

#### Implementação

No arquivo `analyze_log.py`, escreva uma função que responda às seguintes perguntas abaixo:

- Qual o prato mais pedido por 'maria'?

- Quantas vezes 'arnaldo' pediu 'hamburguer'?

- Quais pratos 'joao' nunca pediu?

- Quais dias 'joao' nunca foi na lanchonete?

A função não retornará nada! A função deve apenas salvar as respostas no arquivo `data/mkt_campaign.txt`, na mesma ordem que acima.

**Assinatura da função:**

```python
def analyze_log(path_to_file):
    # Código vem aqui
```

**Saída correta:**

```
hamburguer
1
{'pizza', 'coxinha', 'misto-quente'}
{'sabado', 'segunda-feira'}
```

> A órdem dos pedidos, bem como dos dias não precisa ser exatamente a apresentada no exemplo

- No arquivo analyze_log.py deve estar implementada a função `def analyze_log(path_to_file)`;

- A função deve realizar a leitura do `log` e salvar em um arquivo `txt` as informações solicitadas;

- Utilização correta de `Dict/Set`, vistos no módulo;

- Código legível e modularizado, quando for o caso.

##### As seguintes verificações serão feitas:

- 1.1 - Será validado se, ao executar o método `analyze_log`, os dados são preenchidos de forma correta no arquivo `data/mkt_campaign.txt`

- 1.2 - Será validado se, ao executar o método `analyze_log` com um arquivo inexistente, o método retorna um erro

- 1.3 - Será validado se, ao executar o método `analyze_log` com uma extensão inválida, o método retorna um erro

### 2 - Análises contínuas, implemente a classe `TrackOrders` que gere informações contínuas de uma lanchonete.

A campanha de marketing foi um sucesso! A gerência agora deseja um sistema que mantenha um registro contínuo dessas informações. Mais especificamente, desejam que o sistema permita a extração das seguintes informações a qualquer momento:

- Prato favorito por cliente;

- Quanto de cada prato cada cliente já pediu;

- Pratos nunca pedidos por cada cliente;

- Dia mais movimentado;

- Dia menos movimentado.

Para isso, você deverá implementar uma classe que entregue as informações acima.

#### Implementação

**Arquivos**

- O arquivo `track_orders.py` é onde você implementará a classe `TrackOrders`.

- O arquivo `src/main.py` faz a leitura do arquivo `csv` especificado e envia a informação de cada pedido para as classes `TrackOrders` e para a classe `InventoryControl`, ao mesmo tempo.

- Ainda no arquivo `src/main.py`, após a leitura completa do arquivo `csv`, algumas informações são impressas na tela para que você observe o comportamento das classes.

> Não se preocupe com o arquivo `inventory_control.py` (classe InventoryControl), pois ele é para a realização dos requisitos bônus.

**Teste o comportamento do arquivo `main.py`**

Abra o arquivo `main.py` e complete a variável _path_ com `data/orders_1.csv`. Rode o arquivo `main.py`. Cinco linhas de `None` devem ser impressas. Isso acontece, porque as funções não estão devidamente implementadas ainda.

**Implemente a solução**

No arquivo `track_orders.py`, implemente a classe `TrackOrders`, contendo, **no mínimo**, os métodos abaixo:

```python
class TrackOrders:
    # aqui deve expor a quantidade de estoque 
    def __len__(self):
      pass

    def add_new_order(self, costumer, order, day):
        pass

    def get_most_ordered_dish_per_costumer(self, costumer):
        pass

    def get_dish_quantity_per_costumer(self, costumer, order):
        pass

    def get_never_ordered_per_costumer(self, costumer):
        pass

    def get_busiest_day(self):
        pass

    def get_least_busy_day(self):
        pass
```

> Você é livre para criar os atributos e métodos necessários. Lembre-se de criar uma classe legível e bem modularizada. Lembre-se também de não incorrer em otimização prematura. Ou seja, não implemente funcionalidades que ainda não são necessárias, nem coloque atributos do tipo "vai que um dia precisa". Sempre rode o arquivo `main.py` para verificar o comportamento da sua classe.

- Classe `TrackOrders` implementada;

- A classe está devidamente modularizada;

- Os métodos fazem uso das técnicas de `Dict` e `Set` vistos no módulo;

- Os métodos atingem complexidade ótima (geralmente `O(1)` ou `O(n)`, em alguns métodos que usam `Set`).

##### As seguintes verificações serão feitas:

- 2.1 - Será validado se, ao instanciar a classe `TrackOrders` pela primeira vez, o método retorna a quantidade de pedidos é igual a zero.

- 2.2 - Será validado se, ao executar o método `add_new_order`, o método deve adicionar um pedido.

- 2.3 - Será validado se, ao executar `get_most_ordered_dish_per_costumer`, o método retorna o prato mais pedido.

- 2.4 - Será validado se, ao executar `get_never_ordered_per_costumer`, o método retorna o pedido que o cliente nunca fez.

- 2.5 - Será validado se, ao executar `get_days_never_visited_per_costumer`, o método retorna o dias que o cliente nunca visitou.

- 2.6 - Será validado se, ao executar o método `get_busiest_day`, o método retorna o dia mais movimentado.

- 2.7 - Será validado se, ao executar o método `get_least_busy_day`, o método retorna o dia menos movimentado.

---

## Requisitos bônus:

### 3 - Controle de estoque

Atualmente o controle de estoque de ingredientes é feito no caderninho. Ao final da semana, uma pessoa conta quantas unidades, de cada ingrediente, ainda restam no estoque e anota quantos precisam ser comprados, para completar o estoque mínimo de cada ingrediente.

A lanchonete deseja automatizar esse controle: no final da semana, a gerência irá imprimir uma lista de compras com as respectivas quantidades.

#### Dados

O `log` a ser utilizado ainda é o arquivo `data/orders_1.csv`. É garantido que os pedidos da semana não irão zerar nenhum dos estoques.

#### Implementação

No arquivo `inventory_control.py` você deve implementar a classe `InventoryControl` que retorna a lista de compras da semana, a partir da informação de cada. É importante que a lista seja atualizada a cada pedido, e não apenas ao final de semana, pois a gerência quer a liberdade de imprimir a lista de compras a qualquer momento.

A estrutura básica da classe está demonstrada abaixo e já contém as informações dos ingredientes, bem como o estoque mínimo de cada um. O método `get_quantities_to_buy` deve retornar um `Dict` que mapeia o ingrediente para a quantidade a ser comprada:

```python
class InventoryControl:
    def __init__(self):
        self.ingredients = {
            'hamburguer': ['pao', 'carne', 'queijo'],
            'pizza': ['massa', 'queijo', 'molho', 'tomate'],
            'queijo-quente': ['pao', 'queijo', 'queijo'],
            'misto-quente': ['pao', 'queijo', 'presunto'],
            'bauru': ['pao', 'queijo', 'presunto', 'tomate'],
            'coxinha': ['massa', 'frango'],
        }
  
        self.minimum_inventory = {
            'pao': 50,
            'carne': 50,
            'queijo': 100,
            'molho': 50,
            'presunto': 50,
            'massa': 50,
            'frango': 50,
        }

    def add_new_order(self, costumer, order, _day):
        pass

    def get_quantities_to_buy(self):
        pass
```

- Classe `InventoryControl` implementada;

- A classe está devidamente modularizada;

- Garanta que todos os ingredientes e pratos foram testados;

* Dicas:

- Os métodos devem fazer uso das técnicas de `Dict` e `Set` vistos no módulo;

- Os métodos atingem complexidade ótima (geralmente `O(1)` ou `O(n)`, em alguns métodos que usam `Set`).

##### As seguintes verificações serão feitas:

- 3.1 - Será validado se, ao executar o método `get_quantities_to_buy`, o método retorna a informação atualizada de ingredientes necessários.

- 3.2 - Será validado se, ao executar o método `get_quantities_to_buy`, o método retorna os ingredientes que devem ser comprados para hamburguer.

- 3.3 - Será validado se, ao executar o método `get_quantities_to_buy`, o método retorna a informação atualizada de ingredientes necessários de receitas diferentes.

### 4 - Estoque pode acabar

As campanhas de marketing atraíram muitos novos clientes para a lanchonete. Se antes os estoques mínimos eram sempre suficientes para uma semana, agora não são mais...

Suponha os seguintes estoques:

```md
- Pao: 1;

- Queijo: 5;

- Presunto: 3.
```

Se uma pessoa pedir um misto-quente, será possível atendê-lo. Porém o pão irá acabar. Se a próxima pessoa pedir hamburguer, não será possível atendê-lo. Sua missão é implementar um código que, caso algum ingrediente acabe, todos os pratos que usam aquele ingrediente devem ser imediatamente removidos do cardápio eletrônico, evitando clientes frustrados.

#### Dados

O `log` a ser utilizado agora é o arquivo `data/orders_2.csv`. Não se esqueça de alterar na variável `path` do arquivo `main.py`.

#### Implementação

> Você fez commit do requisito de `Controle de estoque`? Se não, faça, pois agora você vai alterar o seu código!

Na classe `InventoryControl` implemente um novo método que retorne um conjunto com todos os pratos disponíveis, ou seja, que ainda tem ingredientes suficientes.

**Assinatura da função:**

```python
def get_available_dishes():
    # retorno: um conjunto de pratos que ainda têm ingredientes disponíveis
```

Altere o arquivo `main.py`:

- A cada pedido recebido, inclua uma chamada para o seu novo método;

- Caso o prato que a pessoa solicitou não esteja disponível, não envie as informações do pedido para as demais classes.

- Novo método, `get_available_dishes`, implementado e funcionando corretamente.

- Alteração na `main.py` produzindo o efeito esperado.

- As classes/métodos estão devidamente modularizadas;

- Os métodos fazem uso das técnicas de `Dict` e `Set` vistos no módulo;

##### As seguintes verificações serão feitas:

- 4.1 - Será validado se, ao adicionar uma quantidade maior de ingredientes, o método `add_new_order` retorna false

- 4.2 - Será validado se, ao executar o método `get_available_dishes`, o método retorna todos os pratos onde os pratos tem ingredientes.

- 4.3 - Será validado se, ao executar o método `get_available_dishes`, método não retorna os pratos cujos ingredientes não sejam suficientes para prepará-los.

