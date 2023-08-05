# mi lista de prueba
myList = [0, 1, 6, 19, 25.5, 34, 36, 39, 52, 65, 73, 81]

# la funcion que toma como parametros un array y un numero
def buscar_valor(array, number):
    # iteracion sobre el array
    for i in range(len(array)):
        # identificacion de la posicion del numero en el array 
        if array[i] == number:
            return i
    # en caso de que no haya ningun numero que correponda en la lista
    return -1
        
# valores entregados por el usuario:
# nombre de la lista
nombre_lista = input("Cuál es el nombre de la lista?\n")
# quise agregar la posibilidad de float
tiponumero = input("Vas a poner un numero entero o con valores decimales?\n Elige 1 para entero y 2 para valores decimales\n")
if tiponumero == "1":
    numero = int(input("Cuál es el número al que deseas acceder en ella?\n"))
elif tiponumero == "2":
    numero = float(input("Cuál es el número al que deseas acceder en ella?\n"))

####  pedazo de codigo generado por ChatGPT para solucionar el error que era porque no veia lo 
# escrito por el usuario como una variable sino como un string
# convertir el nombre de la lista a una variable usando globals()
# vulnerable a codigo malicioso Ojo
lista = globals()[nombre_lista]
####  fin del codigo generado por chatGPT

# usamos los valores puestos por usuario como parametros
indice = buscar_valor(lista, numero)

print(f"{indice}")