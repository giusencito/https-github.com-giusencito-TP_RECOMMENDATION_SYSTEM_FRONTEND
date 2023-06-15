/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SeePostulantsComponent } from './see-postulants.component';

describe('SeePostulantsComponent', () => {
  let component: SeePostulantsComponent;
  let fixture: ComponentFixture<SeePostulantsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeePostulantsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeePostulantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
