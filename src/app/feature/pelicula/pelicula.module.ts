import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PeliculaRoutingModule } from './pelicula-routing.module';
import { PeliculaComponent } from './components/pelicula/pelicula.component';
import { ListaPeliculasComponent } from './components/lista-peliculas/lista-peliculas.component';
import { CrearPeliculaComponent } from './components/crear-pelicula/crear-pelicula.component';
import { PeliculasComponent } from './components/peliculas/peliculas.component';
import { CoreModule } from '@core/core.module';
import { SharedModule } from '@shared/shared.module';
import { ReservaModule } from '../reserva/reserva.module';


@NgModule({
  declarations: [
    PeliculasComponent,
    PeliculaComponent,
    ListaPeliculasComponent,
    CrearPeliculaComponent
  ],
  imports: [
    CommonModule,
    PeliculaRoutingModule,
    CoreModule,
    SharedModule,
    ReservaModule
  ]
})
export class PeliculaModule { }
