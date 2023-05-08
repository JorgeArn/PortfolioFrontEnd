export class Proyectos {
    id?: number;
    nombre: string;
    fechaInicio: string;
    fechaFin: string;
    descripcion: string;
    urlImagen: string;

    constructor(nombre: string, fechaInicio: string, fechaFin: string, descripcion: string, urlImagen: string) {
        this.nombre = nombre;
        this.fechaInicio = fechaInicio;
        this.fechaFin = fechaFin;
        this.descripcion = descripcion;
        this.urlImagen = urlImagen;
    }
}
