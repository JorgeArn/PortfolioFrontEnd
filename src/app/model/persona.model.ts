export class persona{
    id?: number;
    nombre: String;
    apellido: String;
    acerca_de: String;
    url_foto: String;


    constructor(nombre: String, apellido: String, acerca_de: String, url_foto: String){
        this.nombre = nombre;
        this.apellido = apellido;
        this.acerca_de = acerca_de;
        this.url_foto = url_foto;
    }

}