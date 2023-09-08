/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { OrientedSectionResultAdminComponent } from './oriented-section-result-admin.component';

describe('OrientedSectionResultAdminComponent', () => {
  let component: OrientedSectionResultAdminComponent;
  let fixture: ComponentFixture<OrientedSectionResultAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrientedSectionResultAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrientedSectionResultAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
