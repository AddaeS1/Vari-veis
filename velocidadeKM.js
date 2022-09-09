'use strict';
var readlineSync = require('readline-sync');

let distancia;
let tempo;


distancia = readlineSync.question("Qual foi a distância percorrida ? ");
tempo = readlineSync.question("Qual foi o tempo gasto no trajeto(em segundos) ? ");

let velocidade = distancia / tempo ;
let km = 3.6;

let velocidadeKm = velocidade * km;

console.log("A velocidade em KM utilizada para a distância foi de :" , parseFloat(velocidadeKm));


