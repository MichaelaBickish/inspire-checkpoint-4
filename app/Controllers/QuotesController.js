import { ProxyState } from "../AppState.js";
import { quotesService } from "../Services/QuotesService.js";


//Private
function _draw() {
  let quotes = ProxyState.quotes;
  let qAuth = document.getElementById('auth')

  document.getElementById("quote").innerHTML = /*html*/
  `<div class="list-card shadow rounded opaque-2 mb-2"><p class="text-center text-light 
   mb-0" title="- ${quotes.author}">"${quotes.content}"</p></div>`
}

//Public
export default class QuotesController {
  constructor() {
    ProxyState.on("quotes", _draw);
    this.getQuote()
  }

  async getQuote() {
    try {
      await quotesService.getQuote()
    } catch (error) {
      console.error(error)
    }
    
  }

}
