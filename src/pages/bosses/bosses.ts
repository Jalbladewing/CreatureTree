import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NoticiasProvider } from '../../providers/creaturesFamily/creaturesFamily';

/**
 * Generated class for the BossesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bosses',
  templateUrl: 'bosses.html',
})
export class BossesPage {
  bosses = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private noticiasProvider: NoticiasProvider) 
  {
    this.noticiasProvider.getBosses().subscribe((result: any) => 
    {
      this.bosses = result.bosses;

      for(let i = 0; i < this.bosses.length; i++)
      {
        this.bosses[i].encounterFaction = "https://wow.zamimg.com/images/wow/icons/large/inv_misc_questionmark.jpg";
        
        if(this.bosses[i].npcs.length > 0)
        {
          this.bosses[i].encounterFaction = this.noticiasProvider.getBossesZoom(this.bosses[i].npcs[0].creatureDisplayId);
        }
      }   
    })
  }

  ionViewDidLoad() 
  {
    console.log('ionViewDidLoad BossesPage');
  }

}
