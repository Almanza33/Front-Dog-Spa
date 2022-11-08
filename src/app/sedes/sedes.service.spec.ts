/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SedesService } from './sedes.service';

describe('Service: Sedes', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SedesService]
    });
  });

  it('should ...', inject([SedesService], (service: SedesService) => {
    expect(service).toBeTruthy();
  }));
});
