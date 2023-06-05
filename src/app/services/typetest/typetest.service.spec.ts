/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TypetestService } from './typetest.service';

describe('Service: Typetest', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TypetestService]
    });
  });

  it('should ...', inject([TypetestService], (service: TypetestService) => {
    expect(service).toBeTruthy();
  }));
});
