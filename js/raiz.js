
  "use strict";
var formulario = document.getElementById("formulario"),
    salida = document.getElementById("salidaNumero");
    formulario.addEventListener("submit", calcula, false);

function calcula(){
  salida.value = "";
 try {
  var n = formulario["numero"].value;
  if(n===0){
    salida.value=0
  }else{
    validar(!isNaN(n), "ingresa un numero");
  
  validar(n > -1, "El valor ingresado no puede ser menor que 0.");
  const resultado = procesa(n);
  
  }

  
} catch (e) {
  console.log(e.message);
}

}

function procesa(n) {
  salida.value = Math.sqrt(n);
}

function validar(cond, mensaje) {
  if (!cond) {
  throw new Error(salida.value=mensaje);
  }
}