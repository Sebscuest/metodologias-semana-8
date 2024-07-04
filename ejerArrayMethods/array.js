'use strict';

//1er Ejercicio
function nombre(array, nombre) {
    if (array.includes(nombre)) {
        alert("Si se encuentra");
    } else {
        alert("No se encuentra");
    }
}
let students = ["Juan", "Jose", "Pedro", "Maria", "Alejandra"];
nombre(students, "Alejandra","Juan"); 
nombre(students, "Carlos"); 


//2do ejercicio
function contarPalabras(frase) {
    let numeroPalabras = frase.split(' ').length;
    return numeroPalabras;
}
let phrase = 'La programación web es fundamental para el progreso';
let resultado = contarPalabras(phrase);
alert(`La frase tiene ${resultado} palabras.`);

//3er Ejercicio
function filtrarPalabras(frase) {
    let palabras = frase.split(' '); //dividir la frase 
    let palabrasFiltradas = palabras.filter(palabra => palabra.length > 3); //nuevo Array con las palabras 
    return palabrasFiltradas;
}
let phrase1 = 'Me gusta jugar mucho al futbol los fines de semana con mis amigos';
let result = filtrarPalabras(phrase1);
alert(result);

