/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { InterviewquestionService } from './interviewquestion.service';

describe('Service: Interviewquestion', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InterviewquestionService]
    });
  });

  it('should ...', inject([InterviewquestionService], (service: InterviewquestionService) => {
    expect(service).toBeTruthy();
  }));
});
