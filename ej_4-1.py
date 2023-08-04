# esta me habia funcionado con un codigo bien simple pero en una prueba vi que daba error 
# y tuve que rehacerlo


# mi lista de prueba
myList = [0, 1, 6, 19, 25.5, 34, 36, 39, 52, 65, 73, 81]

# la funcion
def buscar_valor(array, number):

    for i in range(len(array)):
        if array[i] == number:
            return i
    return -1

# valores entregados por el usuario
lista = input("Cuál es el nombre de la lista?\n")
numero = input("Cuál es el número al que deseas acceder en ella?\n")

# usamos los valores puestos por usuario como parametros
indice = buscar_valor(lista, numero)

print(f"{indice}")