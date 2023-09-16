import { StartTestComponent } from './../../pages/postulant/test/start-test/start-test.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostulantGuard } from 'src/app/guards/postulant/postulant.guard';
import { ConfigurePostulantComponent } from 'src/app/pages/postulant/configure-postulant/configure-postulant.component';
import { HomePostulantComponent } from 'src/app/pages/postulant/home-postulant/home-postulant.component';
import { OneRecommendationHistoryComponent } from 'src/app/pages/postulant/one-recommendation-history/one-recommendation-history.component';
import { ResultHistoryComponent } from 'src/app/pages/postulant/one-recommendation-history/resultHistory/resultHistory.component';
import { OrientedTestResultComponent } from 'src/app/pages/postulant/oriented-test-result/oriented-test-result.component';
import { RecommendationHistoryComponent } from 'src/app/pages/postulant/recommendation-history/recommendation-history.component';
import { ResultsComponent } from 'src/app/pages/postulant/results/results.component';
import { EmotionalTestComponent } from 'src/app/pages/postulant/test/emotional-test/emotional-test.component';
import { OrientationTestComponent } from 'src/app/pages/postulant/test/orientation-test/orientation-test.component';
import { ResultEmotionalTestComponent } from 'src/app/pages/postulant/test/result-emotional-test/result-emotional-test.component';
import { ResultValidationTestComponent } from 'src/app/pages/postulant/test/result-validation-test/result-validation-test.component';
import { StartOrientationTestComponent } from 'src/app/pages/postulant/test/start-orientation-test/start-orientation-test.component';
import { StartValidationTestComponent } from 'src/app/pages/postulant/test/start-validation-test/start-validation-test.component';
import { ValidationTestComponent } from 'src/app/pages/postulant/test/validation-test/validation-test.component';

const routes: Routes = [

  {path:'home-postulant',component:HomePostulantComponent,canActivate: [PostulantGuard]},
  {path:'configure-postulant',component:ConfigurePostulantComponent,canActivate: [PostulantGuard]},
  {path:'start-test',component:StartTestComponent},
  {path:'start-validation-test/:token/:user',component:StartValidationTestComponent},
  {path:'emotional-test',component:EmotionalTestComponent},
  {path:'orientation-test',component:OrientationTestComponent},
  {path:'validation-test',component:ValidationTestComponent},
  {path:'result-emotional-test/:totalscore',component:ResultEmotionalTestComponent},
  {path:'start-orientation-test',component:StartOrientationTestComponent},
  {path:'orientation-test-result/:resultTest',component:OrientedTestResultComponent},
  {path:'validation-test-result/:resultTest',component:ResultValidationTestComponent},
  {path:'results-jobs/:resulttest',component:ResultsComponent},
  {path:'recommendation-history',component:RecommendationHistoryComponent},
  {path:'one-recommendation-history',component:OneRecommendationHistoryComponent},
  {path:'one-recommendation-history-result',component:ResultHistoryComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostulantReactiveRoutingModule { }
