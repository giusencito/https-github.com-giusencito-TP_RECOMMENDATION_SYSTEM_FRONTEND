import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostulantRecommendationResultComponent } from './postulant-recommendation-result.component';

describe('PostulantRecommendationResultComponent', () => {
  let component: PostulantRecommendationResultComponent;
  let fixture: ComponentFixture<PostulantRecommendationResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostulantRecommendationResultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostulantRecommendationResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
