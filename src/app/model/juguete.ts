export const EDAD_RECOMENDADA=['3-5','5-7','7-10'];
export const MARCA=['Famosa','Mattel'];
export const NOMBRES=['Playmobil','Lego', 'Nancy'];
export const IMAGENES=["https://cdn1.juguetes.org/wp-content/uploads/coche-para-bebe.jpg",
"http://www.mamidecora.com/carpetas%20presentacion/juguetes/coches%20y%20motos/little%20tike%20coche/little%20tikes.jpg",
"http://www.mamidecora.com/portadas_imagenes/juguetes/coches-para-ni%C3%B1os.jpg"];

export class Juguete {
    edad:string;
    marca:string;
    nombre:string;
    precio:number;
    disponible:boolean =false;
    imagenUrl:string;

    constructor() { }
    
}