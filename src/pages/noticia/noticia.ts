import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the NoticiaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-noticia',
  templateUrl: 'noticia.html',
})
export class NoticiaPage {
  noticia: any;
  media: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) 
  {
    this.noticia = this.navParams.get('noticia');
    this.media = this.navParams.get('media');
  }

  ionViewDidLoad() 
  {
    console.log('ionViewDidLoad NoticiaPage');
  }

}
