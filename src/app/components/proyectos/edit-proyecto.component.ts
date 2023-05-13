import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyectos } from 'src/app/model/proyectos';
import { ImageProyService } from 'src/app/service/image-proy.service';
import { ProyectosService } from 'src/app/service/proyectos.service';

@Component({
  selector: 'app-edit-proyecto',
  templateUrl: './edit-proyecto.component.html',
  styleUrls: ['./edit-proyecto.component.css']
})
export class EditProyectoComponent implements OnInit {
  proyecto: Proyectos = null;

  constructor(private proyectosService: ProyectosService, private activatedRoute: ActivatedRoute, private router: Router,
    public imageProyService: ImageProyService) { }

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
    if (this.imageProyService.url != "") {
      this.proyecto.urlImagen = this.imageProyService.url;
    }
    this.proyectosService.update(id, this.proyecto).subscribe({
      next: (data) => {
        this.router.navigate(['']);
      }, error: (err) => {
        alert("Error al modificar la educación");
        this.router.navigate(['']);
      }
    })
    this.imageProyService.clearUrl();
  }

  uploadImage($event: any) {
    const id = this.activatedRoute.snapshot.params['id'];
    const name = "imagen_" + id;
    this.imageProyService.uploadImage($event, name)
  }

  cancel(): void {
    this.imageProyService.clearUrl();
    this.router.navigate(['']);

  }

}
