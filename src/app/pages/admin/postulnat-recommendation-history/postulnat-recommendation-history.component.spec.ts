import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostulnatRecommendationHistoryComponent } from './postulnat-recommendation-history.component';

describe('PostulnatRecommendationHistoryComponent', () => {
  let component: PostulnatRecommendationHistoryComponent;
  let fixture: ComponentFixture<PostulnatRecommendationHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostulnatRecommendationHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostulnatRecommendationHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
