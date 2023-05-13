import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { persona } from 'src/app/model/persona.model';
import { ImageService } from 'src/app/service/image.service';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-edit-acerca-de',
  templateUrl: './edit-acerca-de.component.html',
  styleUrls: ['./edit-acerca-de.component.css']
})
export class EditAcercaDeComponent implements OnInit {
  persona: persona = null;

  constructor(private personaService: PersonaService, private activatedRoute: ActivatedRoute, private router: Router,
    public imageService: ImageService) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];

    this.personaService.detail(id).subscribe({
      next: (data) => {
        this.persona = data;
      }, error: (err) => {
        this.router.navigate(['']);
      }
    })
  }

  onUpdate(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    if (this.imageService.url != "") {
      this.persona.url_foto = this.imageService.url;
    } 
    this.personaService.update(id, this.persona).subscribe({
      next: (data) => {
        this.router.navigate(['']);
      }, error: (err) => {
        alert("Error al modificar la persona");
        this.router.navigate(['']);
      }
    })
    this.imageService.clearUrl();
  }

  uploadImage($event: any) {
    const id = this.activatedRoute.snapshot.params['id'];
    const name = "perfil_" + id;
    this.imageService.uploadImage($event, name)
  }

  cancel(): void {
    this.imageService.clearUrl();
    this.router.navigate(['']);

  }

}
