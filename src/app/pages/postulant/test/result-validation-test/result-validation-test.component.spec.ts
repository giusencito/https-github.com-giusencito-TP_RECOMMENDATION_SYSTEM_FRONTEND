/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ResultValidationTestComponent } from './result-validation-test.component';

describe('ResultValidationTestComponent', () => {
  let component: ResultValidationTestComponent;
  let fixture: ComponentFixture<ResultValidationTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultValidationTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultValidationTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
