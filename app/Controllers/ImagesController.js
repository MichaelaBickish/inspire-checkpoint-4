import { ProxyState } from "../AppState.js";
import { imagesService } from "../Services/ImagesService.js";


//Private
function _draw() {
    let images = ProxyState.images

    document.body.style.backgroundImage = `url(${images})`
}

//Public
export default class ImagesController {
    constructor() {
      ProxyState.on("images", _draw);
  
      this.getImages()
    }

    async getImages(){
        try {
            await imagesService.getImages()
        } catch (error) {
            console.error(error)
        }
    }
}