/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { StartValidationTestComponent } from './start-validation-test.component';

describe('StartValidationTestComponent', () => {
  let component: StartValidationTestComponent;
  let fixture: ComponentFixture<StartValidationTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartValidationTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartValidationTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
