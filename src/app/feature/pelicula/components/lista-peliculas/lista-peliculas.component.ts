import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Pelicula } from '../../shared/model/pelicula';
import { PeliculaService } from '../../shared/service/pelicula.service';

@Component({
  selector: 'app-lista-peliculas',
  templateUrl: './lista-peliculas.component.html',
  styleUrls: ['./lista-peliculas.component.css']
})
export class ListaPeliculasComponent implements OnInit {

  public peliculas: Pelicula[] = [
    {
      nombre: 'Película de Prueba',
      descripcion: 'Descripcion de Prueba lo más larga posible',
      autor: 'Autor de Prueba'
    },
    {
      nombre: 'Película de Prueba',
      descripcion: 'Descripcion de Prueba lo más larga posible',
      autor: 'Autor de Prueba'
    }
  ]

  constructor(protected service: PeliculaService) { }

  ngOnInit(): void { 
    if(this.peliculas) {
      console.log(this.peliculas);
    }
    this.conseguirPeliculas()
  }

  private conseguirPeliculas() {
    return this.service.conseguirPeliculas().subscribe((res: Pelicula[]) => {
      this.peliculas = res
    }, (err: HttpErrorResponse) => {
      console.error(err.message);
    })
  }

  public conseguirPelicula(nombre?: string) {
    if(!nombre) {
      this.conseguirPeliculas()
      return
    }
    return this.service.conseguirPelicula(nombre).subscribe((res: Pelicula) => {
      this.peliculas = []
      this.peliculas[0] = res
    }, (err: HttpErrorResponse) => {
      console.error(err.message);
    })
  }

}
