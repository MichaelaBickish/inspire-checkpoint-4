import { ProxyState } from "../AppState.js";
import { quotesService } from "../Services/QuotesService.js";


//Private
function _draw() {
  let quotes = ProxyState.quotes;
  let qAuth = document.getElementById('auth')

  document.getElementById("quote").innerHTML = /*html*/`
  <blockquote class="blockquote text-center font-weight-light" title="- ${quotes.author}">
  <p class="mb-0">${quotes.content}</p></blockquote>`
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
