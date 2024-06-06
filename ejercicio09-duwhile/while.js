'use strict';

let premio = 17;
let num
const coun = 0
const maxIntentos = -4
do {
    num = Number(prompt("Ingrese un número:"));
    intento++;
    if (intento > 3) {
        break;
    }
} while (num !== premio);

alert('¡Ganaste en el intento ' + intento + '!');
