'use strict';
//Escribir una función que reciba un array de strings y muestre cada elemento con su posición.
function elemPosicion(array) {
    for (let i = 0; i < array.length; i++) {
        alert(`Posición ${i}: ${array[i]}`);
    }
}

let strings = ["mandarina", "papaya", "melon","manzana"];
elemPosicion(strings);

//Escribir una función que reciba un array de números y devuelva la suma de todos sus elementos.
function sumaElementos(array) {
    let suma = 0;
    for (let i = 0; i < array.length; i++) {
        suma += array[i];
    }
    return suma;
}

let num = [7, 5, 9, 3, 6];
alert(sumaElementos(num));  


//Escribir una función que reciba un array de números y muestre casa uno de sus elementos multiplicado por 3.
function elemMultiplicados(array) {
    for (let i = 0; i < array.length; i++) {
        alert(array[i] * 3);
    }
}
let numeros = [5, 7, 4, 2, 9, 6, 8];
elemMultiplicados(numeros);
