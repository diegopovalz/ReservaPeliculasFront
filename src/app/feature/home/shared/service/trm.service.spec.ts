import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { HttpService } from '@core/services/http.service';
import { environment } from 'src/environments/environment';
import { TRMResponse } from '../model/trm';

import { TrmService } from './trm.service';

describe('TrmService', () => {
  let service: TrmService;
  let httpMock: HttpTestingController
  const endpointTrm = environment.endpointTRM

  beforeEach(() => {
    const injector = TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [HttpService, TrmService]
    });
    httpMock = injector.inject(HttpTestingController)
    service = TestBed.inject(TrmService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('deberia consultar trm', () => {
    let fechaActual = new Date()
    let anio = fechaActual.getFullYear()
    let mes: string = ((fechaActual.getMonth() + 1) + "").padStart(2, '0')
    let dia: string = (fechaActual.getDate() + "").padStart(2, '0')
    service.conseguirTRM().subscribe((res: TRMResponse) => {
      expect(Object.keys(res)).toContain('data')
      expect(Object.keys(res)).toContain('web')
      expect(Object.keys(res.data)).toContain('unit')
      expect(Object.keys(res.data)).toContain('value')
    })
    const req = httpMock.expectOne(`${endpointTrm}?date=${anio}-${mes}-${dia}`)
    expect(req.request.method).toBe('GET');
  })
});
