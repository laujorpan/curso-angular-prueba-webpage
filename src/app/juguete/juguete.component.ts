import { Component, OnInit, Input } from '@angular/core';
import { Juguete } from '../model/juguete';
@Component({
  selector: 'app-juguete',
  templateUrl: './juguete.component.html',
  styleUrls: ['./juguete.component.scss']
})
export class JugueteComponent implements OnInit {
  @Input() public juguete: Juguete
  show_image:boolean = false;
  
  constructor() { }

  ngOnInit() {
  }

  showImage(){
    this.show_image=!this.show_image;
  }
}
