'use strict';
var readlineSync = require('readline-sync');


let altura;
let peso;
let imc;

altura = readlineSync.question("Qual é a sua atura ?");
peso = readlineSync.question("Qual é o seu peso ?");

imc = parseFloat(peso) / parseFloat(altura*altura)

console.log("O seu IMC é : ", parseFloat(imc));
