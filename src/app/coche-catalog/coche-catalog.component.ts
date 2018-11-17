import { Component, OnInit } from '@angular/core';
import { Coche } from '../model/coche';
import { COLORES,MODELOS,IMAGENES,NUM_PUERTAS } from '../model/coche';

@Component({
  selector: 'app-coche-catalog',
  templateUrl: './coche-catalog.component.html',
  styleUrls: ['./coche-catalog.component.scss']
})
export class CocheCatalogComponent implements OnInit {

  catalog: Array<Coche> = [];
  total_catalogo:number = 10;
  constructor() { }

  ngOnInit() {
    for (let index = 0; index < this.total_catalogo; index++) {
      let coche = new Coche();
      coche.color= COLORES[Math.round(Math.random()*10)%COLORES.length]
      coche.matricula=this.generarMatricula();
      coche.modelo= MODELOS[Math.round(Math.random()*10)%MODELOS.length];
      coche.num_puertas=NUM_PUERTAS[Math.round(Math.random()*10)%NUM_PUERTAS.length];
      coche.precio=Math.round(Math.random()*100000);
      coche.disponible=true;
      coche.imagenUrl=IMAGENES[Math.round(Math.random()*10)%IMAGENES.length];
      this.catalog.push(coche);
    }
  }
  generarMatricula() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  
    for (var i = 0; i < 3; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    
    text+=' '
    
    for (var i = 0; i < 4; i++)
      text += Math.round(Math.random()*10)%10;
    
    return text;
  }

}
