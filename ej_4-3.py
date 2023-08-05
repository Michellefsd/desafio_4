# importo requests para hacer api request
#Importo esta libreria para hacer requests  
#importa pip install requests en tu terminal
import requests
# importo os xa acceder a mi variable de entorno
import os

# accedo a mi variable de entorno
# puedes sustituir esta linea de codigo por esto para que te funcione
# api_key = "10971b499be61b351760e8d57f0e3a4d"
api_key = os.getenv("API_KEY")
# url base
BASE_URL = "http://api.openweathermap.org/data/2.5/weather?"
# usuario elige la ciudad de la quiere acceder a la informacion
CITY = input("De dónde quieres ver el clima? Escribe el nombre de la ciudad: \n")
# url completa
url = BASE_URL + "q=" + CITY + "&appid=" + str(api_key) +"&units=metric&lang=es"
# se hace la API request haciendo uso de la libreria importada requests
res = requests.get(url)
# modifico el formato de la info
data = res.json()


# accedo a las variables que necesito
ciudad = data['name']
temp = data['main']['temp']
min = data['main']['temp_min']
max = data['main']['temp_max']
descripcion = data['weather'][0]['description']

# muestro ésta informacion 
print("Ciudad: " + ciudad + ",\nTemperatura: " + str(temp) + "ºC,\nTemperatura Mínima: " + str(min) + "ºC,\nTemperatura Máxima: " + str(max) + "ºC, \nDescrición: " + descripcion + ".")