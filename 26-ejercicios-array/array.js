'use strict';

//Escribir una funcion que reciba un array y retorne la suma de sus elementos 

function sumArray(array){
    let sum = 0;
    for(let i=0; i < array.legth; i++){
        sum = sum +array[i];
    }
    return sum; 
}

let array = [2, 8, 9];
let result = sumArray(array);
alert (result);