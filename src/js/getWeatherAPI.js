//* https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/[location]/[date1]/[date2]?key=YOUR_API_KEY
export class WeatherAPI {
	async #getAPI(location) {
		try {
			const api = await fetch(
				`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/?key=EJG8Y77YC3TFC3Z8GYF63TFBY`,
				{ mode: "cors" }
			);
			console.log(api);
            const weatherData = await api.json();
            console.log(weatherData);
            console.log(weatherData.currentConditions.temp);

		} catch (error) {
			console.error("Error in WeatherAPI; getAPI(): ", error);
		}
	}

	procceed(location) {
		this.#getAPI(location);
	}
}
