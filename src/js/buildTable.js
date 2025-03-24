export class BuildTable {
	constructor() {
		this.table = document.getElementById("weatherTable");
		this.cityName = document.getElementById("cityName");
		this.temperature = document.getElementById("temperature");
		this.feelsLike = document.getElementById("feelsLikeTemp");
		this.humidity = document.getElementById("humidity");
		this.weatherDescription = document.getElementById("weatherDescription");
		this.weatherIcon = document.getElementById("weatherIcon");
		this.tomorowTemperature = document.getElementById("tomorowTemp");
	}
    async #loadImage(picName) {
        const loadWeatherIcon = async (picName) => {
            const icon = await import (`../assets/${picName}.png`);
            return icon.default;
        }
        const icon = await loadWeatherIcon(picName);
        const img = document.createElement("img");
        img.src = icon;
        img.alt = "Weather Icon";
        this.weatherIcon.appendChild(img);

    }

	#deleteTableData() {
		this.cityName.textContent = "";
		this.temperature.textContent = "";
		this.feelsLike.textContent = "";
		this.humidity.textContent = "";
		this.weatherDescription.textContent = "";
		this.weatherIcon.innerHTML = "";
		this.tomorowTemperature.textContent = "";
	}
	#setTableData(data) {
		this.cityName.textContent = data.location;
		this.temperature.textContent = `${data.temperature}°C`;
		this.feelsLike.textContent = `${data.feelsLike}°C`;
		this.humidity.textContent = data.humidity;
		this.weatherDescription.textContent = data.weatherDescription;
		this.tomorowTemperature.textContent = `${data.tomorowTemperature}°C`;
	}

	procceed(data) {
        const tableStyle = window.getComputedStyle(this.table);
		if (tableStyle.display === "none") {
			this.table.style.display = "block";
		}
		this.#deleteTableData();
        this.#loadImage(data.weatherIcon);
		this.#setTableData(data);
	}
}
