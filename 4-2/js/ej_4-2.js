

const key = "10971b499be61b351760e8d57f0e3a4d"
//Funcion//
const obtener_datos_climaticos = async(capital) => {
/////////     // pedazo de codigo generado por chatGPT///////////////////////
    const capitales = capital ? [capital] : capitalesLatam
    for (const ciudad of capitales) {
/////////////////////////fin del codigo generado chatGPT///////////////////////

        const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${key}&units=metric&lang=es`)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            const capital = data['name']
            const pais = data['sys']['country']
            const descripcion = data['weather'][0]['description']
            const sensacion = data['main']['feels_like']
            const presion = data['main']['pressure']
            const humedad = data['main']['humidity']
            const max = data['main']['temp_max']
            const min = data['main']['temp_min']
            const id = data['id']
            console.log(id)
            console.log("Ciudad: " + capital + ", país: " + pais + ", descripción del clima: " + descripcion + ", sensación térmica: " + sensacion + ", presión: " + presion + ", humedad: " + humedad + ", temperatura mínima: " + min + ", temperatura máxima: " + max + ".")
        })
    }
}

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
];

