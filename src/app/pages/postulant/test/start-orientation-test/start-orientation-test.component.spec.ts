/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { StartOrientationTestComponent } from './start-orientation-test.component';

describe('StartOrientationTestComponent', () => {
  let component: StartOrientationTestComponent;
  let fixture: ComponentFixture<StartOrientationTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartOrientationTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartOrientationTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
