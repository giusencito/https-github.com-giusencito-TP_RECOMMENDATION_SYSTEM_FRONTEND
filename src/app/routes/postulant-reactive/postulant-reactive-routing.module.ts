import { StartTestComponent } from './../../pages/postulant/test/start-test/start-test.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostulantGuard } from 'src/app/guards/postulant/postulant.guard';
import { ConfigurePostulantComponent } from 'src/app/pages/postulant/configure-postulant/configure-postulant.component';
import { HomePostulantComponent } from 'src/app/pages/postulant/home-postulant/home-postulant.component';
import { OrientedTestResultComponent } from 'src/app/pages/postulant/oriented-test-result/oriented-test-result.component';
import { RecommendationHistoryComponent } from 'src/app/pages/postulant/recommendation-history/recommendation-history.component';
import { ResultsComponent } from 'src/app/pages/postulant/results/results.component';
import { EmotionalTestComponent } from 'src/app/pages/postulant/test/emotional-test/emotional-test.component';
import { OrientationTestComponent } from 'src/app/pages/postulant/test/orientation-test/orientation-test.component';
import { ResultEmotionalTestComponent } from 'src/app/pages/postulant/test/result-emotional-test/result-emotional-test.component';
import { StartOrientationTestComponent } from 'src/app/pages/postulant/test/start-orientation-test/start-orientation-test.component';

const routes: Routes = [

  {path:'home-postulant',component:HomePostulantComponent,canActivate: [PostulantGuard]},
  {path:'configure-postulant',component:ConfigurePostulantComponent,canActivate: [PostulantGuard]},
  {path:'start-test',component:StartTestComponent},
  {path:'emotional-test',component:EmotionalTestComponent},
  {path:'orientation-test',component:OrientationTestComponent},
  {path:'result-emotional-test/:totalscore',component:ResultEmotionalTestComponent},
  {path:'start-orientation-test',component:StartOrientationTestComponent},
  {path:'orientation-test-result/:resultTest',component:OrientedTestResultComponent},
  {path:'results-jobs/:resulttest',component:ResultsComponent},
  {path:'recommendation-history',component:RecommendationHistoryComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostulantReactiveRoutingModule { }
