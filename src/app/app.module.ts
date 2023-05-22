import { ConfigurePostulantComponent } from './pages/postulant/configure-postulant/configure-postulant.component';
import { ForgotPasswordComponent } from './pages/authentication/forgot-password/forgot-password.component';
import { TermsDialogComponent } from './pages/authentication/register/TermsDialog/TermsDialog.component';
import { RegisterComponent } from './pages/authentication/register/register.component';
import { MaterialModule } from './material/material/material.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './pages/authentication/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChangePasswordComponent } from './pages/authentication/change-password/change-password.component';
import { HttpClientModule } from '@angular/common/http';
import { HomePostulantComponent } from './pages/postulant/home-postulant/home-postulant.component';

import { ErrorDialogComponent } from './pages/authentication/login/error-dialog/error-dialog.component';
import { RegisterErrorComponent } from './pages/authentication/register/register-error/register-error.component';
import { EmailDialogComponent } from './pages/authentication/forgot-password/email-dialog/email-dialog.component';
import { PasswordValidComponent } from './pages/authentication/change-password/password-valid/password-valid.component';
import { NavigaionPostulantComponent } from './pages/postulant/navigaion-postulant/navigaion-postulant.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    TermsDialogComponent,
    ForgotPasswordComponent,
    ChangePasswordComponent,
    HomePostulantComponent,
    ErrorDialogComponent,
    RegisterErrorComponent,
    EmailDialogComponent,
    PasswordValidComponent,
    ConfigurePostulantComponent,
    NavigaionPostulantComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
