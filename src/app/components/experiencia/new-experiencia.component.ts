import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaService } from 'src/app/service/experiencia.service';


@Component({
  selector: 'app-new-experiencia',
  templateUrl: './new-experiencia.component.html',
  styleUrls: ['./new-experiencia.component.css']
})
export class NewExperienciaComponent implements OnInit {

  nombreEmpresa: string = '';
  fechaInicio: string = '';
  fechaFin: string = '';
  descripcion: string = '';
  urlLogo: string = '';

  constructor(private experienciaService: ExperienciaService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

  }

  onCreate(): void {
    const expe = new Experiencia(this.nombreEmpresa, this.fechaInicio, this.fechaFin, this.descripcion, this.urlLogo);
    this.experienciaService.save(expe).subscribe({
      next: (data) => {
        alert("Experiencia añadida");
        this.router.navigate(['']);
      }, error: (err) => {
        alert("Falló");
        this.router.navigate(['']);
      }
    })
  }

  

  cancel(): void {
    this.router.navigate(['']);
  }

}
