import { Component, HostListener, OnInit } from '@angular/core';
import {SERVICIOS} from './servicio.json'
import { Renderer2 } from '@angular/core';


@Component({
  selector: 'app-servicio',
  templateUrl: './servicio.component.html',
  styleUrls: ['./servicio.component.css']
})
export class ServicioComponent implements OnInit {
  status:boolean=true
  servicios:any;
  lisen:any;
  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
    this.servicios=SERVICIOS
    
   
  }

}
