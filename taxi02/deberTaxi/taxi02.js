'use strict';

let dia = confirm('¿Es de día?');
let totalKms = prompt('Ingrese el Kilometraje');
let precioPorKm = 0.29; // Costo por kilómetro durante el día o la noche
let arranque = 0.55;
let minimoDia = 1.5; // Tarifa mínima durante el día
let minimoNoche = 1.75; // Tarifa mínima durante la noche

let valor = precioPorKm * totalKms + arranque;
let valorTotalNoche = (minimoDia + 0.25)

if (dia) {
  if (valor < minimoDia) {
    alert(`El costo del servicio es de día es $${minimoDia}`);
  } else {
    alert(`El costo del servicio es de día es $${valor}`);
  }
} else {
  if (valor < minimoNoche) {
    alert(`El costo del servicio es de noche es $${minimoNoche}`);
  } else {
    valorTotalNoche += valor;
    alert(`El costo del servicio es de noche es $${valorTotalNoche.toFixed(2)}`);
  }
}
