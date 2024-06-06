/*

'use strict'

let totalKms = (prompt("Ingrese el Kilometraje"));
let precioPorKm = 0.25;
let arranque = 0.55;
let minimo = 1.50
let valor = (precioPorKm * totalKms) + arranque ;

if (valor < 1.50) {
    valor = 1.50;
}

alert (valor);
*/

' use strict'

function calcularCostoViaje(distancia, hora) {
    var costoPorKmDia = 0.29;
    var costoPorKmNoche = 0.29;
    var costoArranque = 0.55;
    var tarifaMinDia = 1.50;
    var tarifaMinNoche = 1.75;

    var costoKm, tarifaMin;

    if (hora === "dia") {
        costoKm = costoPorKmDia;
        tarifaMin = tarifaMinDia;
    } else {
        costoKm = costoPorKmNoche;
        tarifaMin = tarifaMinNoche;
    }

    var costoTotal = distancia * costoKm;
    if (costoTotal < tarifaMin) {
        costoTotal = tarifaMin;
    }

    costoTotal += costoArranque;

    return costoTotal;
}

var distancia = (prompt("Ingrese la distancia del viaje en kilómetros:"));
var hora = prompt("Ingrese la hora del día ('dia' o 'noche'):").toLowerCase();

var costo = calcularCostoViaje(distancia, hora);

alert("El costo total del viaje es: $" + costo.toFixed(2));
