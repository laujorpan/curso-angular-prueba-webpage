import { Component, OnInit } from '@angular/core';
import { Coche } from '../model/coche';

@Component({
  selector: 'app-coche-catalog',
  templateUrl: './coche-catalog.component.html',
  styleUrls: ['./coche-catalog.component.scss']
})
export class CocheCatalogComponent implements OnInit {
  catalog: Array<Coche> = []

  constructor() { }

  ngOnInit() {
    let coche = new Coche();
    coche.color= 'Blanco'
    coche.descuento=Math.round(Math.random()*100)
    coche.matricula='BBM 1111';
    coche.modelo='Skoda';
    coche.num_puertas=3;
    coche.precio=20000;
    coche.promocion=false
    this.catalog.push(coche);
    
    let coche2 = new Coche();
    coche2.color= 'Negro'
    coche2.descuento=Math.round(Math.random()*100)
    coche2.matricula='BSS 2413';
    coche2.modelo='Opel';
    coche2.num_puertas=5;
    coche2.precio=18000;
    coche2.promocion=false
    this.catalog.push(coche2);
  }

}
