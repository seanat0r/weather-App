// Importing JS
import "core-js"; 
import "regenerator-runtime/runtime"; 

import { WeatherAPI } from "./js/getWeatherAPI";

// Importing CSS
import "./styles/reset.css";
import "./styles/style.css";

//Your code here
const weather = new  WeatherAPI;
weather.procceed("Erlinsbach");