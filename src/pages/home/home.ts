import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FamiliaCriaturasPage } from '../familia-criaturas/familia-criaturas';
import { BossesPage } from '../bosses/bosses';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) 
  {

  }

  goToBosses()
  {
    this.navCtrl.push(BossesPage);
  }

  goToCreatures()
  {
    this.navCtrl.push(FamiliaCriaturasPage);
  }

}
