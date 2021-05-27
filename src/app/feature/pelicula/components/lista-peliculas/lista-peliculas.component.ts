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
    /*{
      nombre: 'Prueba',
      autor: 'Autor',
      descripcion: 'Descripcion'
    }*/
  ]
  titulo: string
  mensaje: string
  exito: boolean = false
  constructor(protected service: PeliculaService) { }

  ngOnInit(): void {
    this.conseguirPeliculas()
  }

  private conseguirPeliculas() {
    return this.service.conseguirPeliculas().subscribe((res: Pelicula[]) => {
      this.peliculas = res
    }, (err: any) => {
      this.titulo = 'Error'
      this.mensaje = `No se pudieron conseguir las peliculas. Mensaje: ${err.error?.mensaje}`
      this.exito = false
    })
  }

  public conseguirPelicula(nombre?: string) {
    if(!nombre || nombre === '') {
      this.conseguirPeliculas()
      return
    }
    return this.service.conseguirPelicula(nombre).subscribe((res: Pelicula) => {
      this.peliculas = []
      this.peliculas[0] = res
    }, (err: any) => {
      this.titulo = 'Error'
      this.mensaje = `No se pudo conseguir la pelicula. Mensaje: ${err.error?.mensaje}`
      this.exito = false
    })
  }

  public reservaExitosa(resultadoExito: boolean) {
    if(resultadoExito) {
      this.conseguirPeliculas()
    }
  }

}
