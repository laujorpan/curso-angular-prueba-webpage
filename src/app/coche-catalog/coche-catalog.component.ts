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
    coche.disponible=true;
    coche.imagenUrl="https://cdn1.juguetes.org/wp-content/uploads/coche-para-bebe.jpg"
    this.catalog.push(coche);
    
    let coche1 = new Coche();
    coche1.color= 'Raro'
    coche1.descuento=Math.round(Math.random()*100)
    coche1.matricula='RRR 2211';
    coche1.modelo='Undefined';
    coche1.num_puertas=3;
    coche1.precio=23000;
    coche1.promocion=false
    coche1.disponible=false;
    coche1.imagenUrl="http://www.mamidecora.com/carpetas%20presentacion/juguetes/coches%20y%20motos/little%20tike%20coche/little%20tikes.jpg"
    this.catalog.push(coche1);

    let coche2 = new Coche();
    coche2.color= 'Negro'
    coche2.descuento=Math.round(Math.random()*100)
    coche2.matricula='BSS 2413';
    coche2.modelo='Opel';
    coche2.num_puertas=5;
    coche2.precio=18000;
    coche2.promocion=false
    coche2.disponible=true;
    coche2.imagenUrl="http://www.mamidecora.com/portadas_imagenes/juguetes/coches-para-ni%C3%B1os.jpg"
    this.catalog.push(coche2);
  }

}
