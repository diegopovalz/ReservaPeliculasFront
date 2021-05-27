import { Component, Input, OnInit } from '@angular/core';
import { Pelicula } from '../../shared/model/pelicula';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent implements OnInit {

  @Input() peliculas: Pelicula[]

  constructor() { }

  ngOnInit(): void {
  }

}
