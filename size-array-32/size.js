'use strict';

/*Crear una funcion que resiba un array y devuelva el numero de elementos */

function contarElementos(array) {
    let contador = 0;
    for (let i = 0; i < array.length; i++) {
        contador++;
    }
    return contador;
}

// Ejemplo de uso
const miArray = [1, 2, 3, 4, 5];
alert
(contarElementos(miArray));  
