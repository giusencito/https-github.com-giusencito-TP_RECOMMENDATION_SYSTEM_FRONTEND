/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NavigaionPostulantComponent } from './navigaion-postulant.component';

describe('NavigaionPostulantComponent', () => {
  let component: NavigaionPostulantComponent;
  let fixture: ComponentFixture<NavigaionPostulantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavigaionPostulantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigaionPostulantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
