
import { HttpResponse } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { HttpService } from '@core/services/http.service';
import { Pelicula } from 'src/app/feature/pelicula/shared/model/pelicula';
import { environment } from 'src/environments/environment';
import { Reserva } from '../model/reserva';

import { ReservaService } from './reserva.service';

describe('ReservaService', () => {
  let service: ReservaService;
  let httpMock: HttpTestingController
  let endpoint = environment.endpointAPI

  beforeEach(() => {
    const injector = TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [HttpService, ReservaService]
    });
    httpMock = injector.inject(HttpTestingController)
    service = TestBed.inject(ReservaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('deberia crear una reserva', () => {
    const dummyPelicula = new Pelicula('Prueba', 'Autor', 'Descripcion')
    const dummyReserva = new Reserva('ESTANDAR', '24-03-2021', dummyPelicula)
    service.crearReserva(dummyReserva).subscribe((res: any) => {
      expect(Object.keys(res)).toContain('valor')
      expect(res.valor).toEqual('2021-05-31')
    })
    const req = httpMock.expectOne(endpoint + '/')
    expect(req.request.method).toBe('POST')
    req.event(new HttpResponse<object>({
      body: {
        'valor': '2021-05-31'
      }
    }));
  })
});
