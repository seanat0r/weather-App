export class form {
    constructor() {
        this.inputCity = document.getElementById('city');
        this.submitBtn = document.getElementById('submit');
    }
    #getCity() {
        return this.inputCity.value;
    }

    

    procceed() {
        const cityValue = this.#getCity();

    }
}