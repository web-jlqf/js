// Referencias al formulario
const form = document.getElementById("product-form");
const inputName = document.getElementById("name");
const inputPrice = document.getElementById("price");
const inputQty = document.getElementById("qty");


const msg = document.getElementById("msg");

const table = document.getElementById("products-table");
const tbody = table.querySelector("tbody");
const grandTotalEl = document.getElementById("grand-total");

// Estado
let grandTotal = 0;

// Utilidades
function formatMoney(n) {
  const value = Number(n) || 0;
  return `$${value.toFixed(2)}`;
}

function updateGrandTotal(delta) {
  grandTotal += delta;
  grandTotalEl.textContent = formatMoney(grandTotal);
}

// Render de una fila
function createRow({ name, price, qty }) {

  // Se crea el renglón
  const tr = document.createElement("tr");

  //Se crean las columnas
  const tdName = document.createElement("td");
  const tdPrice = document.createElement("td");
  const tdQty = document.createElement("td");
  const tdTotal = document.createElement("td");
  const tdActions = document.createElement("td");

  //Se calcula el total
  const total = price * qty;

  //Se rellena el renglón
  tdName.textContent = name;
  tdPrice.textContent = formatMoney(price);
  tdQty.textContent = qty.toString();
  tdTotal.textContent = formatMoney(total);

  // Botón Eliminar
  const btnDel = document.createElement("button");
  btnDel.type = "button";
  btnDel.className = "btn-del";
  btnDel.textContent = "Eliminar";
  btnDel.setAttribute("data-total", total.toString()); // para restar fácilmente
  tdActions.appendChild(btnDel);

  tr.appendChild(tdName);
  tr.appendChild(tdPrice);
  tr.appendChild(tdQty);
  tr.appendChild(tdTotal);
  tr.appendChild(tdActions);

  return tr;
}

// Envío del formulario
form.addEventListener("submit", (e) => {
  e.preventDefault();
  msg.textContent = "";

  const name = inputName.value.trim();
  const price = parseFloat(inputPrice.value);
  const qty = parseInt(inputQty.value, 10);

  // Validación básica
  if (!name) {
    msg.textContent = "El nombre es obligatorio.";
    inputName.focus();
    return;
  }
  if (Number.isNaN(price) || price < 0) {
    msg.textContent = "El precio debe ser un número válido (≥ 0).";
    inputPrice.focus();
    return;
  }
  if (!Number.isInteger(qty) || qty < 1) {
    msg.textContent = "La cantidad debe ser un entero (≥ 1).";
    inputQty.focus();
    return;
  }

  const row = createRow({ name, price, qty });
  tbody.appendChild(row);

  updateGrandTotal(price * qty);

  form.reset();
  inputName.focus();
});

// Delegación: eliminar filas
tbody.addEventListener("click", (e) => {
  //Se busca si el elemento sobre el click  (e.target) es el botón
  const btn = e.target.closest(".btn-del");
  if (!btn) return;
  //Se busca el tr asociado al botón
  const tr = btn.closest("tr");
  //Se obtiene el total de ese producto
  const total = parseFloat(btn.getAttribute("data-total")) || 0;

  // Restar del gran total y eliminar fila
  updateGrandTotal(-total);
  tr.remove();
});
