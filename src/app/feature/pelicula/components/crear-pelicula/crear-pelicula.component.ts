import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PeliculaService } from '../../shared/service/pelicula.service';

const LONGITUD_MINIMA_PERMITIDA_TEXTO = 3;
const LONGITUD_MAXIMA_PERMITIDA_TEXTO = 20;

@Component({
  selector: 'app-crear-pelicula',
  templateUrl: './crear-pelicula.component.html',
  styleUrls: ['./crear-pelicula.component.css']
})
export class CrearPeliculaComponent implements OnInit {

  peliculaForm: FormGroup

  constructor(protected http: PeliculaService) { }

  ngOnInit(): void {
    this.construirForm()
  }

  crear() {
    this.http.crearPelicula(this.peliculaForm.value)
  }

  private construirForm() {
    this.peliculaForm = new FormGroup({
      nombre: new FormControl('', [Validators.required]),
      autor: new FormControl('', [Validators.required, Validators.minLength(LONGITUD_MINIMA_PERMITIDA_TEXTO), Validators.maxLength(LONGITUD_MAXIMA_PERMITIDA_TEXTO)]),
      descripcion: new FormControl('', [Validators.required, Validators.minLength(LONGITUD_MINIMA_PERMITIDA_TEXTO), Validators.maxLength(LONGITUD_MAXIMA_PERMITIDA_TEXTO)])
    })
  }

}
