// Ejercicio 2: Escribe una función en Python llamada "obtener_datos_climaticos" que tome como argumento el nombre de la ciudad en español y realice una solicitud a la API pública de OpenWeatherMap para obtener 
// //  los datos climáticos de todas las ciudades capitales de LATAM, en español.  // // 
// El programa debe devolver un documento separado por puntos y comas de todas las capitales con datos como:
// •	nombre de la capital
// •	país
// •	descripción del clima 
// •	sensación térmica
// •	presión
// •	humedad
// •	temperatura mínima
// •	temperatura máxima. 
// Puedes encontrar la documentación de la API en https://openweathermap.org/api


// Paso 1 - Inscribirse en OpenWeather y leer la documentacion

// Paso 2 - Identificar la Apique me sirve 
// https://openweathermap.org/api/one-call-3

// Paso 3 - Averiguar los países de LATAM
// Source: https://es.wikipedia.org/wiki/Am%C3%A9rica_Latina

// Argentina
// Bolivia
// Brasil
// Chile
// Colombia
// Costa Rica
// Cuba
// Ecuador
// El Salvador
// Guatemala
// Haití
// Honduras
// México50​
// Nicaragua
// Panamá
// Paraguay
// Perú
// República Dominicana
// Uruguay
// Venezuela

// Paso 4 - Obtener sus Capitales:

// Argentina =                Buenos Aires
// Bolivia =                  La Paz
// Brasil =                   Brasília
// Chile =                    Santiago de Chile
// Colombia =                 Bogotá
// Costa Rica =               San José
// Cuba =                     Havana
// Ecuador =                  Quito
// El Salvador =              San Salvador
// Guatemala =                Guatemala
// Haití =                    Port-au-Price
// Honduras =                 Tegucigalpa
// México =                   México DF
// Nicaragua =                Managua
// Panamá =                   Panamá
// Paraguay =                 Asunción
// Perú =                     Lima
// República Dominicana =     Santo Domingo
// Uruguay =                  Montevideo
// Venezuela =                Caracas

// Paso 5 - 
// Empiezo a Investigar GeoCoding

let cityName;
let stateCode;
let countryCode;
let limit;
const key = "d914d44ae03d7d2e6027704ad79b7714";




const obtener_datos_climaticos = async(cityName) => {
    const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${cityName},${stateCode},${countryCode}&appid=${key}`);
    const data = await response.json();
    return data;
}

