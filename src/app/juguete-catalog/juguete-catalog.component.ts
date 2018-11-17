import { Component, OnInit } from '@angular/core';
import { Juguete } from '../model/juguete';
import { EDAD_RECOMENDADA,IMAGENES,MARCA,NOMBRES } from '../model/juguete';

@Component({
  selector: 'app-juguete-catalog',
  templateUrl: './juguete-catalog.component.html',
  styleUrls: ['./juguete-catalog.component.scss']
})
export class JugueteCatalogComponent implements OnInit {

  catalog: Array<Juguete> = [];
  total_catalogo:number = 10;
  constructor() { }

  ngOnInit() {
    for (let index = 0; index < this.total_catalogo; index++) {
      let juguete = new Juguete();
      juguete.disponible=true;
      juguete.edad= EDAD_RECOMENDADA[Math.round(Math.random()*10)%EDAD_RECOMENDADA.length];
      juguete.imagenUrl=IMAGENES[Math.round(Math.random()*10)%IMAGENES.length];
      juguete.marca=MARCA[Math.round(Math.random()*10)%MARCA.length];
      juguete.nombre=NOMBRES[Math.round(Math.random()*10)%NOMBRES.length]+" "+Math.round(Math.random()*10);
      juguete.precio=Math.round(Math.random()*100000);
      this.catalog.push(juguete);
    }
  }

}
