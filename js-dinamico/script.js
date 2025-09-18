const input = document.getElementById("input-texto");
const btnAgregar = document.getElementById("btn-agregar");
const lista = document.getElementById("lista");

// Al hacer clic en "Agregar"
btnAgregar.addEventListener("click", () => {
  const texto = input.value.trim();
  if (!texto) return;

  // Crear elemento <li>
  const li = document.createElement("li");
  li.textContent = texto;

  // Botón eliminar
  const btnEliminar = document.createElement("button");
  btnEliminar.textContent = "Eliminar";
  btnEliminar.className = "btn-eliminar";

  // Evento eliminar
  btnEliminar.addEventListener("click", () => {
    li.remove();
  });

  li.appendChild(btnEliminar);
  lista.appendChild(li);

  input.value = "";
  input.focus();
});
