import { Router } from '@angular/router';
import { TokenService } from './../../../services/token/token.service';
import { AuthService } from './../../../services/auth/auth.service';
import { StyleManagerService } from './../../../services/style-manager/style-manager.service';
import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';

import { DOCUMENT } from '@angular/common';
import { Inject } from '@angular/core';
import { Login } from 'src/app/models/authentication/Login';
import { ErrorDialogComponent } from './error-dialog/error-dialog.component';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [StyleManagerService],
})
export class LoginComponent implements OnInit {
  public loginform!:FormGroup;
  Login!:Login
  constructor(private TokenService: TokenService,private formBuilder:FormBuilder,private AuthService:AuthService,public dialog: MatDialog,private Router:Router) { 
         this.Login = {} as Login
  }
  colorFondo = 'negro'
 
  ngOnInit() {
    this.loginform=this.formBuilder.group({
      username:['',[Validators.required]],
      password:['',[Validators.required]],
     })
  }
  login(){
    this.AuthService.Login(this.Login).subscribe((response:any)=>{
               console.log(response)
               this.TokenService.setToken(response.token)
               if(this.TokenService.isPostulant()){
                           this.Router.navigate(['/home-postulant'])
               }
               if(this.TokenService.isAdmin()){
                          this.Router.navigate(['/home-admin'])
               }


    },err=>{
      
         this.openTermsDialog()

    })
  }
  openTermsDialog(): void {
    const dialogRef = this.dialog.open(ErrorDialogComponent, {
      width: '500px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
     
    });
  }

}
