/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { OptionService } from './option.service';

describe('Service: Option', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OptionService]
    });
  });

  it('should ...', inject([OptionService], (service: OptionService) => {
    expect(service).toBeTruthy();
  }));
});
