import { Component, OnInit,Input } from '@angular/core';
import { Coche } from '../model/coche';

@Component({
  selector: 'app-coche',
  templateUrl: './coche.component.html',
  styleUrls: ['./coche.component.scss']
})
export class CocheComponent implements OnInit {

  @Input() public coche: Coche /*= new Coche()*/;
  email:string="ejemplo@email.com";
  result_message:string;
  show_result:boolean = false
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
  sendEmail(){
    if (this.email===undefined ||this.email==="ejemplo@email.com"){
      this.result_message='Put your email and try again';
    }else{
      this.result_message='Sent to '+this.email;
      this.email=undefined;
    }
    this.show_result=true;
  }
}
