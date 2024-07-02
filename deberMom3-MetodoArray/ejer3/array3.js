'use strict'
/*Crear una función que calcule el promedio de un conjunto de calificaciones almacenados en un array. 
La función debe recibir el array y devolver únicamente la parte entera del promedio.*/ 

function promedio(calificaciones) {
    const suma = calificaciones.reduce((acc, cal) => acc + cal, 0);
    return Math.floor(suma / calificaciones.length);
  }
  
  const calificaciones = [85, 90, 78, 92, 88];
  alert(promedio(calificaciones)); 