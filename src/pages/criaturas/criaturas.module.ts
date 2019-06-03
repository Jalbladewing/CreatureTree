import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CriaturasPage } from './criaturas';

@NgModule({
  declarations: [
    CriaturasPage,
  ],
  imports: [
    IonicPageModule.forChild(CriaturasPage),
  ],
})
export class CriaturasPageModule {}
