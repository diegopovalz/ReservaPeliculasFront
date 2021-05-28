import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { HttpService } from '@core/services/http.service';
import { PeliculaService } from 'src/app/feature/pelicula/shared/service/pelicula.service';

import { TrmService } from './trm.service';

describe('TrmService', () => {
  let service: TrmService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ],
      providers: [HttpService, PeliculaService]
    });
    service = TestBed.inject(TrmService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
