//inciando

window.onload=function(){

    localStorage.clear();
    localStorage.setItem("selected-color", "black");
    boardSize(5);
    changeColor("yellow");
    changeColor("red");
    changeColor("blue");

}



//add class selected ao elemento que recebeu clique e remover dos outros elementos

//se o botao com id x receber onclick, adiciona selected nele e remove selected dos outros elementos.


//select color-buttons

function selectColor(button, color){


    localStorage.setItem("selected-color", color);	
    let botoes = document.getElementsByClassName("color")  
    for (i=0; i<botoes.length; i+=1){
        botoes[i].classList.remove("selected")
    }
    button.classList.add("selected")


}	
    

//

let blackButton = document.getElementById("black");
blackButton.addEventListener("click", function(){
    selectColor(blackButton,"black");
})

let yellowButton = document.getElementById("yellow");
yellowButton.addEventListener("click", function(){
    let yellowButton = document.getElementById("yellow");
    selectColor(yellowButton, yellowButton.style.backgroundColor);
})

let redButton = document.getElementById("red");
redButton.addEventListener("click", function(){
    let redButton = document.getElementById("red");
    selectColor(redButton, redButton.style.backgroundColor);
})


let blueButton = document.getElementById("blue");
blueButton.addEventListener("click", function(){
    let blueButton = document.getElementById("blue");
    selectColor(blueButton, blueButton.style.backgroundColor);
})

//





//Paste colors

function pasteColor(pixel, color){
    pixel.style.backgroundColor = color;
}





//clear-button

function clearColor(color){
    let pixels = document.getElementsByClassName("pixel");

    for (let i=0; i < pixels.length; i++) {
        pixels[i].style.backgroundColor="white"
    }
}

let clearButton = document.getElementById("clear-board");
clearButton.addEventListener("click", function() {
    clearColor("white");
})



//numberofpixels-button


function boardSize(n){


    const myNode = document.getElementById("pixel-board");
    myNode.innerHTML = '';


    for (let i=0; i<n; i+=1){

        const novaColuna = document.createElement("div");

        novaColuna.classList = "coluna";

        for (let j=0; j<n; j+=1){

            const novoPixel = document.createElement("div");

            novoPixel.classList = "pixel"

            novoPixel.onclick = function() {
                pasteColor(novoPixel, localStorage.getItem("selected-color"));
            }

            novaColuna.appendChild(novoPixel);

        }

        document.getElementById("pixel-board").appendChild(novaColuna);
    }
    
}

let vqvButton = document.getElementById("generate-board");

vqvButton.addEventListener("click", function() {
    let number = document.getElementById("board-size");
    let n = number.value;

    if (n>50){
        n=50
    }
    else if (n<5 && n>0){
        n=5
    }
    else if (n.length===0){
        alert("Board inválido!")
    }

    boardSize(n);
})

//funcao random-color

function changeColor(id){

    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.getElementById(id).style.backgroundColor = "#" + randomColor;

}

