'use strict';

let celular = {
    modelo: "Infinix i30 ",
    color: "Negro",
    tipoCarga: "usb C",
    añoFabricacion: 2020,
    fabrica: {
        direccion: 'Manuel vega', 
        numeroLocal:'30'
    }
}
//Para acceder a las propiedades del objeto es con un punto (.)
alert('El modelo es ' + celular.modelo);
alert('El color es ' + celular.color);
alert('El tipo de carga  es ' + celular.tipoCarga);
alert('El a es  año Fabricacion es ' + celular.añoFabricacion + 'El local esta ubicado en ' + celular.fabrica.direccion);