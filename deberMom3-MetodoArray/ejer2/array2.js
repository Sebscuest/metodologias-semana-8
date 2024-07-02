'use strict'
/* Crear un array de objetos con la informacion de las asignaturas de la carrera de Desarrollo de software. 
 Crear una función que reciba como parámetro el array de las asignaturas y un numero que indique el nivel. 
La función debe retornar solo las asignaturas que pertenecen a ese nivel. */ 

const asignaturas = [
    { nombre: "BASE DE DATOS RELACIONALES", nivel: 1 },
    { nombre: "LAS TICS Y SOPORTE EN HARDWARE", nivel: 1 },
    { nombre: "METODOLOGIAS PARA RESOLVER PROBLEMAS INFORMATICOS", nivel: 1 },
    { nombre: "PROCESOS CONTABLES", nivel: 2 },
    { nombre: "PROYECTO INTEGRADOR DE SABERES:CREACION DE", nivel: 2 },
    { nombre: "SISTEMAS DE INFORMACION", nivel: 2 },
    { nombre: "SISTEMAS DIGITALES PROGRAMABLES", nivel: 2 },
    { nombre: "PROGRAMACION ORIENTADA A OBJETOS", nivel: 2 }
  ];
  
  function filtrarPorNivel(asignaturas, nivel) {
    return asignaturas
      .filter(asignatura => asignatura.nivel === nivel)
      .map(asignatura => asignatura.nombre);
  }
  
  alert("Asignaturas de nivel 1:");
  alert(filtrarPorNivel(asignaturas, 1));
  
  alert("\nAsignaturas de nivel 2:");
  alert(filtrarPorNivel(asignaturas, 2));