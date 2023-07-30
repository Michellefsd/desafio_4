// variables
let cityName;
let stateCode;
let countryCode;
let limit;



//Funcion//
const obtener_datos_climaticos = async(cityName) => {
    const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${cityName},${stateCode},${countryCode}&appid=${key}`);
    const data = await response.json();
    return data;
}

export default key;
