/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HydridService } from './hydrid.service';

describe('Service: Hydrid', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HydridService]
    });
  });

  it('should ...', inject([HydridService], (service: HydridService) => {
    expect(service).toBeTruthy();
  }));
});
