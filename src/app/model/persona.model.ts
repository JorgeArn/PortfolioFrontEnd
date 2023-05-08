export class persona{
    id?: number;
    nombre: string;
    apellido: string;
    acerca_de: string;
    url_foto: String;


    constructor(nombre: string, apellido: string, acerca_de: string, url_foto: string){
        this.nombre = nombre;
        this.apellido = apellido;
        this.acerca_de = acerca_de;
        this.url_foto = url_foto;
    }

}