import requests
import os

api_key = os.getenv("API_KEY")
BASE_URL = "http://api.openweathermap.org/data/2.5/weather?"
CITY = input("De dónde quieres ver el clima? Escribe el nombre de la ciudad: \n")
url = BASE_URL + "q=" + CITY + "&appid=" + str(api_key) +"&units=metric&lang=es"
res = requests.get(url)
data = res.json()

ciudad = data['name']
temp = data['main']['temp']
min = data['main']['temp_min']
max = data['main']['temp_max']

print("Ciudad: " + ciudad + ",\n Temperatura: " + str(temp) + "º,\n Temperatura mínima: " + str(min) + "º,\n temperatura áxima: " + str(max) + "º.")