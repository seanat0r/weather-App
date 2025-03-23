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
		this.#weatherData.temperature = weatherInformaton.currentConditions.temp; // in Farenheit
		this.#weatherData.feelsLike = weatherInformaton.currentConditions.feelslike; // in Farenheit
		this.#weatherData.humidity = weatherInformaton.currentConditions.humidity;
		this.#weatherData.weatherDescription = weatherInformaton.description;
		this.#weatherData.weatherIcon = weatherInformaton.currentConditions.icon;
		this.#weatherData.tomorowTemperature = weatherInformaton.days[1].temp; // in Farenheit
		console.log(this.#weatherData);
		return Promise.resolve(this.#weatherData);
	}

	async farenheitToCelisus(...farenheitValues) {
		return farenheitValues.map(
			(farenheit) => Math.floor((farenheit - 32) * (5 / 9) * 100) / 100
		);
	}

	async procceed(location) {
		try {
			const weatherInformaton = await this.#fetchWeatherData(location);
			await this.#setUpWeatherData(weatherInformaton, location);
			[
				this.#weatherData.temperature,
				this.#weatherData.feelsLike,
				this.#weatherData.tomorowTemperature,
			] = await this.farenheitToCelisus(
				this.#weatherData.temperature,
				this.#weatherData.feelsLike,
				this.#weatherData.tomorowTemperature
			);
			return this.#weatherData;
		} catch (error) {
			console.error("Error in WeatherAPI; procceed(): ", error);
			throw error;
		}
	}
}
