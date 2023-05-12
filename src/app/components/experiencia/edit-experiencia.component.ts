import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaService } from 'src/app/service/experiencia.service';
import { ImageService } from 'src/app/service/image.service';

@Component({
  selector: 'app-edit-experiencia',
  templateUrl: './edit-experiencia.component.html',
  styleUrls: ['./edit-experiencia.component.css']
})
export class EditExperienciaComponent implements OnInit {
  expLab: Experiencia = null;

  constructor(private experienciaService: ExperienciaService, private activatedRoute: ActivatedRoute, private router: Router,
    public imageService: ImageService) { }

  ngOnInit(): void {
    //captura el id de la exp que quiero modificar
    const id = this.activatedRoute.snapshot.params['id'];

    this.experienciaService.detail(id).subscribe({
      next: (data) => {
        this.expLab = data;
      }, error: (err)=> {
        this.router.navigate(['']);
      }
    })

  }

  onUpdate(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.expLab.urlLogo = this.imageService.url;
    this.experienciaService.update(id, this.expLab).subscribe({
      next: (data) => {
        this.router.navigate(['']);
      }, error: (err) => {
        alert("Error al modificar experiencia");
        this.router.navigate(['']);
      }
    })
  }

  uploadImage($event: any) {
    const id = this.activatedRoute.snapshot.params['id'];
    const name = "logo_" + id;
    this.imageService.uploadImage($event, name)
  }

}
