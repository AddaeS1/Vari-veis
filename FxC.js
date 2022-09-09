'use strict';
var readlineSync = require('readline-sync');

let F;
let C;

F = readlineSync.question("Qual é a temperatura em F ?");


C = (F-32) * 5/9 ;

console.log("A temperatura em celsius é : ", parseFloat(C));


// "enviando via git em 8/9/22"