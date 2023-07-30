"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
// variables
var cityName;
var stateCode;
var countryCode;
var limit; //Funcion//

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

var _default = key;
exports["default"] = _default;
//# sourceMappingURL=ej_4-2.dev.js.map
