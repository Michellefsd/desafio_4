#Escribe una función en Python llamada "obtener_datos_climaticos" que tome como
#argumento el nombre de la ciudad en español y realice una solicitud a la API pública
#de OpenWeatherMap para obtener
# //  los datos climáticos de todas las ciudades capitales de LATAM, en español.  // //
# El programa debe devolver un documento separado por puntos y comas de todas las capitales con datos como:

#Importo esta libreria para hacer requests  
#importa pip install requests en tu terminal
# importo os para acceder a mi variable de entorno  
# importo csv
import requests
import os
import csv

# base de la url
BASE_URL = "http://api.openweathermap.org/data/2.5/weather?"

# pregunta al usuario que funcion desea
userWants = input("Que deseas? \n 1)Obtener la información de todas las capitales de LATAM \n 2) de una ciudad en específico \n Escribe 1 o 2 para tu respuesta\n")
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
    # Puedes obtener una key en esta pagina:# 
    #https://home.openweathermap.org/users/sign_up 
    #o puedes sustituir el codigo de la api_key por este:
    #api_key = "10971b499be61b351760e8d57f0e3a4d"
    api_key = os.getenv("API_KEY")

    # construccion de la url completa con la base url la api key la city,
    # las medidas usadas en latinoamerica y la traducción al idioma español
    url = BASE_URL + "q=" + CITY + "&appid=" + str(api_key) +"&units=metric&lang=es"
   
    # aqui realizo la API request
    res = requests.get(url)
    
    # Aqui accedo a la información
    data = res.json()

    # tomo las variables que necesito para cumplir los requisitos del ejercicio
    ciudad = data['name']
    pais = data['sys']['country']
    descripcion = data['weather'][0]['description']
    sensacion = data['main']['feels_like']
    presion = data['main']['pressure']
    humedad = data['main']['humidity']
    max = data['main']['temp_max']
    min = data['main']['temp_min']
    

    # aqui expongo la información
    print("Ciudad: " + ciudad + ", país: " + pais + ", descripción del clima: " + descripcion + ", sensación térmica: " + str(sensacion) + "°, presión: " + str(presion) + "hPa, humedad: " + str(humedad) + "%, temperatura mínima: " + str(min) + "°, temperatura máxima: " + str(max) + "°. \n")

#    devuelvo un dictionary
    return {
        "Capital": ciudad,
        "País": pais,
        "Descripción": descripcion,
        "Sensación": str(sensacion),
        "Presión": str(presion),
        "Humedad": str(humedad),
        "Máx": str(max),
        "Mín": str(min),
    }

def obtener_datos_climaticos():
#### datos_climaticos_capitales fue sugerido por chatGPT
    datos_climaticos_capitales = []
    for capital in capitalesLatam:
        datos = obtener_datos_climaticos_de_solo_una_ciudad(capital)
        datos_climaticos_capitales.append(datos)

    # creo abro y cierro al finalizar el documento.csv
    # newline y encoding sugerido por chatGPT
    with open('datos_climaticos_latam.csv', 'w', newline='', encoding='utf-8') as file:
        campos = ['Capital', 'País', 'Descripción', 'Sensación', 'Presión', 'Humedad', 'Máx', 'Mín']
        # pedazo de funcion hecho por chatGPT
        # separo datos con punto y coma
        writer = csv.DictWriter(file, fieldnames=campos, delimiter=';')
        # escribo encabezado
        writer.writeheader()
        # escribo datos en una linea para cada capital
        writer.writerows(datos_climaticos_capitales)
#### fin del codigo generado por chatGPT
# funcion que genera lo que pide el usuario        
if userWants == "2" :
    CITY = input("Elige una ciudad: EJ: Montevideo \n")
    obtener_datos_climaticos_de_solo_una_ciudad(CITY)
elif userWants == "1":
    # genera la función esperada por la letra
    obtener_datos_climaticos()
else:
    # genera la función esperada por la letra
    obtener_datos_climaticos()


