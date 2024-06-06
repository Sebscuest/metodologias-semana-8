'use strict';

/*//Forma mas comun.
function sum(a,b){
    return a + b ;
}

//Expresion de funcion 
let sumExp = function (a,b){
    return a + b ;
} 

//flecha
let sumFlecha = (a,b) => a + b ;
//llamar a la funcion o invocar 

let result = sumExp(3,4);
alert(result);
*/


let año = Number(prompt("Ingrese su año de nacimiento"));
let calcularFechaNacimento = function(año){
    return 2024-año;
}
alert('Su edad actual es de ' + calcularFechaNacimento(año)+ ' años');

let temperaturaCelsius = 10, temperaturaFahrenheit = (celsius) => (celsius * 9/5) + 32; alert(temperaturaCelsius + " grados Celsius son " + temperaturaFahrenheit(temperaturaCelsius) + " grados Fahrenheit.");
