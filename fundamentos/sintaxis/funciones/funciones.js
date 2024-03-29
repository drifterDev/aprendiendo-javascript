// Autor: Mateo Álvarez Murillo
// Fecha de creación: 2023

// Este código se proporciona bajo la Licencia MIT.
// Para más información, consulta el archivo LICENSE en la raíz del repositorio.

"use strict";

// Funciones

function alerta() {
  document.write("Hola :)<br/>");
}

for (let i = 0; i < 10; i++) {
  alerta();
}

// Parametros opcionales
function suma(n1, n2, mostrar = true) {
  if (mostrar) {
    return n1 + n2;
  }
  return "Hola";
}

for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 5; j++) {
    if (i % 2 == 0) {
      document.write("Suma = " + suma(i, j) + "<br/>");
    } else {
      document.write("Suma = " + suma(i, j, false) + "<br/>");
    }
  }
}

// Funciones flecha
const pais = (nombre) => console.log("Nací en " + nombre);

pais("Colombia");
