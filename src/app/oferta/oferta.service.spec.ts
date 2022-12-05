/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { OfertaService } from './oferta.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('Service: Oferta', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [OfertaService]
    });
  });

  it('should ...', inject([OfertaService], (service: OfertaService) => {
    expect(service).toBeTruthy();
  }));
});
