/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CourserecomendationService } from './courserecomendation.service';

describe('Service: Courserecomendation', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CourserecomendationService]
    });
  });

  it('should ...', inject([CourserecomendationService], (service: CourserecomendationService) => {
    expect(service).toBeTruthy();
  }));
});
