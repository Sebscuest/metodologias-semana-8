'use strict';

/*const nums = [0, 2, 4, 8];

for (let i = 0; i < nums.length; i++) {
    let row = "";
    for (let j = 0; j < nums.length; j++) {
        row += `${nums[i]}${nums[j].toString().padStart(2, '0')}`;
        if (j < nums.length - 1) {
            row += " "; // Agregar espacio solo entre los números
        }
    }
    alert(row);


function imprimirPatron(array){
    for (let i=0; i < array.length;i++){
        for(let j = 0; j < array.length; j++){
        let resultado = num [i]+ " " + num[j];
        alert(resultado)
    }
}
}

const nums = [0, 2, 4, 8];
imprimirPatron(nums);*/

function imprimirPatron(array) {
    for (let i = 0; i < array.length; i++) {
        let fila = ""; // Inicializa una fila vacía
        for (let j = 0; j < array.length; j++) {
            let resultado = (array[i] < 10 ? "0" : "") + array[i] + (array[j] < 10 ? "0" : "") + array[j];
            fila += resultado + " "; // Añade el resultado a la fila
        }
        alert(fila.trim()); // Imprime la fila completa y quita el espacio al final
    }
}

const nums = [0, 2, 4, 8];
imprimirPatron(nums);
