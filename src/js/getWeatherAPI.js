//* https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/[location]/[date1]/[date2]?key=YOUR_API_KEY
export class WeatherAPI {
	#weatherData = {
		location: "",
		temperature: null,
		feelsLike: null,
		humidity: null,
		weatherDescription: "",
		weatherIcon: null,
		tomorowTemperature: null,
	};
	async #fetchWeatherData(location) {
		try {
			const api = await fetch(
				`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/?key=EJG8Y77YC3TFC3Z8GYF63TFBY`,
				{ mode: "cors" }
			);
			console.log(api);
			const weatherData = await api.json();
			console.log(weatherData);
			return weatherData;
		} catch (error) {
			console.error("Error in WeatherAPI; getAPI(): ", error);
			throw error;
		}
	}

	async #setUpWeatherData(weatherInformaton, location) {
		this.#weatherData.location = location;
		this.#weatherData.temperature = weatherInformaton.currentConditions.temp;
		this.#weatherData.feelsLike = weatherInformaton.currentConditions.feelslike;
		this.#weatherData.humidity = weatherInformaton.currentConditions.humidity;
		this.#weatherData.weatherDescription = weatherInformaton.description;
		this.#weatherData.weatherIcon = weatherInformaton.currentConditions.icon;
		this.#weatherData.tomorowTemperature = weatherInformaton.days[1].temp;
		console.log(this.#weatherData);
	}

	async procceed(location) {
		try {
			const weatherInformaton = await this.#fetchWeatherData(location);
			await this.#setUpWeatherData(weatherInformaton, location);
		} catch (error) {
			console.error("Error in WeatherAPI; procceed(): ", error);
			throw error;
		}
	}
}
