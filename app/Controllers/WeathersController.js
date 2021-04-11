import { ProxyState } from "../AppState.js";
import { weathersService } from "../Services/WeathersService.js";


//Private
function _draw() {
let weather = ProxyState.weather

document.getElementById("weather").innerHTML =  weather.Template

}

//Public
export default class WeathersController {
    constructor(){
        ProxyState.on('weather', _draw)

        this.getMyWeather()
    }

async getMyWeather() {
    try {
        await weathersService.getMyWeather()
    } catch (error) {
        console.error(error)
    }
}

async tempToggle(){
    try {
    await weathersService.tempToggle()
  }
     catch (error) {
        console.error(error)
    }
}



}