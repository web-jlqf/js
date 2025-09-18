// Obtenemos referencias al display y al contenedor de teclas
const display = document.getElementById("display");
const keys = document.querySelector(".keys");

// Variable para guardar la expresión
let expression = "";

/**
 * Maneja el click en cualquier botón de la calculadora.
 * @param {string} key - El valor del botón (número, operador, etc.)
 */
function handleKey(key) {
  switch (key) {
    case "C":
      console.log("Presionaste C (limpiar)");
      // TODO: limpiar la expresión y resetear el display
      break;

    case "⌫":
      console.log("Presionaste ⌫ (borrar último carácter)");
      // TODO: borrar el último carácter de la expresión
      break;

    case "=":
      console.log("Presionaste = (evaluar)");
      // TODO: evaluar la expresión
      console.log(eval("2 + 3 * 4"));
      break;

    default:
      console.log("Presionaste: " + key);
      // TODO: concatenar el valor (número u operador) a la expresión
      break;
  }

  // TODO: actualizar el display con la expresión actual
}

/**
 * Inicializa los eventos de la calculadora.
 */
function initCalculator() {
  keys.addEventListener("click", (event) => {
    if (event.target.matches("button")) {
      const key = event.target.dataset.key;
      handleKey(key);
    }
  });
}

// Inicializar al cargar
initCalculator();
