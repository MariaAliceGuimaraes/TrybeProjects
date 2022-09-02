// Desafio 1 // Usando operador &&

let param1=true;
let param2=false;

function compareTrue(param1,param2) {
  if (param1 && param2){
    return true
  }
  else {
    return false
  }
}
console.log(compareTrue(param1,param2))



// Desafio 2 // Área do triângulo

function calcArea(b,h) {
  area=(b*h)/2
  return area
}

let b=10;
let h=15;
let area;
console.log(calcArea(b,h))



// Desafio 3 // Dividindo a frase

function splitSentence(sentence) {
  return sentence.split(" ");
}

let sentence="go Trybe";
console.log(splitSentence(sentence))



// Desafio 4 // Concatenação de strings

function concatName(arrayStrings) {
  return arrayStrings[arrayStrings.length-1] + ", "  + arrayStrings[0];
}

let arrayStrings=['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'];
console.log(concatName(arrayStrings))



// Desafio 5 // Pontos no futebol


function footballPoints(gamesWon,gamesTied) {
  points=(gamesTied*1)+(gamesWon*3)
  return points
}

let gamesWon=2;
let gamesTied=3;
let points;
console.log(footballPoints(gamesWon,gamesTied))



// Desafio 6 // Repetição do maior número

function highestCount(numbers) {

  let maxNum=0;
  let objeto={};
  let repeticoes;

  for (let i in numbers){

    let n = numbers[i];

    if (objeto[n]){
      objeto[n]+=1
    }
    else {
      objeto[n]=1
    }

    if (n>=maxNum){
      maxNum=n;
      repeticoes=objeto[n];
    }
  }
  return repeticoes;
}
let numbers=[0,4,4,4,9,2,1];
console.log(highestCount(numbers))



// Desafio 7 // Caça ao rato

function catAndMouse(rat,gat1,gat2) {

  let dist1=Math.abs(gat1-rat);
  let dist2=Math.abs(gat2-rat);

  if (dist1<dist2){
    return "cat1"
  }
  else if(dist1>dist2){
    return "cat2"
  }
  else {
    return "os gatos trombam e o rato foge"
  }
}

let rat=1;
let gat1=0;
let gat2=2;
console.log(catAndMouse(rat,gat1,gat2))



// Desafio 8 // FizzBuzz

function fizzBuzz(arr) {

  let resultado=[]

  for (let i in arr){

    if (arr[i]%3==0 && arr[i]%5==0){
      resultado.push("fizzBuzz") 
    }

    else if (arr[i]%3==0){
      resultado.push("fizz")
    }

    else if (arr[i]%5==0){
      resultado.push("buzz")
    }

    else {
      resultado.push("bug!")
    }
  }
  return resultado;
}

let numbers2=[2, 15, 7, 9, 45];
console.log(fizzBuzz(numbers2))




// Desafio 9 // Codifique e Decodifique

function encode(frase) {
  let codificada=frase.replace(/a/g,"1").replace(/e/g,"2").replace(/i/g,"3").replace(/o/g,"4").replace(/u/g,"5");
  return codificada
}

function decode(codificada) {
  let decodificada=codificada.replace(/1/g,"a").replace(/2/g,"e").replace(/3/g,"i").replace(/4/g,"o").replace(/5/g,"u");
  return decodificada
}

let frase="hi there!";
let codificada=encode(frase);

console.log(codificada)
console.log(decode(codificada))




// Desafio 10 // Lista de tecnologias

function techList(nomesTec, nome) {
  
  let saida=[];
  let obj={};

  if (nomesTec.length==0){
    return "Vazio!"
  }

  for (let i in nomesTec){
    obj={
      tech:nomesTec[i],
      name:nome
    }
    saida.push(obj);
  }

    return saida.sort(function(a, b){
      if(a.tech<b.tech){
        return -1;
      }
      else if (a.tech>b.tech){
        return +1;
      }
      else {
        return 0;
      }
    }
  )
}

let nomesTec=["React", "Jest", "HTML", "CSS", "JavaScript"];
let nome="Lucas";
console.log(techList(nomesTec, nome))




// Desafio 11 // Número de telefone

function generatePhoneNumber(arr) {

  let arrRepetidos=[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

  if (arr.length!==11){
    return "Array com tamanho incorreto."
  }

  for (let i=0; i<arr.length; i+=1){

    let n = arr[i];

    if (arr[i]<0 || arr[i]>9 ){
      return "não é possível gerar um número de telefone com esses valores"
    }
    arrRepetidos[n-1] += 1;
  }

  if(Math.max.apply(null, arrRepetidos) >= 3){
    return "não é possível gerar um número de telefone com esses valores"
  }

  else {
    let ddd = arr.slice(0,2).join("");
    let num1 = arr.slice(2,7).join("");
    let num2 = (arr.slice(7,11)).join("");
  
    return "(" + ddd + ") " + num1 + "-" + num2
  }
}

console.log(generatePhoneNumber([0, 2, 3, 4, 5, 7, 7, 8, 9, 0, 7])
)



// Desafio 12 // Condição de existência de um triângulo

function triangleCheck(linhaA,linhaB,linhaC) {
  
  let op1=linhaA<linhaB+linhaC
  let op2=linhaB<linhaA+linhaC
  let op3=linhaC<linhaA+linhaB
  let op4=Math.abs(linhaA>linhaB-linhaC)
  let op5=Math.abs(linhaB>linhaA-linhaC)
  let op6=Math.abs(linhaC>linhaA-linhaB)

  if (op1 && op2 && op3 && op4 && op5 && op6){
    return true
  }
  else {
    return false
  }


}

console.log(triangleCheck(10, 14, 8));



// Desafio 13 // Bem vindo ao Bar da Trybe!

function hydrate(fraseRecebida) {
   
  let numeroCervejas=fraseRecebida.split("").filter(Number);

  let totalAgua=0;

  for (let i=0; i<numeroCervejas.length; i+=1){

    totalAgua+=parseInt(numeroCervejas[i]);
    
  }
  if (totalAgua>1){
    return totalAgua.toString() + " copos de água"
  }
  else if (totalAgua=1){
    return totalAgua.toString() + " copo de água"
  }
  
}
console.log(hydrate("1 cachaça, 5 cervejas e 1 copo de vinho"));



// NAO MEXER A PARTIR DAQUI

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  generatePhoneNumber,
  techList,
  highestCount,
  hydrate,
  splitSentence,
  triangleCheck,
}
