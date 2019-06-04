import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NoticiasProvider } from '../../providers/creaturesFamily/creaturesFamily';
import { CriaturasPage } from '../criaturas/criaturas';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  families = [];
  creatures = [];

  constructor(public navCtrl: NavController, private noticiasProvider: NoticiasProvider) 
  {

    noticiasProvider.getCreaturesFamilies().subscribe((result: any) => 
    {
      this.families = result.creature_families;
      console.log(result.creature_families);

      for(let i = 0; i < this.families.length; i++)
      {
        this.families[i].key.href = "https://wow.zamimg.com/images/wow/icons/large/inv_misc_questionmark.jpg";
        noticiasProvider.getMedia(this.families[i].id).subscribe((result: any) => 
        {
          this.families[i].key.href = result.assets[0].value;
        })
      }   
    })
  

    
  }

  getCreaturesFamily(id: any, name: any)
  {
    this.navCtrl.push(CriaturasPage, {"familyId": id, "familyName": name});
  }

}
