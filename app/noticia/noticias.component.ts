import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import * as elementRegistryModule from 'nativescript-angular/element-registry';
elementRegistryModule.registerElement("CardView", () => require("nativescript-cardview").CardView);

import { NoticiasService } from "./noticias.service";


@Component({
  selector: "ns-noticias",
  moduleId: module.id,
  templateUrl: "./noticias.component.html",
  changeDetection: ChangeDetectionStrategy.Default
})
export class NoticiasComponent implements OnInit {

  noticias: any;
  offset: number;

  constructor(private noticiasService: NoticiasService){
    this.offset = 5;
  }

  ngOnInit(): void{
    // console.log('você está em notícias.component');
    this.noticiasService.getNoticias().then((response)=>{
      let data:any = response;
      this.noticias = [];
      for (let noticia of data){
        this.noticias.push(noticia);
      }
    });
  }

  carregarMais(){
    this.noticiasService.getMaisNoticias(this.offset).then((response)=>{
      let data:any = response;
      for(let noticia of data){
        this.noticias.push(noticia);
      }
      this.offset += 5;
    });
  }

}