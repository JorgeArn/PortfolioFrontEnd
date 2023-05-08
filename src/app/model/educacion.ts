
export class Educacion {
    id?: number;
    nombre: string;
    fechaInicio: string;
    fechaFin: string;
    descripcion: string;
    urlLogo: string;

    constructor(nombre: string, fechaInicio: string, fechaFin: string, descripcion: string, urlLogo: string) {
        this.nombre = nombre;
        this.fechaInicio = fechaInicio;
        this.fechaFin = fechaFin;
        this.descripcion = descripcion;
        this.urlLogo = urlLogo;
    }
}
