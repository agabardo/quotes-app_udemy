import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Quote } from "../../data/quote.interface";
import {QuotesService} from "../../services/quotes";

/**
 * Generated class for the FavoritesPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
})
export class FavoritesPage {

  favouriteQuotes : Quote[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private svcQuotes:QuotesService) {

  }

  ionViewWillEnter(){ //To be used when there is dynamic data to show.
    this.favouriteQuotes = this.svcQuotes.get();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FavoritesPage');
  }

}
