'use strict';
//Crear la funcion sumar 
function sum (a , b){
    let resutado = a + b;
    alert ("la suma es "+ resutado);
}
//Crear la funcion restar 
function restar (a , b){
    let result = a - b;
    alert ("la resta es " + result);
}
//llamamos a la funcion 
function calc(primerNumero, segundoNumero, op) {
    if (op === sum) {
        sum(a, b);
    } else if (op === restar) {
        restar(a, b);
    } else {
        alert("Operación no soportada");
    }
}
calc(5, 3, sum); // Llama a la función sum con los números 5 y 3
calc(8, 9, restar); // Llama a la función restar con los números 5 y 3

let resta = (a, b) => a - b;