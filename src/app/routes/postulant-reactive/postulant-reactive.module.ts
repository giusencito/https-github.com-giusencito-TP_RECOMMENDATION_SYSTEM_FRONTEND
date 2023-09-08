import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostulantReactiveRoutingModule } from './postulant-reactive-routing.module';
import { HomePostulantComponent } from 'src/app/pages/postulant/home-postulant/home-postulant.component';
import { ConfigurePostulantComponent } from 'src/app/pages/postulant/configure-postulant/configure-postulant.component';
import { OrientedTestResultComponent } from 'src/app/pages/postulant/oriented-test-result/oriented-test-result.component';
import { RecommendationHistoryComponent } from 'src/app/pages/postulant/recommendation-history/recommendation-history.component';
import { ResultsComponent } from 'src/app/pages/postulant/results/results.component';
import { EmotionalTestComponent } from 'src/app/pages/postulant/test/emotional-test/emotional-test.component';
import { OrientationTestComponent } from 'src/app/pages/postulant/test/orientation-test/orientation-test.component';
import { ResultEmotionalTestComponent } from 'src/app/pages/postulant/test/result-emotional-test/result-emotional-test.component';
import { StartOrientationTestComponent } from 'src/app/pages/postulant/test/start-orientation-test/start-orientation-test.component';
import { NavigaionPostulantComponent } from 'src/app/pages/postulant/navigaion-postulant/navigaion-postulant.component';
import { OrientedSectionResultComponent } from 'src/app/pages/postulant/oriented-section-result/oriented-section-result.component';
import { MaterialModule } from 'src/app/material/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StartTestComponent } from 'src/app/pages/postulant/test/start-test/start-test.component';
import { OneRecommendationHistoryComponent } from 'src/app/pages/postulant/one-recommendation-history/one-recommendation-history.component';
import { ResultHistoryComponent } from 'src/app/pages/postulant/one-recommendation-history/resultHistory/resultHistory.component';


@NgModule({
  declarations: [HomePostulantComponent,ConfigurePostulantComponent,OrientationTestComponent,OrientedTestResultComponent,
    RecommendationHistoryComponent,ResultsComponent,EmotionalTestComponent,ResultEmotionalTestComponent,StartOrientationTestComponent,
  NavigaionPostulantComponent, OrientedSectionResultComponent,StartTestComponent,OneRecommendationHistoryComponent,ResultHistoryComponent],
  imports: [
    CommonModule,
    PostulantReactiveRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class PostulantReactiveModule { }
