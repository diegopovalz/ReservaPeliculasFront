import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PeliculaService } from '../../shared/service/pelicula.service';

const LONGITUD_MINIMA_PERMITIDA_TEXTO = 5;
const LONGITUD_MAXIMA_PERMITIDA_NOMBRE_O_AUTOR = 30;
const LONGITUD_MAXIMA_PERMITIDA_DESCRIPCION = 40;

@Component({
  selector: 'app-crear-pelicula',
  templateUrl: './crear-pelicula.component.html',
  styleUrls: ['./crear-pelicula.component.css']
})
export class CrearPeliculaComponent implements OnInit {

  public peliculaForm: FormGroup
  titulo: string
  mensaje: string
  exito: boolean = false

  constructor(protected http: PeliculaService) { }

  ngOnInit(): void {
    this.construirForm()
  }

  public crear() {
    this.http.crearPelicula(this.peliculaForm.value).subscribe((res: any) => {
      this.titulo = 'Película creada'
      this.mensaje = `La película fue creada con éxito con ID ${res.valor}`
      this.exito = true
      this.peliculaForm.reset()
    }, (err: any) => {
      this.titulo = 'Error'
      this.mensaje = `La película no pudo ser creada. Mensaje: ${err.error?.mensaje}`
      this.exito = false
    })
    this.limpiarAlerta()
  }

  private construirForm() {
    this.peliculaForm = new FormGroup({
      nombre: new FormControl('', [Validators.required, Validators.minLength(LONGITUD_MINIMA_PERMITIDA_TEXTO), Validators.maxLength(LONGITUD_MAXIMA_PERMITIDA_NOMBRE_O_AUTOR)]),
      autor: new FormControl('', [Validators.required, Validators.minLength(LONGITUD_MINIMA_PERMITIDA_TEXTO), Validators.maxLength(LONGITUD_MAXIMA_PERMITIDA_NOMBRE_O_AUTOR)]),
      descripcion: new FormControl('', [Validators.required, Validators.minLength(LONGITUD_MINIMA_PERMITIDA_TEXTO), Validators.maxLength(LONGITUD_MAXIMA_PERMITIDA_DESCRIPCION)])
    })
  }

  private limpiarAlerta() {
    this.titulo = ''
    this.mensaje = ''
  }

}
