import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrientationTestComponent } from './orientation-test.component';

describe('OrientationTestComponent', () => {
  let component: OrientationTestComponent;
  let fixture: ComponentFixture<OrientationTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrientationTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrientationTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
