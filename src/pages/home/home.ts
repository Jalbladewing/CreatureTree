import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NoticiasProvider } from '../../providers/noticias/noticias';
import { NoticiaPage } from '../noticia/noticia';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  noticias = [];
  noticia = [];
  media = [];

  constructor(public navCtrl: NavController, private noticiasProvider: NoticiasProvider) 
  {
    noticiasProvider.getNoticias().subscribe((result: any) => 
    {
      this.noticias = result;
    })
  }

  getNoticia(id: any)
  {
    this.noticiasProvider.getNoticia(id).subscribe((result: any) =>
    {
      this.noticia = result;
      this.navCtrl.push(NoticiaPage, {"noticia": this.noticia, "media": this.media});
    })
  }

}
