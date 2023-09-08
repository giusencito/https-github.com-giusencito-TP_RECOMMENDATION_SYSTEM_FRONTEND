import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneRecommendationHistoryComponent } from './one-recommendation-history.component';

describe('OneRecommendationHistoryComponent', () => {
  let component: OneRecommendationHistoryComponent;
  let fixture: ComponentFixture<OneRecommendationHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OneRecommendationHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OneRecommendationHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
