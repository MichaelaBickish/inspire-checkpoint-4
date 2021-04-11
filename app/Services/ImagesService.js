import { ProxyState } from "../AppState.js";
import Image from "../Models/Image.js";
import { sandBoxApi } from "./AxiosService.js";


class ImagesService {
    async getImages(){
        let res = await sandBoxApi.get('images')
        ProxyState.images = res.data.url
    }

}


export const imagesService = new ImagesService()