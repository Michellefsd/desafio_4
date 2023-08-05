const key = "10971b499be61b351760e8d57f0e3a4d"
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


//Funcion//
const obtener_datos_climaticos = async(capital) => {
////    // pedazo de codigo generado por chatGPT      /////////
    const capitales = capital ? [capital] : capitalesLatam
    const datos_climaticos_capitales = [];
    for (const ciudad of capitales) {
////         fin del codigo generado chatGPT         //////////

        const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${key}&units=metric&lang=es`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            const capital = data['name'];
            const pais = data['sys']['country'];
            const descripcion = data['weather'][0]['description'];
            const sensacion = data['main']['feels_like'];
            const presion = data['main']['pressure'];
            const humedad = data['main']['humidity'];
            const max = data['main']['temp_max'];
            const min = data['main']['temp_min'];
            console.log("Ciudad: " + capital + ", país: " + pais + ", descripción del clima: " + descripcion + ", sensación térmica: " + sensacion + "°, presión: " + presion + "hPa, humedad: " + humedad + "%, temperatura mínima: " + min + "°, temperatura máxima: " + max + "°.");
            datos_climaticos_capitales.push({
                "Capital": capital,
                "Pais": pais,
                "Descripcion": descripcion,
                "Sensacion": sensacion,
                "Presion": presion,
                "Humedad": humedad,
                "Max": max,
                "Min": min,
            });
        });
    }
    // con este if hago que solo me arme el documento 
    // cuando quiere la lista completa de capitales de latinoamerica
    if (capitales == capitalesLatam) {
    //// Pedazo de código generado por chatGPT
    //// Genero el contenido  de CSV 
        let csvContent = "data:text/csv;charset=utf-8,";
        const headers = ["Capital", "Pais", "Descripcion", "Sensacion", "Presion", "Humedad", "Max", "Min"];
        csvContent += headers.join(";") + "\n";
    
        datos_climaticos_capitales.forEach(datos => {
            const values = headers.map(header => datos[header]);
            csvContent += values.join(";") + "\n";
        });
    
        // creo un link y genero la descarga
        const encodedUri = encodeURI(csvContent);
        const link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        link.setAttribute("download", "datos_climaticos_latam.csv");
        document.body.appendChild(link); // Requerido por Firefox
        link.click();
    //// fin del código generado por ChatGPT
    }
  
}


