import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyectos } from 'src/app/model/proyectos';
import { ProyectosService } from 'src/app/service/proyectos.service';

@Component({
  selector: 'app-new-proyecto',
  templateUrl: './new-proyecto.component.html',
  styleUrls: ['./new-proyecto.component.css']
})
export class NewProyectoComponent implements OnInit {
  nombre: string = '';
  fechaInicio: string = '';
  fechaFin: string = '';
  descripcion: string = '';
  urlImagen: string = '';

  constructor(private proyectosService: ProyectosService, private router: Router) { }

  ngOnInit(): void {
    
  }

  onCreate(): void {
    const proyecto = new Proyectos(this.nombre, this.fechaInicio, this.fechaFin, this.descripcion, this.urlImagen);
    this.proyectosService.save(proyecto).subscribe({next: (data) => {
      alert("Proyecto añadido");
      this.router.navigate(['']);
    }, error: (err) => {
      alert("Falló");
      this.router.navigate(['']);
    }
  })
  }

}
