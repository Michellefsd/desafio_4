"use strict";

var key = "10971b499be61b351760e8d57f0e3a4d"; //Funcion//

var obtener_datos_climaticos = function obtener_datos_climaticos(capital) {
  var capitales, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, ciudad, response;

  return regeneratorRuntime.async(function obtener_datos_climaticos$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          /////////     // pedazo de codigo generado por chatGPT///////////////////////
          capitales = capital ? [capital] : capitalesLatam;
          _iteratorNormalCompletion = true;
          _didIteratorError = false;
          _iteratorError = undefined;
          _context.prev = 4;
          _iterator = capitales[Symbol.iterator]();

        case 6:
          if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
            _context.next = 14;
            break;
          }

          ciudad = _step.value;
          _context.next = 10;
          return regeneratorRuntime.awrap(fetch("http://api.openweathermap.org/data/2.5/weather?q=".concat(ciudad, "&appid=").concat(key, "&units=metric&lang=es")).then(function (response) {
            return response.json();
          }).then(function (data) {
            console.log(data);
            var capital = data['name'];
            var pais = data['sys']['country'];
            var descripcion = data['weather'][0]['description'];
            var sensacion = data['main']['feels_like'];
            var presion = data['main']['pressure'];
            var humedad = data['main']['humidity'];
            var max = data['main']['temp_max'];
            var min = data['main']['temp_min'];
            var id = data['id'];
            console.log(id);
            console.log("Ciudad: " + capital + ", país: " + pais + ", descripción del clima: " + descripcion + ", sensación térmica: " + sensacion + ", presión: " + presion + ", humedad: " + humedad + ", temperatura mínima: " + min + ", temperatura máxima: " + max + ".");
          }));

        case 10:
          response = _context.sent;

        case 11:
          _iteratorNormalCompletion = true;
          _context.next = 6;
          break;

        case 14:
          _context.next = 20;
          break;

        case 16:
          _context.prev = 16;
          _context.t0 = _context["catch"](4);
          _didIteratorError = true;
          _iteratorError = _context.t0;

        case 20:
          _context.prev = 20;
          _context.prev = 21;

          if (!_iteratorNormalCompletion && _iterator["return"] != null) {
            _iterator["return"]();
          }

        case 23:
          _context.prev = 23;

          if (!_didIteratorError) {
            _context.next = 26;
            break;
          }

          throw _iteratorError;

        case 26:
          return _context.finish(23);

        case 27:
          return _context.finish(20);

        case 28:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[4, 16, 20, 28], [21,, 23, 27]]);
};

var capitalesLatam = ["buenos aires", "la paz", "brasilia", "santiago de chile", "san jose,cr", "bogota", "habana", "quito", "san salvador", "guatemala", "Port-au-Prince", "tegucigalpa", "mexico,mx", "managua", "panama", "asuncion", "lima", "Santo Domingo", "montevideo", "caracas"];
//# sourceMappingURL=ej_4-2.dev.js.map
