"use strict";

// if(process.env.NODE_ENV !== 'production'){
//     require('dotenv').config();
// }
// const key = process.env.API_KEY;
// const key = "10971b499be61b351760e8d57f0e3a4d"
var capitalesLatam = ["buenos aires", "la paz", "brasilia", "santiago de chile", "san jose,cr", "bogota", "habana", "quito", "san salvador", "guatemala", "Port-au-Prince", "tegucigalpa", "mexico,mx", "managua", "panama", "asuncion", "lima", "Santo Domingo", "montevideo", "caracas"]; //Funcion//

var obtener_datos_climaticos = function obtener_datos_climaticos(capital) {
  var capitales, datos_climaticos_capitales, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, ciudad, response, csvContent, headers, encodedUri, link;

  return regeneratorRuntime.async(function obtener_datos_climaticos$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          ////    // pedazo de codigo generado por chatGPT      /////////
          capitales = capital ? [capital] : capitalesLatam;
          datos_climaticos_capitales = [];
          _iteratorNormalCompletion = true;
          _didIteratorError = false;
          _iteratorError = undefined;
          _context.prev = 5;
          _iterator = capitales[Symbol.iterator]();

        case 7:
          if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
            _context.next = 15;
            break;
          }

          ciudad = _step.value;
          _context.next = 11;
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
            console.log("Ciudad: " + capital + ", país: " + pais + ", descripción del clima: " + descripcion + ", sensación térmica: " + sensacion + "°, presión: " + presion + "hPa, humedad: " + humedad + "%, temperatura mínima: " + min + "°, temperatura máxima: " + max + "°.");
            datos_climaticos_capitales.push({
              "Capital": capital,
              "Pais": pais,
              "Descripcion": descripcion,
              "Sensacion": sensacion,
              "Presion": presion,
              "Humedad": humedad,
              "Max": max,
              "Min": min
            });
          }));

        case 11:
          response = _context.sent;

        case 12:
          _iteratorNormalCompletion = true;
          _context.next = 7;
          break;

        case 15:
          _context.next = 21;
          break;

        case 17:
          _context.prev = 17;
          _context.t0 = _context["catch"](5);
          _didIteratorError = true;
          _iteratorError = _context.t0;

        case 21:
          _context.prev = 21;
          _context.prev = 22;

          if (!_iteratorNormalCompletion && _iterator["return"] != null) {
            _iterator["return"]();
          }

        case 24:
          _context.prev = 24;

          if (!_didIteratorError) {
            _context.next = 27;
            break;
          }

          throw _iteratorError;

        case 27:
          return _context.finish(24);

        case 28:
          return _context.finish(21);

        case 29:
          // con este if hago que solo me arme el documento 
          // cuando quiere la lista completa de capitales de latinoamerica
          if (capitales == capitalesLatam) {
            //// Pedazo de código generado por chatGPT
            //// Genero el contenido  de CSV 
            csvContent = "data:text/csv;charset=utf-8,";
            headers = ["Capital", "Pais", "Descripcion", "Sensacion", "Presion", "Humedad", "Max", "Min"];
            csvContent += headers.join(";") + "\n";
            datos_climaticos_capitales.forEach(function (datos) {
              var values = headers.map(function (header) {
                return datos[header];
              });
              csvContent += values.join(";") + "\n";
            }); // creo un link y genero la descarga

            encodedUri = encodeURI(csvContent);
            link = document.createElement("a");
            link.setAttribute("href", encodedUri);
            link.setAttribute("download", "datos_climaticos_latam.csv");
            document.body.appendChild(link); // Required for Firefox

            link.click(); //// fin del código generado por ChatGPT
          }

        case 30:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[5, 17, 21, 29], [22,, 24, 28]]);
};
//# sourceMappingURL=ej_4-2.dev.js.map
