const capitalesLatam = [
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

//Funcion//
const capital = 'Santo Domingo'
const obtener_datos_climaticos = async() => {
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${capital}&appid=${key}&units=metric&lang=es`)
    .then(response => response.json())
    .then((data) => {
        const capital = data['name']
        const pais = data['sys']['country']
        const descripcion = data['weather'][0]['description']
        const sensacion = data['main']['feels_like']
        const presion = data['main']['pressure']
        const humedad = data['main']['humidity']
        const max = data['main']['temp_max']
        const min = data['main']['temp_min']
        console.log("Ciudad: " + capital + ", país: " + pais + ", descripción del clima: " + descripcion + ", sensación térmica: " + sensacion + ", presión: " + presion + ", humedad: " + humedad + ", temperatura mínima: " + min + ", temperatura máxima: " + max + ".")
    })
}
