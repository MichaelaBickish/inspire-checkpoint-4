export default class Weather{
    constructor({name, main, clicked = true}) {
    this.name = name
    this.temp = main.temp
    this.clicked = clicked

    this.celsius = Math.round(this.temp - 273.15)
    this.farenheit = Math.round(((this.temp - 273.15) * 1.8) + 32)
    }

    get Template() {
        return /*html*/ `
    <div class="list-card mt-2 opaque-2">
    <div class="card-body px-2 py-2 text-center text-light" title="click to toggle F / C"
     onclick="app.weathersController.tempToggle()"><h5 id = "font-weight-bold">
        ${this.clicked ? this.farenheit +' °F' : this.celsius +' °C'}</h5>
        <p class="mb-0 font-weight-bold">${this.name}</p>
    </div></div>`
    }


}