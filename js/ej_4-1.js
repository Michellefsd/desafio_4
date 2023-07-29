// Ejercicio 1: Escribe una función llamada "buscar_valor" que tome como argumentos una lista de números y un valor objetivo. La función debe buscar el valor objetivo en la lista y devolver la posición (índice) de la primera aparición del valor. Si el valor no se encuentra en la lista, la función debe devolver -1.

const array = [3, 12, 25, 30, 101, 6, 76, 99, 102, 0, 16, 35];

const buscar_valor = function(number) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === number) {
            return i;
        }
    }
    return -1;
}

buscar_valor(101);
