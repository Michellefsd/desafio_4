def buscar_valor(array, number):
    for i in range(len(array)):
        if array[i] == int|float(number):
            return i
        else:
            return -1
        
list = [0, 1, 6, 19, 25, 34, 36, 39, 52, 65, 73, 81]

buscar_valor(list, 19)
#funciona :)