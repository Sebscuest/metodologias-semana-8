'use strict';

/* Esribir una funcion que reciba un array y devuelva la suma de los numeros pares*/
function sumaPares(array) {
    let suma = 0; // Inicializa

    for (let i = 0; i < array.length; i++) { // Recorre cada elemento del array
        if (array[i] % 2 === 0) { // verifica si es par 
            suma += array[i]; // Si es par, lo suma a la variable suma
        }
    }

    return suma;
}

// Ejemplo de uso
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
let resultado = sumaPares(numeros);
alert(resultado);