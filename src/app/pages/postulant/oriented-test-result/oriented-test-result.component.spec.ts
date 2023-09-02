import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrientedTestResultComponent } from './oriented-test-result.component';

describe('OrientedTestResultComponent', () => {
  let component: OrientedTestResultComponent;
  let fixture: ComponentFixture<OrientedTestResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrientedTestResultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrientedTestResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
