import axios from 'axios';
const API_KEY = "d74acf2841c3ef9e8bc2e194a0e2385e";
const APP_ID = `&APPID=${API_KEY}`
const url = 'http://api.openweathermap.org/data/2.5/forecast?zip=';

let api = {};

const getWeather = (zipcode) =>{
	const weather = axios.get(`${url}${zipcode}${APP_ID}&cnt=5`)
	return weather;
};

api = {getWeather}
export default api;