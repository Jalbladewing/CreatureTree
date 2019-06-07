import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { NoticiasProvider } from '../providers/creaturesFamily/creaturesFamily';
import { HttpClientModule } from '@angular/common/http';
import { CriaturasPage } from '../pages/criaturas/criaturas';
import { FamiliaCriaturasPage } from '../pages/familia-criaturas/familia-criaturas';
import { BossesPage } from '../pages/bosses/bosses';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    FamiliaCriaturasPage,
    CriaturasPage,
    BossesPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    FamiliaCriaturasPage,
    CriaturasPage,
    BossesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    NoticiasProvider
  ]
})
export class AppModule {}
