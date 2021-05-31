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
  cargando = true
  constructor(protected service: PeliculaService) { }

  ngOnInit(): void {
    this.conseguirPeliculas()
  }

  private conseguirPeliculas() {
    this.service.conseguirPeliculas().subscribe((res: Pelicula[]) => {
      this.cargando = false
      if(res.length < 1) {
        this.titulo = 'Aviso'
        this.mensaje = `No hay peliculas por reservar`
        this.exito = false
        return
      }
      this.peliculas = res
    }, (err: any) => {
      this.cargando = false
      this.titulo = 'Error'
      this.mensaje = `No se pudieron conseguir las peliculas. Mensaje: ${err.error && err.error.mensaje ? err.error.mensaje : 'No se ha podido establecer conexión con el servidor'}`
      this.exito = false
    })
    this.limpiarAlerta()
  }

  public conseguirPelicula(nombre?: string) {
    if(!nombre || nombre === '') {
      this.conseguirPeliculas()
      return
    }
    this.service.conseguirPelicula(nombre).subscribe((res: Pelicula) => {
      this.peliculas = []
      this.peliculas[0] = res
    }, (err: any) => {
      this.titulo = 'Error'
      this.mensaje = `No se pudo conseguir la pelicula. Mensaje: ${err.error?.mensaje}`
      this.exito = false
    })
    this.limpiarAlerta()
  }

  public reservaExitosa(resultadoExito: boolean) {
    if(resultadoExito) {
      this.conseguirPeliculas()
    }
  }

  private limpiarAlerta() {
    this.titulo = ''
  }

}
