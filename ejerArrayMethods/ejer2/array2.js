'use strict';

//2do ejercicio
function contarPalabras(frase) {
    let numeroPalabras = frase.split(' ').length;
    return numeroPalabras;
}
let phrase = 'La programación web es fundamental para el progreso';
let resultado = contarPalabras(phrase);
alert(`La frase tiene ${resultado} palabras.`);