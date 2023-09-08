import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostulantRecommendationTestComponent } from './postulant-recommendation-test.component';

describe('PostulantRecommendationTestComponent', () => {
  let component: PostulantRecommendationTestComponent;
  let fixture: ComponentFixture<PostulantRecommendationTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostulantRecommendationTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostulantRecommendationTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
