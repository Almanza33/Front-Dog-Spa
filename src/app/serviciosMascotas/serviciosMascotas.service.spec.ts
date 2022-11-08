/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ServiciosMascotasService } from './serviciosMascotas.service';

describe('Service: ServiciosMascotas', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServiciosMascotasService]
    });
  });

  it('should ...', inject([ServiciosMascotasService], (service: ServiciosMascotasService) => {
    expect(service).toBeTruthy();
  }));
});
