import axios from "axios";

const WEATHER_URL = "https://api.openweathermap.org/data/2.5/weather";
const API_KEY = "2f35b9df80cadf813c146401cb340a52";

async function getRequest(param){
    let resp =await axios.get(WEATHER_URL+`?q=${param}&units=metric&appid=${API_KEY}`,)
    return resp;
}
async function getRequestUsingLatandLong(lat,long){
    let resp =await axios.get(WEATHER_URL+`?lat=${lat}&lon=${long}&units=metric&appid=${API_KEY}`,)
    return resp;
}

export {getRequest,getRequestUsingLatandLong};