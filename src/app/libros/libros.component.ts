import { Component, OnInit } from '@angular/core';
import {LIBROS} from './libros.json'

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css']
})
export class LibrosComponent implements OnInit {
  libros:any;
  constructor() { }
 
  ngOnInit(): void {
    this.libros=LIBROS;
  }

}
