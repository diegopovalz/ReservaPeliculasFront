import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpService } from '@core/services/http.service';
import { of } from 'rxjs';
import { PeliculaService } from '../../shared/service/pelicula.service';

import { CrearPeliculaComponent } from './crear-pelicula.component';

describe('CrearPeliculaComponent', () => {
  let component: CrearPeliculaComponent;
  let fixture: ComponentFixture<CrearPeliculaComponent>;
  let peliculaService: PeliculaService

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearPeliculaComponent ],
      imports: [
        CommonModule,
        HttpClientModule,
        RouterTestingModule,
        ReactiveFormsModule,
        FormsModule
      ],
      providers: [HttpService, PeliculaService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearPeliculaComponent);
    component = fixture.componentInstance;
    peliculaService = TestBed.inject(PeliculaService)
    spyOn(peliculaService, 'crearPelicula').and.returnValue(
      of(1)
    )
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('deberia fallar cuando el formulario esta vacio', () => {
    expect(component.peliculaForm.valid).toBeFalsy()
  })

  it('deberia fallar cuando un campo tiene menos de 5 caracteres', () => {
    expect(component.peliculaForm.valid).toBeFalsy()
    component.peliculaForm.controls.nombre.setValue('Test')
    component.peliculaForm.controls.autor.setValue('Autor')
    component.peliculaForm.controls.descripcion.setValue('Descripcion')
    expect(component.peliculaForm.valid).toBeFalsy()
  })

  it('deberia ser valido con campos llenos', () => {
    expect(component.peliculaForm.valid).toBeFalsy()
    component.peliculaForm.controls.nombre.setValue('Test1')
    component.peliculaForm.controls.autor.setValue('Autor')
    component.peliculaForm.controls.descripcion.setValue('Descripcion')
    expect(component.peliculaForm.valid).toBeTruthy()
    component.crear();
    expect(component.titulo).toBe('Película creada')
  })
});
