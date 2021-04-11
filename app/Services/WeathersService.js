import { ProxyState } from "../AppState.js";
import Weather from "../Models/Weather.js";
import { sandBoxApi } from "./AxiosService.js";

class WeathersService{


    async getMyWeather(){
        let res = await sandBoxApi.get('weather')
       
        ProxyState.weather = res.data
        // console.log(ProxyState.weather)
    }

    // async tempToggle(){
    //     let res = await sandBoxApi.get('weather')
    //     ProxyState.weather = res.data 
    // }

}


export const weathersService = new WeathersService();