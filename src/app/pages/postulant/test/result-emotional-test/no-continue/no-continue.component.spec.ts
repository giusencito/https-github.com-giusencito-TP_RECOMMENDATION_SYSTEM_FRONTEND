/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NoContinueComponent } from './no-continue.component';

describe('NoContinueComponent', () => {
  let component: NoContinueComponent;
  let fixture: ComponentFixture<NoContinueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoContinueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoContinueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
