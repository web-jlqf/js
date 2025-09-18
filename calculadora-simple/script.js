/* 
  Ejercicio: Implementa la lógica de cada operación.
  Sugeridos:
  - Lee A (#a) y B (#b) con parseFloat.
  - Valida (NaN, división por 0).
  - Escribe el resultado en #result.
  - (Opcional) Mensajes en #msg.
*/

function calcAdd(){
  // TODO: sumar A + B y mostrar en #result
  let a=document.getElementById("a").value;
  let b=document.getElementById("b").value;
  console.log("Suma "+a+" "+b)
}

function calcSub(){
  // TODO: restar A - B y mostrar en #result
  console.log("Resta")
}

function calcMul(){
  // TODO: multiplicar A * B y mostrar en #result
  console.log("Multiplicación")
}

function calcDiv(){
  // TODO: dividir A / B (validar B != 0) y mostrar en #result
  console.log("División")
}
