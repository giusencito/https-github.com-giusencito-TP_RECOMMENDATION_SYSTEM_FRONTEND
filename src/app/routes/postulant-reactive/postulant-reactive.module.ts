import { SpinnerComponent } from './../../pages/postulant/spinner/spinner.component';
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
import { ValidationTestComponent } from 'src/app/pages/postulant/test/validation-test/validation-test.component';
import { ResultValidationTestComponent } from 'src/app/pages/postulant/test/result-validation-test/result-validation-test.component';
import { ValidationSectionResultComponent } from 'src/app/pages/postulant/test/validation-section-result/validation-section-result.component';
import { StartValidationTestComponent } from 'src/app/pages/postulant/test/start-validation-test/start-validation-test.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { SpinnerInterceptor } from 'src/app/interceptors/spinner.interceptor';
import { SpinnerModule } from 'src/app/pages/postulant/spinner/spinner.module';


@NgModule({
  declarations: [HomePostulantComponent,ConfigurePostulantComponent,OrientationTestComponent,OrientedTestResultComponent,
    RecommendationHistoryComponent,ResultsComponent,EmotionalTestComponent,ResultEmotionalTestComponent,StartOrientationTestComponent,
  NavigaionPostulantComponent, OrientedSectionResultComponent,StartTestComponent,OneRecommendationHistoryComponent,ResultHistoryComponent, ValidationTestComponent, 
  ResultValidationTestComponent,ValidationSectionResultComponent,StartValidationTestComponent],
  imports: [
    CommonModule,
    PostulantReactiveRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    SpinnerModule
  ],
  providers:[
    {provide:HTTP_INTERCEPTORS,useClass:SpinnerInterceptor,multi:true}
  ]
  
})
export class PostulantReactiveModule { }
