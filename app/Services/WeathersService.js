import { ProxyState } from "../AppState.js";
import Weather from "../Models/Weather.js";
import { sandBoxApi } from "./AxiosService.js";

class WeathersService{


    async getMyWeather(){
        let res = await sandBoxApi.get('weather')
       
        ProxyState.weather = new Weather(res.data)
        // console.log(ProxyState.weather)
    }

    async tempToggle(){
        let weather = ProxyState.weather
        ProxyState.weather.clicked ? weather.clicked= false : weather.clicked = true
    
        ProxyState.weather = ProxyState.weather
    }

}


export const weathersService = new WeathersService();