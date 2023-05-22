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

const routes: Routes = [

{path:'login',component:LoginComponent,canActivate: [LoginGuard]},
{path:'register',component:RegisterComponent,canActivate: [LoginGuard]},
{path:'forgot-password',component:ForgotPasswordComponent,canActivate: [LoginGuard]},
{path:'change-password/:code',component:ChangePasswordComponent,canActivate: [LoginGuard]},
{path:'home-postulant',component:HomePostulantComponent,canActivate: [PostulantGuard]},
{path:'configure-postulant',component:ConfigurePostulantComponent,canActivate: [PostulantGuard]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
