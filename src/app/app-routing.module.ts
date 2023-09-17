import { OrientedTestResultComponent } from './pages/postulant/oriented-test-result/oriented-test-result.component';
import { EditScoreComponent } from './pages/admin/test/edit-score/edit-score.component';
import { EditOptionComponent } from './pages/admin/test/edit-option/edit-option.component';
import { OrientationTestComponent } from './pages/postulant/test/orientation-test/orientation-test.component';
import { ResultEmotionalTestComponent } from './pages/postulant/test/result-emotional-test/result-emotional-test.component';
import { StartTestComponent } from './pages/postulant/test/start-test/start-test.component';
import { PostulantGuard } from './guards/postulant/postulant.guard';
import { ConfigurePostulantComponent } from './pages/postulant/configure-postulant/configure-postulant.component';
import { ChangePasswordComponent } from './pages/authentication/change-password/change-password.component';
import { RegisterComponent } from './pages/authentication/register/register.component';
import { LoginComponent } from './pages/authentication/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotPasswordComponent } from './pages/authentication/forgot-password/forgot-password.component';
import { HomePostulantComponent } from './pages/postulant/home-postulant/home-postulant.component';
import { LoginGuard } from './guards/login.guard';
import { HomeAdminComponent } from './pages/admin/home-admin/home-admin.component';
import { CreateTestComponent } from './pages/admin/test/create-test/create-test.component';
import { CreateSectionComponent } from './pages/admin/test/create-section/create-section.component';
import { CreateQuestionComponent } from './pages/admin/test/create-question/create-question.component';
import { CreateAdminComponent } from './pages/admin/create-admin/create-admin.component';
import { SeePostulantsComponent } from './pages/admin/see-postulants/see-postulants.component';
import { SeeOnePostulantComponent } from './pages/admin/see-one-postulant/see-one-postulant.component';
import { ConfigureAdminComponent } from './pages/admin/configure-admin/configure-admin.component';
import { EmotionalTestComponent } from './pages/postulant/test/emotional-test/emotional-test.component';
import { ResultsComponent } from './pages/postulant/results/results.component';
import { StartOrientationTestComponent } from './pages/postulant/test/start-orientation-test/start-orientation-test.component';
import { EditTestComponent } from './pages/admin/test/edit-test/edit-test.component';
import { EditSectionComponent } from './pages/admin/test/edit-section/edit-section.component';
import { EditQuestionComponent } from './pages/admin/test/edit-question/edit-question.component';
import { EditSectionCreateComponent } from './pages/admin/test/edit-section-create/edit-section-create.component';
import { EditQuestionCreateComponent } from './pages/admin/test/edit-question-create/edit-question-create.component';
import { EditOptionCreateComponent } from './pages/admin/test/edit-option-create/edit-option-create.component';
import { LandingComponent } from './pages/landing/landing.component';
import { RecommendationHistoryComponent } from './pages/postulant/recommendation-history/recommendation-history.component';
import { PostulnatRecommendationHistoryComponent } from './pages/admin/postulnat-recommendation-history/postulnat-recommendation-history.component';
import { PostulantRecommendationTestComponent } from './pages/admin/postulant-recommendation-test/postulant-recommendation-test.component';
import { PostulantRecommendationResultComponent } from './pages/admin/postulant-recommendation-result/postulant-recommendation-result.component';
import { SeeValidationResultsComponent } from './pages/admin/see-validation-results/see-validation-results.component';


const routes: Routes = [

  {path:'',redirectTo:'login',pathMatch:'full'},
  



{path:'login',component:LoginComponent,canActivate: [LoginGuard]},
{path:'register',component:RegisterComponent,canActivate: [LoginGuard]},
{path:'forgot-password',component:ForgotPasswordComponent,canActivate: [LoginGuard]},
{path:'change-password/:code',component:ChangePasswordComponent,canActivate: [LoginGuard]},

{path:'',loadChildren: ()=>import('../app/routes/postulant-reactive/postulant-reactive.module').then(m=>m.PostulantReactiveModule)},

{path:'home-admin',component:HomeAdminComponent},
{path:'see-postulants',component:SeePostulantsComponent},
{path:'see-postulants/:postulant',component:SeeOnePostulantComponent},
{path:'postulant-recommendation-history',component:PostulnatRecommendationHistoryComponent},
{path:'postulant-recommendation-test',component:PostulantRecommendationTestComponent},
{path:'postulant-recommendation-result',component:PostulantRecommendationResultComponent},
{path:'see-validation-results',component:SeeValidationResultsComponent},

{path:'create-test',component:CreateTestComponent},
{path:'edit-test',component:EditTestComponent},
{path:'edit-test/:test/edit-section',component:EditSectionComponent},
{path:'edit-test/:test/edit-section-create',component:EditSectionCreateComponent},

{path:'edit-test/:test/edit-section/:section/edit-question',component:EditQuestionComponent},
{path:'edit-test/:test/edit-section/:section/edit-question-create',component:EditQuestionCreateComponent},



{path:'edit-question/section/:section/:question',component:EditOptionComponent},
{path:'edit-question/:question/create-option',component:EditOptionCreateComponent},

{path:'edit-score/question/:question/:option',component:EditScoreComponent},

{path:'create-test/:id/create-section',component:CreateSectionComponent},
{path:'create-test/:id/create-section/:section/create-question',component:CreateQuestionComponent},
{path:'create-admin',component:CreateAdminComponent},
{path:'configure-admin',component:ConfigureAdminComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
