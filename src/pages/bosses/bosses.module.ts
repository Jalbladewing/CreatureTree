import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BossesPage } from './bosses';

@NgModule({
  declarations: [
    BossesPage,
  ],
  imports: [
    IonicPageModule.forChild(BossesPage),
  ],
})
export class BossesPageModule {}
