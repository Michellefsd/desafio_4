"use strict";

var capitalesLatam = ["buenos aires", "la paz", "brasilia", "santiago de chile", "san jose,cr", "bogota", "habana", "quito", "san salvador", "guatemala", "Port-au-Prince", "tegucigalpa", "mexico,mx", "managua", "panama", "asuncion", "lima", "Santo Domingo", "montevideo", "caracas"]; //Funcion//

var capital = 'Santo Domingo';

var obtener_datos_climaticos = function obtener_datos_climaticos() {
  var response;
  return regeneratorRuntime.async(function obtener_datos_climaticos$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(fetch("http://api.openweathermap.org/data/2.5/weather?q=".concat(capital, "&appid=").concat(key, "&units=metric&lang=es")).then(function (response) {
            return response.json();
          }).then(function (data) {
            var capital = data['name'];
            var pais = data['sys']['country'];
            var descripcion = data['weather'][0]['description'];
            var sensacion = data['main']['feels_like'];
            var presion = data['main']['pressure'];
            var humedad = data['main']['humidity'];
            var max = data['main']['temp_max'];
            var min = data['main']['temp_min'];
            console.log("Ciudad: " + capital + ", país: " + pais + ", descripción del clima: " + descripcion + ", sensación térmica: " + sensacion + ", presión: " + presion + ", humedad: " + humedad + ", temperatura mínima: " + min + ", temperatura máxima: " + max + ".");
          }));

        case 2:
          response = _context.sent;

        case 3:
        case "end":
          return _context.stop();
      }
    }
  });
};
//# sourceMappingURL=ej_4-2.dev.js.map
