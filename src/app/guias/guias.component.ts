import { Component, OnInit } from '@angular/core';
import {GUIAS} from './guias.json'

@Component({
  selector: 'app-guias',
  templateUrl: './guias.component.html',
  styleUrls: ['./guias.component.css']
})
export class GuiasComponent implements OnInit {
  guias:any;
  precio='$600';
  constructor() { }

  ngOnInit(): void {
    this.guias=GUIAS;
  }

}
