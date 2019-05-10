import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const baseURL = "https://news.ual.es/wp-json/wp/v2/"; 

/*
  Generated class for the NoticiasProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class NoticiasProvider {

  constructor(public http: HttpClient) {
  }

  getNoticias()
  {
    let url = baseURL + "posts/";
    return this.http.get(url);
  }

  getNoticia(id: any)
  {
    let url = baseURL + "posts/" + id + "?_embed";
    return this.http.get(url);
  }
  
  getMedia  (id:any) 
  {
    let url = baseURL + "media/" + id;
    return this.http.get(url);
  }

}
