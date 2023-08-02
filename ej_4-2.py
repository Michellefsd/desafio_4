#Escribe una función en Python llamada "obtener_datos_climaticos" que tome como 
#argumento el nombre de la ciudad en español y realice una solicitud a la API pública 
#de OpenWeatherMap para obtener
# //  los datos climáticos de todas las ciudades capitales de LATAM, en español.  // //
# El programa debe devolver un documento separado por puntos y comas de todas las capitales con datos como:

#Importo esta libreria para hacer requests
import requests
# importo os para acceder a mi variable de entorno
import os

# base de la url
BASE_URL = "http://api.openweathermap.org/data/2.5/weather?"

# pregunta al usuario que funcion desea 
userWants = input("Que deseas? \n 1)Obtener la información de todas las capitales \n 2) de una en especifico \n Escribe 1 o 2 para tu respuesta\n")
# las capitales de LATAM
capitalesLatam = [
    "buenos aires", 
    "la paz", 
    "brasilia", 
    "santiago de chile",
    "san jose,cr", 
    "bogota", 
    "habana", 
    "quito",  
    "san salvador",
    "guatemala", 
    "Port-au-Prince", 
    "tegucigalpa", 
    "mexico,mx", 
    "managua", 
    "panama", 
    "asuncion", 
    "lima", 
    "Santo Domingo",
    "montevideo", 
    "caracas"  
]

# funcion pedida por la letra que tomará como parámetro la ciudad de la que desea obtener 
# la informacion
def obtener_datos_climaticos_de_solo_una_ciudad(CITY):
    # aqui accedo a mi variable de entorno
    api_key = os.getenv("API_KEY")
    # construccion de la url completa con la base url la api key la city,
    # las medidas usadas en latinoamerica y la traducción al idioma español
    url = BASE_URL + "q=" + CITY + "&appid=" + str(api_key) +"&units=metric&lang=es"
    # aqui realizo la API request
    res = requests.get(url)
    # Aqui accedo a la información
    data = res.json()

    # tomo las variables que necesito para cumplir los requisitos del ejercicio
    capital = data['name']
    pais = data['sys']['country']
    descripcion = data['weather'][0]['description']
    sensacion = data['main']['feels_like']
    presion = data['main']['pressure']
    humedad = data['main']['humidity']
    max = data['main']['temp_max']
    min = data['main']['temp_min']

    # planeo usar este dato para excluir las ciudades que no sean de latinoamerica
    id = data['id']
    
    # aqui expongo la información
    print("Ciudad: " + capital + ", país: " + pais + ", descripción del clima: " + descripcion + ", sensación térmica: " + str(sensacion) + "°, presión: " + str(presion) + "hPa, humedad: " + str(humedad) + "%, temperatura mínima: " + str(min) + "°, temperatura máxima: " + str(max) + "°. \n")

 
def obtener_datos_capitales():
 
    datos_climaticos_capitales = []
    for capital in capitalesLatam:
        datos = obtener_datos_climaticos_de_solo_una_ciudad(capital)

if userWants == "2" :
    CITY = input("Elige una capital de latinoamerica: EJ: 'Montevideo' \n")
    obtener_datos_climaticos_de_solo_una_ciudad(CITY)
elif userWants == "1":
    obtener_datos_capitales()
else: "Sorry Try Again"

