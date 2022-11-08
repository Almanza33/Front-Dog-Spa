/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PackServiciosService } from './packServicios.service';

describe('Service: PackServicios', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PackServiciosService]
    });
  });

  it('should ...', inject([PackServiciosService], (service: PackServiciosService) => {
    expect(service).toBeTruthy();
  }));
});
