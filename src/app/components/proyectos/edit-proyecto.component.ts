import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyectos } from 'src/app/model/proyectos';
import { ProyectosService } from 'src/app/service/proyectos.service';

@Component({
  selector: 'app-edit-proyecto',
  templateUrl: './edit-proyecto.component.html',
  styleUrls: ['./edit-proyecto.component.css']
})
export class EditProyectoComponent implements OnInit {
  proyecto: Proyectos = null;

  constructor(private proyectosService: ProyectosService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];

    this.proyectosService.detail(id).subscribe({
      next: (data) => {
        this.proyecto = data;
      }, error: (err) => {
        this.router.navigate(['']);
      }
    })
  }

  onUpdate(): void {
    const id = this.activatedRoute.snapshot.params['id'];

    this.proyectosService.update(id, this.proyecto).subscribe({
      next: (data) => {
        this.router.navigate(['']);
      }, error: (err) => {
        alert("Error al modificar la educación");
        this.router.navigate(['']);
      }
    })

  }

}
