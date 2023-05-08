import { Component, OnInit } from '@angular/core';
import { Skills } from 'src/app/model/skills';
import { SkillsService } from 'src/app/service/skills.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skl: Skills[] = [];

  constructor(private skillsService: SkillsService, private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void {
    this.cargarSkill();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarSkill(): void {
    this.skillsService.lista().subscribe(data => { this.skl = data; })
  }

  delete(id?: number) {
    if (id != undefined) {
      this.skillsService.delete(id).subscribe({
        next: (data) => {
          this.cargarSkill();
        }, error: (err) => {
          alert("No se pudo eliminar la experiencia");
        }
      })
    }
  }

}



