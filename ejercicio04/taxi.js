'use strict'

let totalKms = prompt("Ingrese el Kilometraje");
let precioPorKm = 0.25;  
let arranque = 0.55;
let valor = (precioPorKm * totalKms) + arranque;

alert(valor);