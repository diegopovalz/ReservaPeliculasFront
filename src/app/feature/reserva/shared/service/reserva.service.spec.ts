import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { HttpService } from '@core/services/http.service';

import { ReservaService } from './reserva.service';

describe('ReservaService', () => {
  let service: ReservaService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ],
      providers: [HttpService]
    });
    service = TestBed.inject(ReservaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
