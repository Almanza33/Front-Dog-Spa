/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ServicioDuenosService } from './servicioDuenos.service';

describe('Service: ServicioDuenos', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServicioDuenosService]
    });
  });

  it('should ...', inject([ServicioDuenosService], (service: ServicioDuenosService) => {
    expect(service).toBeTruthy();
  }));
});
