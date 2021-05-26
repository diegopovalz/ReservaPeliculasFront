import { Injectable } from '@angular/core';
import { HttpService } from '@core/services/http.service';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TRMResponse } from '../model/trm';

@Injectable({
  providedIn: 'root'
})
export class TrmService {

  private fechaActual: Date = new Date()

  constructor(protected httpService: HttpService) { }

  public conseguirTRM(): Observable<TRMResponse> {
    let anio = this.fechaActual.getFullYear()
    let mes: string = ((this.fechaActual.getMonth() + 1) + "").padStart(2, '0')
    let dia: string = (this.fechaActual.getDate() + "").padStart(2, '0')
    return this.httpService.doGet<TRMResponse>(`${environment.endpointTRM}?date=${anio}-${mes}-${dia}`)
  }
}
