import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { HttpService } from '@core/services/http.service';

import { PeliculaService } from './pelicula.service';

describe('PeliculaService', () => {
  let service: PeliculaService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ],
      providers: [HttpService]
    });
    service = TestBed.inject(PeliculaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
