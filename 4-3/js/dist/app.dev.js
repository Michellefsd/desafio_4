"use strict";

var resultado = document.querySelector('#resultado');
var formulario = document.querySelector('#formulario');

window.onload = function () {
  formulario.addEventListener('submit', validarFormulario);
};

function validarFormulario(e) {
  e.preventDefault();
  var terminoBusqueda = document.querySelector('#termino').value;

  if (terminoBusqueda === '') {
    imprimirAlerta('Agrega una capital');
    return;
  }

  buscarCapital();
}

function imprimirAlerta(msj) {
  var existeAlerta = document.querySelector('.bg-red-500');

  if (!existeAlerta) {
    var alerta = document.createElement('P');
    alerta.classList.add('mx-auto', 'text-center', 'font-bold', 'uppercase', 'rounded', 'bg-red-500', 'p-3', 'mt-4', 'max-w-lg', 'text-white', 'border-lg');
    alerta.textContent = msj;
    resultado.appendChild(alerta);
    setTimeout(function () {
      alerta.remove();
    }, 3000);
  }
}

function buscarCapital() {
  var capital = document.querySelector('#termino').value;
  var key = '10971b499be61b351760e8d57f0e3a4d';
  var url = "http://api.openweathermap.org/data/2.5/weather?q=".concat(capital, "&appid=").concat(key, "&units=metric&lang=es");
  fetch(url).then(function (respuesta) {
    return respuesta.json();
  }).then(function (result) {
    console.log(result);
    mostrarCapital(result);
  });
}

function mostrarCapital(result) {
  var ciudad = result['name'];
  var temp = result['main']['temp'];
  var min = result['main']['temp_min'];
  var max = result['main']['temp_max'];
  resultado.innerHTML += "\n    <section class=\"flex-col justify-center  rounded bg-indigo-100\">\n        <h2 class=\"text-center p-3 uppercase\">Clima en ".concat(ciudad, "</h2>\n        <p class=\"text-center p-1\" >Temperatura Actual: ").concat(temp, "\xB0</p>\n        <p class=\"text-center p-1\" >Temperatura M\xEDnima: ").concat(max, "\xB0</p>\n        <p class=\"text-center p-1 pb-3\" >Temperatura M\xE1xima: ").concat(min, "\xB0</p>\n    </section>\n    ");
}
//# sourceMappingURL=app.dev.js.map
