import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/service/educacion.service';

@Component({
  selector: 'app-edit-educacion',
  templateUrl: './edit-educacion.component.html',
  styleUrls: ['./edit-educacion.component.css']
})
export class EditEducacionComponent implements OnInit {
  edu: Educacion = null;

  constructor(private educacionService: EducacionService, private activatedRoute: ActivatedRoute, private router: Router) { }

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

    this.educacionService.update(id, this.edu).subscribe({
      next: (data) => {
        this.router.navigate(['']);
      }, error: (err) => {
        alert("Error al modificar la educación");
        this.router.navigate(['']);
      }
    })

  }

}
