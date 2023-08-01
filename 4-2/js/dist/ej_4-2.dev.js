"use strict";

capitalesLatam = ["buenos aires", "la paz", "brasilia", "santiago de chile", "san jose,cr", "bogota", "habana", "quito", "san salvador", "guatemala", "Port-au-Prince", "tegucigalpa", "mexico,mx", "managua", "panama", "asuncion", "lima", "Santo Domingo", "montevideo", "caracas"];
var key = "10971b499be61b351760e8d57f0e3a4d"; //Funcion//

console.log("heloo");

var obtener_datos_climaticos = function obtener_datos_climaticos(capital) {
  var response;
  return regeneratorRuntime.async(function obtener_datos_climaticos$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(fetch("http://api.openweathermap.org/data/2.5/weather?q=".concat(capital, "&appid=").concat(key, "&units=metric&lang=es")).then(function (response) {
            return response.json();
          }).then(function (data) {
            console.log(data);
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
