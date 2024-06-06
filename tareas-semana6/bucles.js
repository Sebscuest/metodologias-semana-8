'use strcit';

function cajero() {
    let pin;
    let key = 777;
    let sms = "Su tarjeta ha sido bloqueada por su seguridad"
    let i = 0;
  
  
  do {
  pin = prompt("Ingresa tu clave ", )
  
   i++;
  
   if (i == 3) {
    alert(sms)
    return;
   } 
  
     1
  
  } while (pin != key );
  alert("Clave correcta")
  }
  