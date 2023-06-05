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


const routes: Routes = [

{path:'login',component:LoginComponent,canActivate: [LoginGuard]},
{path:'register',component:RegisterComponent,canActivate: [LoginGuard]},
{path:'forgot-password',component:ForgotPasswordComponent,canActivate: [LoginGuard]},
{path:'change-password/:code',component:ChangePasswordComponent,canActivate: [LoginGuard]},
{path:'home-postulant',component:HomePostulantComponent,canActivate: [PostulantGuard]},
{path:'home-admin',component:HomeAdminComponent},
{path:'create-test',component:CreateTestComponent},
{path:'create-test/:id/create-section',component:CreateSectionComponent},
{path:'create-test/:id/create-section/:section/create-question',component:CreateQuestionComponent},
{path:'configure-postulant',component:ConfigurePostulantComponent,canActivate: [PostulantGuard]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
