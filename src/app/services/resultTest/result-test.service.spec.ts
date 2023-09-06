/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ResultTestService } from './result-test.service';

describe('Service: ResultTest', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ResultTestService]
    });
  });

  it('should ...', inject([ResultTestService], (service: ResultTestService) => {
    expect(service).toBeTruthy();
  }));
});
