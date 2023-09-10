/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SelectedjobService } from './selectedjob.service';

describe('Service: Selectedjob', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SelectedjobService]
    });
  });

  it('should ...', inject([SelectedjobService], (service: SelectedjobService) => {
    expect(service).toBeTruthy();
  }));
});
