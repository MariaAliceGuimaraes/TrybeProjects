//addButton


function addButton () {

    let orderedList = document.getElementById("lista-tarefas");

    let textInput = document.querySelector("#texto-tarefa");

    let newItem = document.createElement("li");

    orderedList.appendChild(newItem);

    newItem.innerText = textInput.value;

    newItem.className="tarefa";

    textInput.value = "";
}

let addButtonClick = document.querySelector("#criar-tarefa");

addButtonClick.addEventListener("click", function(){
    addButton ();
})



//changeBackgroundColor

let list = document.getElementById("lista-tarefas");

list.addEventListener('click', function (event) {
    let li = event.target;
    for (let i = 0; i < list.childNodes.length; i += 1) {
      if (list.childNodes[i] !== li) {
        list.childNodes[i].style.backgroundColor = 'transparent';
      }
    }

    li.style.backgroundColor = 'rgb(128, 128, 128)';

});


//riscar tarefa finalizada


list.addEventListener("dblclick" , function(event){

    if (event.target.classList.contains("completed")){

        event.target.classList.remove("completed");

    }
    else{

        event.target.className="completed";

    }

})

//botao apaga-tudo

let apagaTudo = document.getElementById("apaga-tudo");

apagaTudo.addEventListener('click', function () {
    while (list.firstChild) {
      list.removeChild(list.firstChild);
    }
});

//botao remover finalizados

let apagaFinalizados = document.getElementById("remover-finalizados");

apagaFinalizados.addEventListener('click', function () {
    for (let i = (list.childNodes.length - 1); i >= 0; i -= 1) {
      if (list.childNodes[i].classList.contains('completed')) {
        list.removeChild(list.childNodes[i]);
      }
    }
  });



//botao salvar-tarefas


function saveTasks(listaDeTarefas){
  localStorage.setItem("tarefas-salvas", listaDeTarefas);
}

let listaDeTarefas = document.getElementById("lista-tarefas");
let buttonSaveTasks = document.getElementById("salvar-tarefas");

buttonSaveTasks.addEventListener('click', function () {
  localStorage.clear();
  let listaDeTarefas = document.getElementsByTagName('li');
  for (let item = 0; item < listaDeTarefas.length; item += 1) {
    localStorage.setItem(item, listaDeTarefas[item].innerHTML);
    localStorage.setItem(listaDeTarefas[item].innerText, listaDeTarefas[item].className);
  }
});



window.onload=function(){

  for (let i = 0; i < (localStorage.length / 2); i += 1) {

    let localStorageList = document.createElement('li');

    localStorageList.innerText = localStorage.getItem(i);

    localStorageList.className = localStorage.getItem(localStorageList.innerText);

    list.appendChild(localStorageList);

  }
}

//upButton

let upButton = document.getElementById("mover-cima");

upButton.addEventListener('click', function () {
  
  let tasks = listaDeTarefas.childNodes;

    for (let i = 1; i < tasks.length; i += 1) {

      if (tasks[i].style.backgroundColor === 'rgb(128, 128, 128)') {
        listaDeTarefas.insertBefore(tasks[i], tasks[i - 1]);
      }
    }
})

//downButton

let downButton = document.getElementById("mover-baixo");

downButton.addEventListener('click', function () {
  
  let tasks = listaDeTarefas.childNodes;
  
    for (let i = tasks.length - 2; i >= 0; i -= 1) {

      if (tasks[i].style.backgroundColor === 'rgb(128, 128, 128)') {
        listaDeTarefas.insertBefore(tasks[i + 1], tasks[i]);
      }
    }
})

//botao remove selecionado

let removeSelecionado = document.getElementById("remover-selecionado");

removeSelecionado.addEventListener('click', function () {

  let tasks = listaDeTarefas.childNodes;

  for (let i = 0; i < tasks.length; i += 1) {
    if (tasks[i].style.backgroundColor === 'rgb(128, 128, 128)') {
      list.removeChild(tasks[i]);
    }
  }
});
