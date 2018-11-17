export class Coche {
    color:string;
    num_puertas:number;
    modelo:string;
    matricula:string;
    precio:number;
    descuento:number;
    promocion:boolean;
    precio_con_promo:number;
    disponible:boolean;
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