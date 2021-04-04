import { Component, OnInit } from '@angular/core';
import {CURSOZOOM} from './curso-zoom.json'

@Component({
  selector: 'app-curso-zoom',
  templateUrl: './curso-zoom.component.html',
  styleUrls: ['./curso-zoom.component.css']
})
export class CursoZoomComponent implements OnInit {
  cursoZoom:any;
  constructor() { }

  precio='$3500';
  dia='17';
  mes='Febrero'
  horario='17hs'
 
  lis=[{
    titulo:"Duracion: 3 calses",
    img:"../../assets/img/reloj.png"
  },
  {
    titulo:"Horario: "+ this.horario,
    img:"../../assets/img/modulo.png"
  },
  {
    titulo:"Costo:"+this.precio,
    img:"../../assets/img/costo.png"
  }
]
  ngOnInit(): void {
    this.cursoZoom=CURSOZOOM;
  }

}
