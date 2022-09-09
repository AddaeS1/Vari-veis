'use strict';
var readlineSync = require('readline-sync');

let montante ;
let capital ;
let i  ;
let t;


capital = readlineSync.question("Qual é o valor do capital investido ? ");
i = readlineSync.question("Qual é a taxa de juros a incindir no capital(para 5% digite 0.5, para 10% digite 1.0) ? ");
t = readlineSync.question("Qual é o tempo do investimento ? ");


montante = parseFloat(capital) * (1+parseFloat(i))**parseFloat(t);
console.log(`Seu montante após o decorrer do tempo e da incisão dos juros compostos é : ${montante.toFixed(2)}`);

// "enviando via git em 8/9/22"