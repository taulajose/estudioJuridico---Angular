import { Component, OnInit } from '@angular/core';
import { CURSOSW } from './cursosW.json'
@Component({
  selector: 'app-curso-web',
  templateUrl: './curso-web.component.html',
  styleUrls: ['./curso-web.component.css']
})
export class CursoWebComponent implements OnInit {

  cursoW:any;

  precio='$3500';
  dia='15';
  mes='enero'
 
  lis=[{
    titulo:"Duracion: 1 mes",
    img:"../../assets/img/reloj.png"
  },
  {
    titulo:"Modulos: 4",
    img:"../../assets/img/modulo.png"
  },
  {
    titulo:"Costo:"+this.precio,
    img:"../../assets/img/costo.png"
  }
]
  
constructor() { }


  ngOnInit(): void {
    this.cursoW=CURSOSW;
  }

}
