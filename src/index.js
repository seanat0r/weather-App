// Importing JS
import "core-js";
import "regenerator-runtime/runtime";

import { WeatherAPI } from "./js/getWeatherAPI";
import { Form } from "./js/formValidation";
import { BuildTable } from "./js/buildTable";

// Importing CSS
import "./styles/reset.css";
import "./styles/style.css";

//Your code here
const weather = new WeatherAPI();
const form = new Form();
const table = new BuildTable();

form.form.addEventListener("submit", handleSubmit);

async function handleSubmit(event) {
	console.log("Form submitted");
	event.preventDefault();
	const checkForm = form.procceed();

	document.querySelector("#loading").style.display = "flex";

	if (!checkForm) {
		document.getElementById("loading").style.display = "none";
		console.log("Please enter a city name");
		return;
	}
	console.log("City name is valid");

	const city = form.getCity();

	try {
		const data = await weatherData(city);
		if (data) buildTable(data);
	} catch (error) {
		console.log(error);
	} finally {
		document.getElementById("loading").style.display = "none";
	}
}

async function weatherData(city) {
	//get the Weather data
	try {
		const data = await weather.procceed(city);
		console.log(data);
		return data;
	} catch (error) {
		console.log(error);
	}
}

async function buildTable(data) {
	table.procceed(data);
}
