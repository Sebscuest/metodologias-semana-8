'use strict';
/*Contar cuantos números impares tiene el siguiente array: `nums=[3, 5, 6, 7, 3, 5, 6, 7]`

**Nota:** Usar el operador mod, este operador devuelve el residuo de dividir dos números.

Ejemplos: `9 mod 2 = 1` `8 mod 2 = 0`*/ 

function impares(nums) {
    let imparCount = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 2 === 1) {
            imparCount++;
        }
    }

    return imparCount;
}

let nums = [1,9,2,15,6,3, 5, 6, 7];
let resultado = impares(nums);
alert("La cantidad de números impares en el array es: " + resultado);
