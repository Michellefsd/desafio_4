"use strict";

// variables
var cityName;
var stateCode;
var countryCode;
var limit;
var key = "d914d44ae03d7d2e6027704ad79b7714";
var capitalesLatam = ["Buenos Aires", "La Paz", "Brasília", "Santiago de Chile", "Bogotá", "San José", "Havana", "Quito", "San Salvador", "Guatemala", "Port-au-Prince", "Tegucigalpa", "México DF", "Managua", "Panamá", "Asunción", "Lima", "Santo Domingo", "Montevideo", "Caracas"]; //Funcion//

var obtener_datos_climaticos = function obtener_datos_climaticos(cityName) {
  var response, data;
  return regeneratorRuntime.async(function obtener_datos_climaticos$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(fetch("http://api.openweathermap.org/geo/1.0/direct?q=".concat(cityName, ",").concat(stateCode, ",").concat(countryCode, "&appid=").concat(key)));

        case 2:
          response = _context.sent;
          _context.next = 5;
          return regeneratorRuntime.awrap(response.json());

        case 5:
          data = _context.sent;
          return _context.abrupt("return", data);

        case 7:
        case "end":
          return _context.stop();
      }
    }
  });
};
//# sourceMappingURL=ej_4-2.dev.js.map
