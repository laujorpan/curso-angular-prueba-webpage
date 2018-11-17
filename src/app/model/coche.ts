export const COLORES=['blanco','negro','rojo','amarillo','azul'];
export const MODELOS=['Citroen','Opel','Skoda'];
export const NUM_PUERTAS=[3,5];
export const IMAGENES=["https://cdn1.juguetes.org/wp-content/uploads/coche-para-bebe.jpg",
"http://www.mamidecora.com/carpetas%20presentacion/juguetes/coches%20y%20motos/little%20tike%20coche/little%20tikes.jpg",
"http://www.mamidecora.com/portadas_imagenes/juguetes/coches-para-ni%C3%B1os.jpg"];

export class Coche {
    color:string;
    num_puertas:number;
    modelo:string;
    matricula:string;
    precio:number;
    descuento:number;
    promocion:boolean =false;
    precio_con_promo:number;
    disponible:boolean =false;
    imagenUrl:string;

    constructor() { }
    changePromo(){
        this.promocion=!this.promocion;
        console.log("Promo: "+this.promocion)
        if(this.promocion){
            this.descuento=Number(prompt("Introduce el porcentaje (0-100)"))
            if (isNaN(this.descuento)){
                this.descuento=undefined;
                this.precio_con_promo=undefined;
            }
            this.precio_con_promo=(100-this.descuento)*this.precio/100;
            
        }else{
            this.descuento=undefined;
            this.precio_con_promo=undefined;
        }
        
        console.log("Descuento: "+this.descuento)
        console.log("Precio tras promoción: "+this.precio_con_promo)
        
    }
}