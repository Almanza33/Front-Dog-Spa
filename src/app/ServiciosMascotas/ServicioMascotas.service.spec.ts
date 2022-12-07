/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ServicioMascotasService } from './ServicioMascotas.service';

describe('Service: ServicioMascotas', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServicioMascotasService]
    });
  });

  it('should ...', inject([ServicioMascotasService], (service: ServicioMascotasService) => {
    expect(service).toBeTruthy();
  }));
});
