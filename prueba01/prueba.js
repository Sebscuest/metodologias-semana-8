'use strict'

/*En nuestra tienda, ofrecemos a nuestros clientes la conveniencia de utilizar nuestro estacionamiento por USD 2,00. 
Si su compra supera los USD 20,00, el estacionamiento será gratuito. Para calcular el total de su compra, 
le pedimos que ingrese el precio unitario del producto y la cantidad que desea adquirir. 
Mostrar el valor a pagar por el uso del parqueadero.*/


let unitPrice =prompt("Ingrese el precio del producto:");
let amount = prompt("Ingrese la cantidad que desea adquirir:");


let purchaseTotal = unitPrice * amount;


if (purchaseTotal > 20) {
    alert("El estacionamiento es gratuito.");
} else {
    alert("El estacionamiento cuesta USD 2,00.");
}
