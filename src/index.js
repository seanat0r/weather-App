// Importing JS
import "core-js";
import "regenerator-runtime/runtime";

import { WeatherAPI } from "./js/getWeatherAPI";
import { Form } from "./js/formValidation";

// Importing CSS
import "./styles/reset.css";
import "./styles/style.css";

//Your code here
const weather = new WeatherAPI();
const form = new Form();

async function test() {
	try {
		const data = await weather.procceed("Erlinsbach");
		console.log(data);
	} catch (error) {
		console.log(error);
	}
}
test();
