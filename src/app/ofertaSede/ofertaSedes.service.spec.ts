/* tslint:disable:no-unused-variable */
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed, async, inject } from '@angular/core/testing';
import { ofertaSedeService } from './ofertaSede.service';

describe('Service: ofertaSedes', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ofertaSedeService]
    });
  });

  it('should ...', inject([ofertaSedeService], (service: ofertaSedeService) => {
    expect(service).toBeTruthy();
  }));
});
