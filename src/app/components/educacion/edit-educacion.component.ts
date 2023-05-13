import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/service/educacion.service';
import { ImageEduService } from 'src/app/service/image-edu.service';

@Component({
  selector: 'app-edit-educacion',
  templateUrl: './edit-educacion.component.html',
  styleUrls: ['./edit-educacion.component.css']
})
export class EditEducacionComponent implements OnInit {
  edu: Educacion = null;

  constructor(private educacionService: EducacionService, private activatedRoute: ActivatedRoute, private router: Router, 
    public imageEduService: ImageEduService) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];

    this.educacionService.detail(id).subscribe({
      next: (data) => {
        this.edu = data;
      }, error: (err) => {
        this.router.navigate(['']);
      }
    })

  }

  onUpdate(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    if (this.imageEduService.url != "") {
      this.edu.urlLogo = this.imageEduService.url;
    }
    this.educacionService.update(id, this.edu).subscribe({
      next: (data) => {
        this.router.navigate(['']);
      }, error: (err) => {
        alert("Error al modificar la educación");
        this.router.navigate(['']);
      }
    })
    this.imageEduService.clearUrl();
  }

  uploadImage($event: any) {
    const id = this.activatedRoute.snapshot.params['id'];
    const name = "logo_" + id;
    this.imageEduService.uploadImage($event, name)
  }

  cancel(): void {
    this.imageEduService.clearUrl();
    this.router.navigate(['']);

  }

}
