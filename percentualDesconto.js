'use strict';
var readlineSync = require('readline-sync');


let cemPorCento = 100;
let valorQueTenho;
valorQueTenho = readlineSync.question("Qual é o valor que tenho ? ");

let valorProduto;
let variavelUm = 1 ;
valorProduto = readlineSync.question("Qual é o valor do produto ? ");



let descFinal = (valorProduto * cemPorCento) / valorQueTenho;
let desconto = descFinal - 100;


console.log("O percentual de desconto é : ", parseFloat(desconto),"%" );


// "enviando via git em 8/9/22"