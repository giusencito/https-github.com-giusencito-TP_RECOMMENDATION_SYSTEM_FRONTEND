/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SeeOnePostulantComponent } from './see-one-postulant.component';

describe('SeeOnePostulantComponent', () => {
  let component: SeeOnePostulantComponent;
  let fixture: ComponentFixture<SeeOnePostulantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeeOnePostulantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeeOnePostulantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
