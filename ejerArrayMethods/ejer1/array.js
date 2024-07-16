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