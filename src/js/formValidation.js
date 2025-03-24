export class Form {
	constructor() {
		this.inputCity = document.getElementById("city");
		this.submitBtn = document.getElementById("submit");
        this.form = document.getElementById("form");
	}
	getCity() {
		return this.inputCity.value;
	}
	#validateCity() {
		const cityValue = this.getCity();
		if (cityValue.trim() === "") {
			this.inputCity.setCustomValidity("Please enter a city name");
            this.inputCity.reportValidity();
            return false;
		} else {
			this.inputCity.setCustomValidity("");
            this.inputCity.reportValidity();
            return true;
		}
        
	}

	procceed() {
		return this.#validateCity();
	}
}
