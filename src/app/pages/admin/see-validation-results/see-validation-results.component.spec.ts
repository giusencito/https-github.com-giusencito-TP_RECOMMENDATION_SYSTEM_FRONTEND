import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeeValidationResultsComponent } from './see-validation-results.component';

describe('SeeValidationResultsComponent', () => {
  let component: SeeValidationResultsComponent;
  let fixture: ComponentFixture<SeeValidationResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeeValidationResultsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeeValidationResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
