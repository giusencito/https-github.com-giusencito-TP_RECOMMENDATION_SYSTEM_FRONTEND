import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommendationHistoryComponent } from './recommendation-history.component';

describe('RecommendationHistoryComponent', () => {
  let component: RecommendationHistoryComponent;
  let fixture: ComponentFixture<RecommendationHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecommendationHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecommendationHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
