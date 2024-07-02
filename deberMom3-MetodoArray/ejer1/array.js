'use strict'

/*Crear una función que filtre los valores mayores a 10.00 y redondearlos a 2 decimales como string. Retornando un array. 
nums = [13.676767, 3.123432, 5.34543543, 10.3452345]*/

function filRedondeo(nums) {
    return nums
      .filter(num => num > 10)
      .map(num => Number(num.toFixed(2)).toString());
  }
  
  const nums = [13.676767, 3.123432, 5.34543543, 10.3452345];
  alert(filRedondeo
(nums));