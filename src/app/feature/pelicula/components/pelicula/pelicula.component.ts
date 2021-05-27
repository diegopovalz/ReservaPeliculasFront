import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pelicula } from '../../shared/model/pelicula';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent implements OnInit {

  @Input() peliculas: Pelicula[]
  @Output() reservado = new EventEmitter<boolean>()
  public peliculaSeleccionada: Pelicula

  constructor() { }

  ngOnInit(): void {
  }

  public conPelicula(pelicula: Pelicula) {
    this.peliculaSeleccionada = pelicula
  }

  public enReserva(reserva: boolean) {
    this.reservado.emit(reserva)
  }

}
