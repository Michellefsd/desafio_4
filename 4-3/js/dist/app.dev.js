"use strict";

// variables
// en resultado coloco la info
// el formulario me muestra cuando iniciar las acciones
// y el terminoBusqueda es el valor que tomo para hacer la API request
var resultado = document.querySelector('#resultado');
var formulario = document.querySelector('#formulario');
var terminoBusqueda = document.querySelector('#termino').value; // cuando cargue window escucha por el submit

window.onload = function () {
  formulario.addEventListener('submit', validarFormulario);
}; // al submit revisamos que tenga algun contenido
// si esta vacio mostrara un mensaje
// si tieneuna ciudad mostrara la ciudad


function validarFormulario(e) {
  e.preventDefault(); // if(terminoBusqueda === '') {
  //     imprimirAlerta('Agrega una capital');
  //     return;
  // }

  buscarCapital();
} // definimos como se mostrara la alerta


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
} // hacemos la API request


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
} // mostramos el resultado en pantalla


function mostrarCapital(result) {
  var ciudad = result['name'];
  var temp = result['main']['temp'];
  var min = result['main']['temp_min'];
  var max = result['main']['temp_max'];
  var descripcion = result['weather'][0]['description'];
  resultado.innerHTML += "\n    <section class=\"flex-col justify-center mb-1 rounded bg-indigo-100\">\n        <h2 class=\"text-center p-3 uppercase\">Clima en ".concat(ciudad, "</h2>\n        <p class=\"text-center p-1\" >Temperatura Actual: ").concat(temp, "\xB0</p>\n        <p class=\"text-center p-1\" >Temperatura M\xEDnima: ").concat(max, "\xB0</p>\n        <p class=\"text-center p-1 pb-3\" >Temperatura M\xE1xima: ").concat(min, "\xB0</p>\n        <p class=\"text-center p-1 pb-3\" >Temperatura M\xE1xima: ").concat(descripcion, "</p>\n    </section>\n    ");
}
//# sourceMappingURL=app.dev.js.map
