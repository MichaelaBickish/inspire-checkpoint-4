import { ProxyState } from "../AppState.js";
import Quote from "../Models/Quote.js";
import { sandBoxApi } from "./AxiosService.js";

class QuotesService {
  
  async getQuote() {
    let res = await sandBoxApi.get('quotes')
    ProxyState.quotes = res.data
  }

}

export const quotesService = new QuotesService();

