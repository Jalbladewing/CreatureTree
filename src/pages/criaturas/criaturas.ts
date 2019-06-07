import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NoticiasProvider } from '../../providers/creaturesFamily/creaturesFamily';

/**
 * Generated class for the CriaturasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-criaturas',
  templateUrl: 'criaturas.html',
})
export class CriaturasPage {
  familyId: any;
  familyName: any;
  creatures = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private noticiasProvider: NoticiasProvider) 
  {
    this.familyId = this.navParams.get('familyId');
    this.familyName = this.navParams.get('familyName');
    let contador = 0;

    for(let i = 0; i < 1000; i++)
    { 
      this.noticiasProvider.getCreature(i).subscribe((result: any) => 
      {
        if(result.family.id == this.familyId) 
        {
          result.creature_displays[0].key.href = this.noticiasProvider.getCreatureZoom(result.creature_displays[0].key.href);
          this.creatures.push(result);
        }   
      })
    }
  }

  ionViewDidLoad() 
  {
    console.log('ionViewDidLoad NoticiaPage');
  }

}
