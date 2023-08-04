"use strict";

// el numero que coloque como parametro dentro de la funcion retornara -1 si no esta en el array 
// y si esta en el array el numero de index que le corresponde dentro del mismo
// creo la lista de prueba
var miLista = [3, 12, 25, 30, 101, 6, 76, 99, 102, 0, 16, 35]; // Hago la fx con los parametros propuestos

var buscar_valor = function buscar_valor(array, number) {
  // iterar sobre el array
  for (var i = 0; i < array.length; i++) {
    // identificar numero
    if (array[i] === number) {
      return i;
    }
  }

  return -1;
};
//# sourceMappingURL=ej_4-1.dev.js.map
