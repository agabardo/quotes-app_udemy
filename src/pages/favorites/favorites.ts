import { Component } from '@angular/core';
import { IonicPage, MenuController, NavController, NavParams, ViewController} from 'ionic-angular';
import { Quote } from "../../data/quote.interface";
import { QuotesService } from "../../services/quotes";
import { AlertController } from "ionic-angular";
import { SettingsService } from "../../services/settings";

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

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private alertCtrl: AlertController,
    private svcQuotes:QuotesService,
    private viewCtrl: ViewController,
    private settSrvc:SettingsService,
    //private menuCtrl: MenuController,
  ) {

  }

  onRemoveFromFavorite(thisQuote:Quote){
    const alert =  this.alertCtrl.create({
      title : "Remove quote",
      subTitle : "Remove quote " + thisQuote.id,
      message : "Are you sure?",
      buttons : [{
        text:"OK",
        handler: () => {
          //console.log("Add the quote");
          this.svcQuotes.remove(thisQuote);
          this.refreshPage();
        },
        role : "update",
      },{
        text : "Cancel",
        role : "cancel",
      }]
    });
    alert.present();
  }

  getBackground(){
    if(this.settSrvc.getToggleStatus()){
      return 'altQuoteBackground';
    }
    else{
      return 'quoteBackground';
    }
  }

  refreshPage() {
    this.navCtrl.setRoot(this.navCtrl.getActive().component);
    //this.viewCtrl.getContent();
  }

  ionViewWillEnter(){ //To be used when there is dynamic data to show.
    this.favouriteQuotes = this.svcQuotes.get();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FavoritesPage');
  }

  /*
  onOpenMenu(){
    this.menuCtrl.open();
  }*/

}
