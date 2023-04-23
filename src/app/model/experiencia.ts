export class Experiencia {
    id?: number;
    nombreEmpresa: string;
    fechaInicio: string;
    fechaFin: string;
    descripcion: string;
    urlLogo: string;

    constructor(nombreEmpresa: string, fechaInicio: string, fechaFin: string, descripcion: string, urlLogo: string){
        this.nombreEmpresa = nombreEmpresa;
        this.fechaInicio = fechaInicio;
        this.fechaFin = fechaFin;
        this.descripcion = descripcion;
        this.urlLogo = urlLogo;
    }
}
