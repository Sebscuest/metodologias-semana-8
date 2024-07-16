'use strict';

//3er Ejercicio
function filtrarPalabras(frase) {
    let palabras = frase.split(' '); //dividir la frase 
    let palabrasFiltradas = palabras.filter(palabra => palabra.length > 3); //nuevo Array con las palabras 
    return palabrasFiltradas;
}
let phrase1 = 'Me gusta jugar mucho al futbol los fines de semana con mis amigos';
let result = filtrarPalabras(phrase1);
alert(result);