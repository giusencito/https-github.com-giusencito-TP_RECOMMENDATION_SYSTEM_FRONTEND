import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrientedSectionResultComponent } from './oriented-section-result.component';

describe('OrientedSectionResultComponent', () => {
  let component: OrientedSectionResultComponent;
  let fixture: ComponentFixture<OrientedSectionResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrientedSectionResultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrientedSectionResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
