import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PeliculaRoutingModule } from './pelicula-routing.module';
import { PeliculaComponent } from './components/pelicula/pelicula.component';
import { ListaPeliculasComponent } from './components/lista-peliculas/lista-peliculas.component';
import { CrearPeliculaComponent } from './components/crear-pelicula/crear-pelicula.component';
import { PeliculasComponent } from './components/peliculas/peliculas.component';
import { ReservaPeliculaComponent } from '../reserva/components/reserva-pelicula/reserva-pelicula.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PeliculasComponent,
    PeliculaComponent,
    ListaPeliculasComponent,
    CrearPeliculaComponent,
    ReservaPeliculaComponent
  ],
  imports: [
    CommonModule,
    PeliculaRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PeliculaModule { }
