'use strict';
let nombre = 'Juan';
let nombreDos = 'Pedro';  

let students = ['Daniel','Kevin','Salome','Darwin','Mateo']
//tamaño del array
//cual es el ultimo indice: 4 
// Que elemento esya en el idice 2: salome 
//cual es el primer indice

//inicio 0; condicion: tamano del array; incremento en 1 
for(let i = 0; i<5; i++){
    alert (students [i]);
}



// Crear un array vacío para almacenar las marcas de carros
let marcasDeCarros = [];

// Definir cuántas marcas de carros vamos a solicitar
let cantidadDeMarcas = 5;

// Utilizar un bucle for para solicitar al usuario que ingrese las marcas de carros
for (let i = 0; i < cantidadDeMarcas; i++) {
  let marca = prompt("Por favor, ingresa una marca de carro:");
  
  // Comprobar si el usuario presionó "Cancelar" o ingresó un campo vacío
  if (marca === null || marca === "") {
    alert("Has cancelado o ingresado un campo vacío. Intentemos de nuevo.");
    i--; // restamos 1 a "i" para repetir el ciclo en la misma posición
  } else {
    // Agregar la marca ingresada al array
    marcasDeCarros.push(marca);
  }
}

// Imprimir las marcas de carros ingresadas
alert(marcasDeCarros);
