'use strict';

function imprimirPatron(array) {
    for (let i = 0; i < array.length; i++) {
        let fila = "";
        for (let j = 0; j < array.length; j++) {
            let resultado = array[i].toString().padStart(2, '0') + array[j].toString().padStart(2, '0');
            fila += resultado + " ";
        }
        console.log(fila.trim());
    }
}

const nums = [0, 2, 4, 8];
imprimirPatron(nums);
