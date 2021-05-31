import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Pelicula } from 'src/app/feature/pelicula/shared/model/pelicula';
import { Reserva } from '../../shared/model/reserva';
import { ReservaService } from '../../shared/service/reserva.service';

@Component({
  selector: 'app-reserva-pelicula',
  templateUrl: './reserva-pelicula.component.html',
  styleUrls: ['./reserva-pelicula.component.css']
})
export class ReservaPeliculaComponent implements OnInit {

  @Input() pelicula: Pelicula = {}
  @ViewChild('cerrarBtn') cerrarBtn: ElementRef
  @Output() reservado = new EventEmitter<boolean>();
  crearReservaForm: FormGroup

  valorReserva: number | string
  fechaActual: string
  reserva: Reserva = {}
  titulo: string
  mensaje: string
  exito: boolean = false

  constructor(private http: ReservaService) { }

  ngOnInit(): void {
    this.anularFechasAnteriores()
    this.construirForm()
  }

  private anularFechasAnteriores() {
    let date = new Date()
    const anio = date.getFullYear()
    const mes: string = ((date.getMonth() + 1) + "").padStart(2, '0')
    const dia: string = (date.getDate() + "").padStart(2, '0')
    this.fechaActual = `${anio}-${mes}-${dia}`
  }

  public asignarTipo(tipo: string) {
    this.valorReserva = tipo === 'ESTANDAR' ? 20 : tipo === 'PREMIUM' ? 50 : ''
    this.reserva.tipoReserva = tipo
    if(!this.reserva.pelicula) {
      this.reserva.pelicula = this.pelicula
    }
  }

  public conFecha(fecha: any) {
    this.reserva.fechaReserva = fecha.split("-").reverse().join("-")
  }

  public limpiarCampos() {
    this.reserva.tipoReserva = ''
    this.crearReservaForm.reset()
  }

  public crearReserva() {    
    this.http.crearReserva(this.reserva).subscribe((res: any) => {
      this.titulo = 'Reserva creada'
      this.mensaje = `La reserva fue creada con éxito. Fecha de devolución: ${res.valor}`
      this.exito = true
      this.reservado.emit(true)
    }, (err: any) => {
      this.titulo = 'Error'
      this.mensaje = `La película no pudo ser creada. Mensaje: ${err.error?.mensaje}`
      this.exito = false
      this.reservado.emit(false)
    })
    this.cerrarModal()
  }

  private construirForm() {
    this.crearReservaForm = new FormGroup({
      tipoReserva: new FormControl('', [Validators.required]),
      fechaReserva: new FormControl('', [Validators.required])
    })
  }

  private cerrarModal() {
    this.cerrarBtn.nativeElement.click()
    this.limpiarAlerta()
  }

  private limpiarAlerta() {
    this.titulo = ''
    this.mensaje = ''
  }

}
