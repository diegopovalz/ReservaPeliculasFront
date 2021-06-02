import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpService } from '@core/services/http.service';
import { of } from 'rxjs';
import { ReservaService } from '../../shared/service/reserva.service';

import { ReservaPeliculaComponent } from './reserva-pelicula.component';

describe('ReservaPeliculaComponent', () => {
  let component: ReservaPeliculaComponent;
  let fixture: ComponentFixture<ReservaPeliculaComponent>;
  let reservaService: ReservaService

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservaPeliculaComponent ],
      imports: [
        CommonModule,
        HttpClientModule,
        RouterTestingModule,
        ReactiveFormsModule,
        FormsModule
      ],
      providers: [HttpService, ReservaService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservaPeliculaComponent);
    component = fixture.componentInstance;
    reservaService = TestBed.inject(ReservaService)
    spyOn(reservaService, 'crearReserva').and.returnValue(
      of('2021-05-31')
    )
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('deberia fallar cuando el formulario esta vacio', () => {
    expect(component.crearReservaForm.valid).toBeFalsy()
  })

  it('deberia ser valido cuando se llenan los campos', () => {
    expect(component.crearReservaForm.valid).toBeFalsy()
    component.crearReservaForm.controls.tipoReserva.setValue('ESTANDAR')
    component.crearReservaForm.controls.fechaReserva.setValue('05-24-2021')
    expect(component.crearReservaForm.valid).toBeTruthy()
    component.crearReserva();
    expect(component.mensaje).toContain('La reserva fue creada con éxito')
  })
});
