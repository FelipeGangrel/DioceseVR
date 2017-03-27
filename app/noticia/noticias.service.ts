import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import "rxjs/Rx";

@Injectable()
export class NoticiasService {

  url: string = "http://diocesevr.com.br/api/noticias.php";
  data: any;


  constructor(public http: Http){
    this.data = null;
  }

  getNoticias(){
    
    return new Promise(resolve => {
      this.http.get(this.url)
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        },error => {
          console.log(error)
        });
    });
    
  }

  getMaisNoticias(offset){
    return new Promise(resolve => {
      let body = this.jsonToURLEncoded({ offset: offset });
      this.http.get(this.url+"?"+body)
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        },error => {
          console.log(error)
        });
    });
  }

  private jsonToURLEncoded(jsonString){
    return Object.keys(jsonString).map(function(key){
      return encodeURIComponent(key) + '=' + encodeURIComponent(jsonString[key]);
    }).join('&');
  }


}