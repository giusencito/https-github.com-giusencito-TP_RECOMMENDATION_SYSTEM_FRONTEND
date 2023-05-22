/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PostulantService } from './postulant.service';

describe('Service: Postulant', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PostulantService]
    });
  });

  it('should ...', inject([PostulantService], (service: PostulantService) => {
    expect(service).toBeTruthy();
  }));
});
