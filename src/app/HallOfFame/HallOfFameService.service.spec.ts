/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HallOfFameServiceService } from './HallOfFameService.service';

describe('Service: HallOfFameService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HallOfFameServiceService]
    });
  });

  it('should ...', inject([HallOfFameServiceService], (service: HallOfFameServiceService) => {
    expect(service).toBeTruthy();
  }));
});
