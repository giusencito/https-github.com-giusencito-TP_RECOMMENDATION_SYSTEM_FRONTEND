/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { StyleManagerService } from './style-manager.service';

describe('Service: StyleManager', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StyleManagerService]
    });
  });

  it('should ...', inject([StyleManagerService], (service: StyleManagerService) => {
    expect(service).toBeTruthy();
  }));
});
