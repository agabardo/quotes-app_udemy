import { Component } from '@angular/core';
import { AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';
import { Quote } from "../../data/quote.interface";
import { QuotesService} from "../../services/quotes";

/**
 * Generated class for the QuotesPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html',
})
export class QuotesPage {

  quoteGroup:{category : string, quotes : Quote[], icon : string};

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController, private svcQuotes:QuotesService) {

  }

  onAddToFavorite(selectedQuote:Quote){
    //console.log(selectedQuote);
    const alert =  this.alertCtrl.create({
      title : "Add quote",
      subTitle : "Add quote " + selectedQuote.id,
      message : "Are you sure?",
      buttons : [{
        text:"OK",
        handler: () => {
          console.log("Add the quote");
          this.svcQuotes.add(selectedQuote);
        },
      },{
        text : "Cancel",
        role : "cancel",
      }]

    });
    alert.present();
  }

  ngOnInit(){
    this.quoteGroup = this.navParams.data;
  }

  /*
  ionViewDidLoad() {
    //console.log('ionViewDidLoad QuotesPage');
  }*/

}
