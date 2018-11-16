import { Component, OnInit,Input } from '@angular/core';
import { Coche } from '../model/coche';

@Component({
  selector: 'app-coche',
  templateUrl: './coche.component.html',
  styleUrls: ['./coche.component.scss']
})
export class CocheComponent implements OnInit {

  @Input() public coche: Coche /*= new Coche()*/;

  constructor() { }

  ngOnInit() {
    /*
    this.coche.color= 'Blanco'
    this.coche.descuento=Math.round(Math.random()*100)
    this.coche.matricula='BBM 1111';
    this.coche.modelo='Skoda';
    this.coche.num_puertas=3;
    this.coche.precio=20000;
    this.coche.promocion=false
    */
        
  }

}
