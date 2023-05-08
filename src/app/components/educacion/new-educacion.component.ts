import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/service/educacion.service';

@Component({
  selector: 'app-new-educacion',
  templateUrl: './new-educacion.component.html',
  styleUrls: ['./new-educacion.component.css']
})
export class NewEducacionComponent implements OnInit {
  nombre: string = '';
  fechaInicio: string = '';
  fechaFin: string = '';
  descripcion: string = '';
  urlLogo: string = '';

  constructor(private educacionService: EducacionService, private router: Router) { }

  ngOnInit(): void {
    
  }

  onCreate(): void {
    const edu = new Educacion(this.nombre, this.fechaInicio, this.fechaFin, this.descripcion, this.urlLogo);
    this.educacionService.save(edu).subscribe({next: (data) => {
      alert("Educación añadida");
      this.router.navigate(['']);
    }, error: (err) => {
      alert("Falló");
      this.router.navigate(['']);
    }
  })
  }

}
