import { EditScoreComponent } from './pages/admin/test/edit-score/edit-score.component';
import { EditQuestionComponent } from './pages/admin/test/edit-question/edit-question.component';
import { NoContinueComponent } from './pages/postulant/test/result-emotional-test/no-continue/no-continue.component';
import { ResultEmotionalTestComponent } from './pages/postulant/test/result-emotional-test/result-emotional-test.component';
import { ConfigureAdminComponent } from './pages/admin/configure-admin/configure-admin.component';
import { SeeOnePostulantComponent } from './pages/admin/see-one-postulant/see-one-postulant.component';
import { SeePostulantsComponent } from './pages/admin/see-postulants/see-postulants.component';
import { DialogComponent } from './pages/admin/test/create-test/Dialog/Dialog.component';

import { HomeAdminComponent } from './pages/admin/home-admin/home-admin.component';
import { ConfigurePostulantComponent } from './pages/postulant/configure-postulant/configure-postulant.component';
import { ForgotPasswordComponent } from './pages/authentication/forgot-password/forgot-password.component';
import { TermsDialogComponent } from './pages/authentication/register/TermsDialog/TermsDialog.component';
import { RegisterComponent } from './pages/authentication/register/register.component';
import { MaterialModule } from './material/material/material.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
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
import { NavigationAdminComponent } from './pages/admin/navigation-admin/navigation-admin.component';
import { CreateSectionComponent } from './pages/admin/test/create-section/create-section.component';
import { CreateTestComponent } from './pages/admin/test/create-test/create-test.component';
import { CreateQuestionComponent } from './pages/admin/test/create-question/create-question.component';
import { DialogSectionComponent } from './pages/admin/test/create-section/dialog-section/dialog-section.component';
import { CreateAdminComponent } from './pages/admin/create-admin/create-admin.component';
import { AdminDialogComponent } from './pages/admin/create-admin/adminDialog/adminDialog.component';
import { ConfigureDialogComponent } from './pages/admin/configure-admin/configure-dialog/configure-dialog.component';
import { DeleteDialogComponent } from './pages/admin/see-one-postulant/deleteDialog/deleteDialog.component';
import { ConfigurePostulantDialogComponent } from './pages/postulant/configure-postulant/configure-postulant-dialog/configure-postulant-dialog.component';
import { StartTestComponent } from './pages/postulant/test/start-test/start-test.component';
import { EmotionalTestComponent } from './pages/postulant/test/emotional-test/emotional-test.component';
import { ResultsComponent } from './pages/postulant/results/results.component';
import { StartOrientationTestComponent } from './pages/postulant/test/start-orientation-test/start-orientation-test.component';
import { OrientationTestComponent } from './pages/postulant/test/orientation-test/orientation-test.component';
import { EditTestComponent } from './pages/admin/test/edit-test/edit-test.component';
import { EditSectionComponent } from './pages/admin/test/edit-section/edit-section.component';
import { EditOptionComponent } from './pages/admin/test/edit-option/edit-option.component';
import { EditSectionCreateComponent } from './pages/admin/test/edit-section-create/edit-section-create.component';
import { DialogEditSectionCreateComponent } from './pages/admin/test/edit-section-create/dialog-edit-section-create/dialog-edit-section-create.component';
import { EditQuestionCreateComponent } from './pages/admin/test/edit-question-create/edit-question-create.component';
import { EditOptionCreateComponent } from './pages/admin/test/edit-option-create/edit-option-create.component';
import { DialogEditQuestionCreateComponent } from './pages/admin/test/edit-question-create/dialog-edit-question-create/dialog-edit-question-create.component';
import { LandingComponent } from './pages/landing/landing.component';
import { AnswerDialogComponent } from './pages/postulant/results/answer-dialog/answer-dialog.component';
import { RecommendationHistoryComponent } from './pages/postulant/recommendation-history/recommendation-history.component';
import { PostulnatRecommendationHistoryComponent } from './pages/admin/postulnat-recommendation-history/postulnat-recommendation-history.component';
import { TemplateDialogComponent } from './pages/template-dialog/template-dialog.component';
import { OrientedTestResultComponent } from './pages/postulant/oriented-test-result/oriented-test-result.component';
import { OrientedSectionResultComponent } from './pages/postulant/oriented-section-result/oriented-section-result.component';


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
    NavigaionPostulantComponent,
    HomeAdminComponent,
    NavigationAdminComponent,
    CreateSectionComponent,
    CreateTestComponent,
    CreateQuestionComponent,
    DialogComponent,
    CreateAdminComponent,
    DialogSectionComponent,
    AdminDialogComponent,
    SeePostulantsComponent,
    SeeOnePostulantComponent,
    ConfigureAdminComponent,
    ConfigureDialogComponent,
    DeleteDialogComponent,
    ConfigurePostulantDialogComponent,
    StartTestComponent,
    EmotionalTestComponent,
    ResultEmotionalTestComponent,
    ResultsComponent,
    NoContinueComponent,
    StartOrientationTestComponent,
    OrientationTestComponent,
    EditTestComponent,
    EditSectionComponent,
    EditQuestionComponent,
    EditOptionComponent,
    EditScoreComponent,
    EditSectionCreateComponent,
    DialogEditSectionCreateComponent,
    DialogEditQuestionCreateComponent,
    EditQuestionCreateComponent,
    EditOptionCreateComponent,
    LandingComponent,
    AnswerDialogComponent,
    RecommendationHistoryComponent,
    PostulnatRecommendationHistoryComponent,
    TemplateDialogComponent,
    OrientedTestResultComponent,
    OrientedSectionResultComponent,
   
   

  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
