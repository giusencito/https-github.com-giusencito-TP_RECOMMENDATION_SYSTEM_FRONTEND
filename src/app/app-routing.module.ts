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


const routes: Routes = [

{path:'login',component:LoginComponent,canActivate: [LoginGuard]},
{path:'register',component:RegisterComponent,canActivate: [LoginGuard]},
{path:'forgot-password',component:ForgotPasswordComponent,canActivate: [LoginGuard]},
{path:'change-password/:code',component:ChangePasswordComponent,canActivate: [LoginGuard]},
{path:'home-postulant',component:HomePostulantComponent,canActivate: [PostulantGuard]},
{path:'start-test',component:StartTestComponent},
{path:'emotional-test',component:EmotionalTestComponent},
{path:'result-emotional-test/:totalscore',component:ResultEmotionalTestComponent},
{path:'results-jobs',component:ResultsComponent},

{path:'home-admin',component:HomeAdminComponent},
{path:'see-postulants',component:SeePostulantsComponent},
{path:'see-postulants/:postulant',component:SeeOnePostulantComponent},
{path:'create-test',component:CreateTestComponent},
{path:'create-test/:id/create-section',component:CreateSectionComponent},
{path:'create-test/:id/create-section/:section/create-question',component:CreateQuestionComponent},
{path:'create-admin',component:CreateAdminComponent},
{path:'configure-admin',component:ConfigureAdminComponent},

{path:'configure-postulant',component:ConfigurePostulantComponent,canActivate: [PostulantGuard]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
