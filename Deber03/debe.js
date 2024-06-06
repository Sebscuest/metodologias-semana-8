'use strcit'
/*1.Escribe un programa que solicite al usuario ingresar su edad y luego imprima "Eres mayor de edad" 
si la edad ingresada es igual o mayor a 18, de lo contrario imprime "Eres menor de edad".*/

let edad = prompt("Ingrese la edad");

if (edad >=18){
    alert("Eres mayor de edad");
}else{
    alert("Eres menor de edad")
}

/*2.Crea un programa que pida al usuario ingresar dos números 
y luego determine e imprima cuál de los dos números es mayor.*/

let numero1 = prompt("Ingrese el primer valor");
let numero2= prompt("Ingrese el segundo valor");

if (numero1 > numero2) {
    alert("El primer número (" + numero1 + ") es mayor que el segundo número (" + numero2 + ")");
} else if (numero1 < numero2) {
    alert("El segundo número (" + numero2 + ") es mayor que el primer número (" + numero1 + ")");
} else {
    alert("Ambos números son iguales.");
}

/*3.Desarrolla un programa que pida al usuario ingresar un número 
y determine si es par o impar. Imprime el resultado correspondiente.
let numero = prompt("Ingrese un número: ");*/
    
    if (numero % 2 === 0) {
        alert("El número ingresado (" + numero + ") es par.");
    } else {
        alert("El número ingresado (" + numero + ") es impar.");
    }

/*4.Crea un programa que pida al usuario ingresar un número y determine si es 
divisible por 5. Imprime "Es divisible por 5" o "No es divisible por 5" según corresponda.*/

let numero =prompt("Ingrese un número: ");

    if (numero % 5 === 0) {
        alert("El número ingresado (" + numero + ") es divisible por 5.");
    } else {
        alert("El número ingresado (" + numero + ") no es divisible por 5.");
    }
