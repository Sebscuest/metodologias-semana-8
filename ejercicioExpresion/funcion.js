// Definir una expresión de función para calcular la edad
let calcularEdad = function(añoNacimiento) {
    let añoActual = new Date().getFullYear();
    return añoActual - añoNacimiento;
  };
  let añoNacimiento = 2005;
  let edad = calcularEdad(añoNacimiento);
  
  alert(`Tu edad es: ${edad}`); // Salida: Tu edad es:19


  // Definir una expresión de función para mostrar la tabla de multiplicar
let mostrarTablaMultiplicar = function(numero) {
    alert(`Tabla de multiplicar del ${numero}:`);
    for (let i = 1; i <= 10; i++) {
      alert(`${numero} x ${i} = ${numero * i}`);
    }
  };
  
  // Uso de la función para mostrar la tabla de multiplicar del número 5
  let numeroIngresado = 7;
  mostrarTablaMultiplicar(numeroIngresado);
  
  
  let temperaturaCelsius = 10, temperaturaFahrenheit = (celsius) => (celsius * 9/5) + 32; 
  alert(temperaturaCelsius + " grados Celsius son " + temperaturaFahrenheit(temperaturaCelsius) + " grados Fahrenheit.");
