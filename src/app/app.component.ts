import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'prueba-webpage';
  numero1 = 1;
  numero2 = 2;
  nombre = 'Laura';

  marca:string  = 'BMW';
  modelo:string = 'Serie 1';
  matricula:string = 'NMK 2211';
  precio: number = 100;

  error: string;

  isInit:boolean = false;

  changeName (){
    this.nombre=prompt("Introduce tu nombre")
  }

  changePrecio(){
    this.error = undefined;
    //this.precio = parseInt(prompt("Introduce el nuevo precio")); //Se queda con la parte entera
    this.precio = Number(prompt("Introduce el nuevo precio")); //Mas eficiente, mantiene decimales
    if (isNaN(this.precio)){
      this.error = "Error en precio"
      this.precio = 0;
    }

  }
}
