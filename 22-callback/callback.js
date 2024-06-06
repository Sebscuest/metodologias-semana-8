'use strict';
//Declaracion de funsion 
function validateField(isVisible, show, hide){
    if(isVisible){
        show();
    }else{
        hide();
    }
}
//Expresion de funcion 
let showField = function(){
    alert ('Campo Activo');
}

//funcion flecha 
let hideField = () => alert('Campo Oculto');


validateField (true, showField, hideField);//showField y hideField son callbacks funtion 

