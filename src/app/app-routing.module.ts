import { ChangePasswordComponent } from './pages/authentication/change-password/change-password.component';
import { RegisterComponent } from './pages/authentication/register/register.component';
import { LoginComponent } from './pages/authentication/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotPasswordComponent } from './pages/authentication/forgot-password/forgot-password.component';

const routes: Routes = [

{path:'login',component:LoginComponent},
{path:'register',component:RegisterComponent},
{path:'forgot-password',component:ForgotPasswordComponent},
{path:'change-password/:code',component:ChangePasswordComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
