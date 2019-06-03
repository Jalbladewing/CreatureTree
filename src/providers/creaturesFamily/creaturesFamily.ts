import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

const authURL = "https://us.battle.net/oauth/token?client_id=96a48afa0dae47edbc0abd75a4225c92&client_secret=Jylncfcsyh5DCBi279ok9Wxll7ABMhXi&grant_type=client_credentials";
//const criaturesURL = "USwzD5luj539mxcDUBPP1fIaPhltHM2sAK";
const baseURL = "https://eu.api.blizzard.com/data/wow/creature-family/";
const creatureBaseURL = "https://eu.api.blizzard.com/data/wow/creature/";
const baseMediaURL = "https://eu.api.blizzard.com/data/wow/media/creature-family/"; 
const tokenURL = "?namespace=static-eu&locale=es_ES&access_token=USwzD5luj539mxcDUBPP1fIaPhltHM2sAK";
const creatureTokenURL = "&locale=es_ES&access_token=USwzD5luj539mxcDUBPP1fIaPhltHM2sAK";

/*
  Generated class for the NoticiasProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class NoticiasProvider {

  constructor(public http: HttpClient) {
    
  }

  getCreaturesFamilies()
  {
    let url = baseURL + "index" + tokenURL;
    return this.http.get(url);
  }

  getCreaturesFamily(id: any)
  {
    let url = baseURL + id + tokenURL;
    return this.http.get(url);
  }
  
  getMedia  (id:any) 
  {
    let url = baseMediaURL + id + tokenURL;
    return this.http.get(url);
  }

  getCreature  (id:any) 
  {
    let url = creatureBaseURL + id + tokenURL;
    return this.http.get(url);
  }

  getCreatureMedia  (displayURL:any) 
  {
    let url = displayURL + creatureTokenURL;
    return this.http.get(url);
  }


}
