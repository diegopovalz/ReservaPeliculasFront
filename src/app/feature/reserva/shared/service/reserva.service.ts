import { Injectable } from '@angular/core';
import { HttpService } from '@core/services/http.service';
import { environment } from 'src/environments/environment';
import { Reserva } from '../model/reserva';

@Injectable({
  providedIn: 'root'
})
export class ReservaService {

  private endpoint = environment.endpointAPI

  constructor(protected http: HttpService) { }

  public crearReserva(reserva: Reserva) {
    return this.http.doPost<Reserva, boolean>(`${this.endpoint}/`, reserva, this.http.optsName('Crear reserva'))
  }
}
