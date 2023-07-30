// variables
let cityName;
let stateCode;
let countryCode;
let limit;
const key = "d914d44ae03d7d2e6027704ad79b7714";

const capitalesLatam = [
    "Buenos Aires", 
    "La Paz", 
    "Brasília", 
    "Santiago de Chile", 
    "Bogotá", "San José", 
    "Havana", 
    "Quito", 
    "San Salvador", 
    "Guatemala", 
    "Port-au-Prince", 
    "Tegucigalpa", 
    "México DF", 
    "Managua", 
    "Panamá", 
    "Asunción", 
    "Lima", 
    "Santo Domingo", 
    "Montevideo", 
    "Caracas"  
]

//Funcion//
const obtener_datos_climaticos = async(cityName) => {
    const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${cityName},${stateCode},${countryCode}&appid=${key}`);
    const data = await response.json();
    return data;
}

