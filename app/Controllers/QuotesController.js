import { ProxyState } from "../AppState.js";
import { quotesService } from "../Services/QuotesService.js";


//Private
function _draw() {
  let quotes = ProxyState.quotes;
  let qAuth = document.getElementById('auth')

  document.getElementById("quote").innerHTML = /*html*/`<div class="list-card shadow rounded opaque">
  <blockquote class="blockquote text-center text-light font-weight-light" title="- ${quotes.author}">
  <p class="mb-0">${quotes.content}</p></blockquote></div>`
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
