import { HttpResponse } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { HttpService } from '@core/services/http.service';
import { environment } from 'src/environments/environment';
import { Pelicula } from '../model/pelicula';

import { PeliculaService } from './pelicula.service';

describe('PeliculaService', () => {
  let service: PeliculaService;
  let httpMock: HttpTestingController
  let endpoint = environment.endpointAPI

  beforeEach(() => {
    const injector = TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [HttpService, PeliculaService]
    });
    httpMock = injector.inject(HttpTestingController)
    service = TestBed.inject(PeliculaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('deberia crear una pelicula', () => {
    const dummyPelicula = new Pelicula('prueba', 'autor', 'descripcion')
    service.crearPelicula(dummyPelicula).subscribe((res: any) => {
      expect(Object.keys(res)).toContain('valor')
      expect(res.valor).toEqual(1)
    })
    const req = httpMock.expectOne(endpoint + '/peliculas/pelicula')
    expect(req.request.method).toBe('POST')
    req.event(new HttpResponse<object>({
      body: {
        'valor': 1
      }
    }));
  })

  it('deberia listar una pelicula', () => {
    const dummyPelicula = new Pelicula('prueba', 'autor', 'descripcion')
    service.conseguirPeliculas().subscribe((res: any) => {
      expect(res).toEqual(dummyPelicula)
    })
    const req = httpMock.expectOne(endpoint + '/peliculas')
    expect(req.request.method).toBe('GET')
    req.flush(dummyPelicula)
  })

  it('deberia encontrar una pelicula', () => {
    const dummyPelicula = new Pelicula('prueba', 'autor', 'descripcion')
    service.conseguirPelicula(dummyPelicula.nombre).subscribe((res: any) => {
      expect(res).toEqual(dummyPelicula)
    })
    const req = httpMock.expectOne(endpoint + '/peliculas/' + dummyPelicula.nombre)
    expect(req.request.method).toBe('GET')
    req.flush(dummyPelicula)
  })
});
