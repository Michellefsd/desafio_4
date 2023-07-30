# Ejercicio 2: Escribe una función en Python llamada "obtener_datos_climaticos" que tome como argumento el nombre de la ciudad en español y realice una solicitud a la API pública de OpenWeatherMap para obtener 
# //  los datos climáticos de todas las ciudades capitales de LATAM, en español.  // // 
# El programa debe devolver un documento separado por puntos y comas de todas las capitales con datos como:
# •	nombre de la capital
# •	país
# •	descripción del clima 
# •	sensación térmica
# •	presión
# •	humedad
# •	temperatura mínima
# •	temperatura máxima. 
# Puedes encontrar la documentación de la API en https://openweathermap.org/api



import requests
# import key from '../js/ej_4-2.js';
# print key


# esto futuramente lo cambiaremos por un array list o tupple de las capitales de LATAM
city = input("Enter a City: \t")


url = "http://api.openweathermap.org/data/2.5/weather?q={city}&appid={key}&unit=metric".format(city)

res.requests.get(url)

data = res.json()

temp = data["main"]["temp"]
wind_speed = data["wind"]["speed"]

latitude = data["coord"]["lat"]
longitude = data["coord"]["lon"]

description = data["weather"][0]["description"]

print[temp]
print[wind_speed]
print[latitude]
print[longitude]


#pregunto a Google como ejecutar un programa de Python en VSCode#
#"Los dos atajos (Ctrl+Alt+F5 y Ctrl+Alt+Mayús+F5) permiten ejecutar el programa de Python que se esté editando. 
#El programa se ejecuta en la ventana de terminal PowerShell de Visual Studio Code".
#segui estos pasos para entender como habilitar que corra el programa de python en vscode
#https://learn.microsoft.com/en-us/training/modules/python-install-vscode/1-introduction