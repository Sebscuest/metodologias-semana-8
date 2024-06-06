'use strict';
/*let likesJavaScript = confirm("¿Te gusta JavaScript?");

// Muestra un mensaje basado en la respuesta del usuario
if (likesJavaScript) {
    alert("¡Genial! ¡JavaScript es muy divertido!");
} else {
    alert("¡Vaya! ¡Espero que encuentres un lenguaje de programación que te guste!");
}

// Declaración de variables
let edad = 20;
let tieneLicencia = true;

// Uso del operador AND (&&) para verificar ambas condiciones
if (edad >= 18 && tieneLicencia) {
    alert("Puedes conducir.");
} else {
    alert("No puedes conducir.");
}
// Inicialización de la variable de control
let contador = 0;
while (contador < 5) { // Bucle while con condición de salida
  alert(contador); // Muestra el valor actual del contador en una alerta
  contador++; // Incrementa el contador en 1 en cada iteración
}*/

let fruit = "apple"; // Definimos una variable llamada "fruit" y le asignamos el valor "apple"

switch (fruit) { // Comienza la declaración switch, la expresión evaluada es "fruit"
  case "banana": // Si "fruit" es igual a "banana"
    alert("Es una banana"); // Se muestra una alerta que dice "Es una banana"
    break; // Se sale del switch después de ejecutar este caso
  case "apple": // Si "fruit" es igual a "apple"
    alert("Es una manzana"); // Se muestra una alerta que dice "Es una manzana"
    break; // Se sale del switch después de ejecutar este caso
  default: // Si "fruit" no coincide con ningún caso anterior
    alert("Fruta desconocida"); // Se muestra una alerta que dice "Fruta desconocida"
}

// Declaración de función
function saludar(nombre) {
    return "Hola, " + nombre;                           // Devuelve un saludo concatenando el nombre recibido como argumento
  }
  alert(saludar("Sebastian"));                          // Muestra una alerta con el resultado de llamar a la función "saludar" con el nombre "sebastian"
  
  // Expresión de función
  let saludar = function(nombre) {
    return "Hola, " + nombre;                           // Devuelve un saludo concatenando el nombre recibido como argumento
  };
  alert(saludar("Sebastian"));                         // Muestra una alerta con el resultado de llamar a la función "saludar" con el nombre "sebastian"
  
  // Funciones de flecha
  let saludar = (nombre) => "Hola, " + nombre;                    // Define una función de flecha que devuelve un saludo concatenando el nombre recibido como argumento
  alert(saludar("Sebastian"));                           // Muestra una alerta con el resultado de llamar a la función "saludar" con el nombre "Sebastian"

  // Función para agregar un usuario
// Incluye comentarios que expliquen bloques de código complejos o importantes
function agregarUsuario(nombre) {
    if (currentUserCount >= CUESTIN_USERS) {
      alert("No se pueden agregar más usuarios.");
      return;
    }
  
    currentUserCount++;
    alert(saludarUsuario(nombre));
  }

  // Declaración de la función en una sola línea
const saludar = nombre => `Hola, ${nombre}`;

// Bucle para saludar a varios usuarios utilizando el operador ternario
[...'12345'].map(n => alert(saludar(`Usuario${n}`)));
  