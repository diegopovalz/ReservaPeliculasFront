import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '@core/core.module';
import { SharedModule } from '@shared/shared.module';
import { ReservaPeliculaComponent } from './components/reserva-pelicula/reserva-pelicula.component';

@NgModule({
  declarations: [
    ReservaPeliculaComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    SharedModule
  ],
  exports: [
    ReservaPeliculaComponent
  ]
})
export class ReservaModule { }
