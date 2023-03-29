import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {

  //se crea la variable miPortfolio para usarla en el template
  miPortfolio:any;

  constructor(private datosPortfolio:PortfolioService) {

  }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data =>{
      console.log(data);
      //se asigna a miPortfolio el valor que se obtuvo en esta función (data)
      this.miPortfolio = data; 
    });
  }

}
