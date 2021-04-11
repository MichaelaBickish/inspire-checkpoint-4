import { ProxyState } from "../AppState.js";
import { weathersService } from "../Services/WeathersService.js";


//Private
function _draw() {
let weather = ProxyState.weather
let celsius = Math.round(weather.main.temp - 273.15)
let farenheit = Math.round(((weather.main.temp - 273.15) * 1.8) + 32)


let template = ''
template += /*html*/ `
    <div class="card bg-transparent mt-2">
        <div class="card-body px-2 py-2 text-center text-light" onclick="app.weathersController.tempToggle()">
            <h5 id = "temp font-weight-bold">${farenheit}°F</h5> <p class="mb-0 font-weight-bold">${weather.name}</p>
        </div></div>`

document.getElementById("weather").innerHTML =  template


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

// async tempToggle(){
//     try {
//         let temp = document.getElementById('temp').innerHTML
//         let weather = ProxyState.weather
//         let celsius = Math.round(weather.main.temp - 273.15)
//         let farenheit = Math.round(((weather.main.temp - 273.15) * 1.8) + 32)
        
//         let template = ''
        
//         if ( temp === true){
//         template += /*html*/ `${farenheit}°F`
//         ProxyState.weather = ProxyState.weather
//         }
//         else{
//         template += /*html*/ `${celsius}°C`
//         ProxyState.weather = ProxyState.weather
//         }
        
//         // await weathersService.tempToggle()
//         // 

//         // template = ''
//         // template += /*html*/ `${celsius}°C`

//         // document.getElementById("temp").innerHTML =  template
//     } catch (error) {
//         console.error(error)
//     }
// }



}