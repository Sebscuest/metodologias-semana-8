'use strict';

let students = [];
// Agregar los primeros 5 nombres de la lista
students.push('Junior', 'Carlos', 'Sergio', 'Darwin', 'Ian');
// Agregar a Mateo al inicio de la lista
students.unshift('Mateo');
// Eliminar el último elemento
students.pop();
// Eliminar el primer elemento
students.shift();
// Agregar a Mateo entre Sergio y Darwin
let posicion = students.indexOf('Darwin');
//students.splice(posicion, 0, 'Mateo');

// Método encontrar a Carlos
let itemFind = students.find(item => item === 'Carlos');

let ages =[16,18,20,25,30];

let agesFilter = ages.filter (item =>item <20);
let agesChanged = ages.map(item => item/2);

let subjects= 'Piensa, metodologias, metematica, interfaz, bd, tics';
let subjectsArr = subjects.split(', ')
let subjectsExist = subjectsArr.includes('Piensa');
alert(subjectsExist);



