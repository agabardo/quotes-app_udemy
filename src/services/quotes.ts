import { Quote} from "../data/quote.interface";

export class QuotesService{
  private favouriteQuotes: Quote[] = [];

  add(quote:Quote){
    this.favouriteQuotes.push(quote);
  }

  remove(quote:Quote){
    const position = this.favouriteQuotes.findIndex((quoteEl:Quote)=>{
      return quoteEl.id == quote.id;
    });
    this.favouriteQuotes.splice(position,1);
  }

  get(){
    return this.favouriteQuotes.slice();
  }

  isQuoteFavorite(quote:Quote){
    return this.favouriteQuotes.find((quoteEl:Quote)=> {
      return quoteEl.id == quote.id;
    });
  }
}
