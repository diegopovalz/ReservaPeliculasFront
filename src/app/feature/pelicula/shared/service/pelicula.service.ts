import { Injectable } from '@angular/core';
import { HttpService } from '@core/services/http.service';
import { environment } from 'src/environments/environment';
import { Pelicula } from '../model/pelicula';

@Injectable({
  providedIn: 'root'
})
export class PeliculaService {

  constructor(protected http: HttpService) { }

  public conseguirPeliculas() {
    return this.http.doGet<Pelicula[]>(`${environment.endpointAPI}/peliculas`, this.http.optsName('Listar peliculas'))
  }

  public conseguirPelicula(nombre: string) {
    return this.http.doGet<Pelicula>(`${environment.endpointAPI}/peliculas/${nombre}`, this.http.optsName('Encontrar pelicula'))
  }

  public crearPelicula(pelicula: Pelicula) {
    console.log(`${environment.endpointAPI}/peliculas/pelicula`)
    return this.http.doPost<Pelicula, boolean>(`${environment.endpointAPI}/peliculas/pelicula`, pelicula, this.http.optsName('Crear pelicula'))
  }
}
