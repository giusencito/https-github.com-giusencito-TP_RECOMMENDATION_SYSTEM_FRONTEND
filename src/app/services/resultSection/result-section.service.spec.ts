/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ResultSectionService } from './result-section.service';

describe('Service: ResultSection', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ResultSectionService]
    });
  });

  it('should ...', inject([ResultSectionService], (service: ResultSectionService) => {
    expect(service).toBeTruthy();
  }));
});
