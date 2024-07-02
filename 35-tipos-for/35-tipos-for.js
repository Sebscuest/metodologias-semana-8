'use strict';

let nums= [4,6,3,7,1];
//aplicar for tradicional y for of para mostar los elementos 
//En uno de los for mostrar indice y elemento usando backstick
for (let i = 0; i < nums.length; i++) {
    alert (`Índice: ${i}, Elemento: ${nums[i]}`);
}


for (let item of nums) {
    alert(item);
}
nums.forEach(alert)