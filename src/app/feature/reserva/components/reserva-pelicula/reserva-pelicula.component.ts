import { Component, Input, OnInit } from '@angular/core';
import { Pelicula } from 'src/app/feature/pelicula/shared/model/pelicula';

@Component({
  selector: 'app-reserva-pelicula',
  templateUrl: './reserva-pelicula.component.html',
  styleUrls: ['./reserva-pelicula.component.css']
})
export class ReservaPeliculaComponent implements OnInit {

  @Input() pelicula: Pelicula = {}
  public tipo: string
  public valor: number

  constructor() { }

  ngOnInit(): void {
  }

  public conTipo(tipo: string) {
    this.tipo = tipo
  }

  public conValor(valor: number) {
    this.valor = valor
  }

  public limpiarCampos() {
    this.tipo = ''
  }

}
