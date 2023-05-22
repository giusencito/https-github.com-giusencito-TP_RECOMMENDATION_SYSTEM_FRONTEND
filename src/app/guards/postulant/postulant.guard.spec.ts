import { TestBed } from '@angular/core/testing';

import { PostulantGuard } from './postulant.guard';

describe('PostulantGuard', () => {
  let guard: PostulantGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(PostulantGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
