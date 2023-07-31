#Escribe una función en Python llamada "obtener_datos_climaticos" que tome como 
#argumento el nombre de la ciudad en español y realice una solicitud a la API pública 
#de OpenWeatherMap para obtener
# //  los datos climáticos de todas las ciudades capitales de LATAM, en español.  // //
# El programa debe devolver un documento separado por puntos y comas de todas las capitales con datos como:
import requests



BASE_URL = "http://api.openweathermap.org/data/2.5/weather?"

CITY = input("Elige una capital de latinoamerica y agregale una coma sin espacios el codigo del pais: EJ: 'Montevideo,uy' \n")

def obtener_datos_climaticos(CITY):
    url = BASE_URL + "q=" + CITY + "&appid=" + KEY +"&units=metric&lang=es"
    res = requests.get(url)

    data = res.json()

    print(data)
    capital = data['name']
    pais = data['sys']['country']
    descripcion = data['weather'][0]['description']
    sensacion = data['main']['feels_like']
    presion = data['main']['pressure']
    humedad = data['main']['humidity']
    max = data['main']['temp_max']
    min = data['main']['temp_min']
    print("Ciudad: " + capital + ", país: " + pais + ", descripción del clima: " + descripcion + ", sensación térmica: " + str(sensacion) + ", presión: " + str(presion) + ", humedad: " + str(humedad) + ", temperatura mínima: " + str(min) + ", temperatura máxima: " + str(max))

obtener_datos_climaticos(CITY)

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
def obtener_datos_capitales_latam():

    datos_climaticos_capitales = []
    for capital in capitalesLatam:
        datos = obtener_datos_climaticos(capital)
obtener_datos_capitales_latam()
