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
  show_result:boolean = false;
  show_image:boolean = false;

  constructor() { }

  ngOnInit() {

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
  showImage(){
    console.log(this.coche.modelo);
    this.show_image=!this.show_image;
    console.log(this.show_image);
  }
}
