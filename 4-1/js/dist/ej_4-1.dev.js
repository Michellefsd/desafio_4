"use strict";

// Ejercicio 1: Escribe una función llamada "buscar_valor" que tome como argumentos una lista de números y un valor objetivo. La función debe buscar el valor objetivo en la lista y devolver la posición (índice) de la primera aparición del valor. Si el valor no se encuentra en la lista, la función debe devolver -1.
// para usar esta funcion descomente el codigo en el index.html abrala en su navegador y en la consola 
// escriba buscar_valor(numero)
// el numero que coloque como parametro dentro de la funcion retornara -1 si no esta en el array 
// y si esta en el array el numero de index que le corresponde dentro del mismo
var miLista = [3, 12, 25, 30, 101, 6, 76, 99, 102, 0, 16, 35];

var buscar_valor = function buscar_valor(array, number) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === number) {
      return i;
    }
  }

  return -1;
};

buscar_valor(101);
//# sourceMappingURL=ej_4-1.dev.js.map
