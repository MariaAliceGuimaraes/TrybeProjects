# Projeto Arte com Pixels!


<img src="pixelsart.gif" width="100%"/>


## Requisitos:

* Neste projeto, você implementará um editor de arte com pixels.

**Ou seja, dada uma paleta de cores e um quadro composto por pixels, você vai permitir que quem usa consiga pintar o que quiser no quadro!** 👩‍🎨

1 - A página deve possuir o título "Paleta de Cores".

2 - A página deve possuir uma paleta de quatro cores distintas.

3 - A cor **preta** deve ser a primeira na paleta de cores.

4 - A página deve possuir um quadro de pixels, com 25 pixels.

5 - Cada elemento do quadro de pixels deve possuir 40 _pixels_ de largura e 40 _pixels_ de altura e ser delimitado por uma borda preta de 1 pixel.

6 - Ao carregar a página, a cor **preta** da paleta já deve estar selecionada para pintar os pixels.

7 - Ao clicar em uma das cores da paleta, a cor selecionada é que vai ser usada para preencher os pixels no quadro.

8 - Ao clicar em um pixel dentro do quadro após selecionar uma cor na paleta, o pixel deve ser preenchido com esta cor.

9 - Crie um botão que, ao ser clicado, limpa o quadro preenchendo a cor de todos seus pixels com branco.

10 - Faça o quadro de pixels ter seu tamanho definido pelo usuário.

### Verificações:

- Crie um input e um botão que permitam definir um quadro de pixels com tamanho entre 5 e 50. Ao clicar no botão, deve ser gerado um quadro de **N** pixels de largura e **N** pixels de altura, onde **N** é o número inserido no input;

 - Ou seja, se o valor passado para o input for 7, ao clicar no botão, vai ser gerado um quadro de 49 pixels (7 pixels de largura x 7 pixels de altura);

- O input só deve aceitar número maiores que zero. Essa restrição **deve** ser feita usando os atributos do elemento `input`;

- O novo quadro deve ter todos os pixels preenchidos com a cor branca.

- Faça com que as cores da paleta sejam geradas aleatoriamente ao carregar a página.

- A cor preta ainda precisa estar presente e deve ser a primeira na sua paleta de cores.

