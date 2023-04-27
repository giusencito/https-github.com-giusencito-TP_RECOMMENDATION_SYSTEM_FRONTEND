import { StyleManagerService } from './../../../services/style-manager/style-manager.service';
import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';

import { DOCUMENT } from '@angular/common';
import { Inject } from '@angular/core';
import { Login } from 'src/app/models/authentication/Login';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [StyleManagerService],
})
export class LoginComponent implements OnInit {
  public loginform!:FormGroup;
  Login!:Login
  constructor(private styleManager: StyleManagerService,private formBuilder:FormBuilder) { 
         this.Login = {} as Login
  }
  colorFondo = 'negro'
 
  ngOnInit() {
    this.loginform=this.formBuilder.group({
      username:['',[Validators.required]],
      password:['',[Validators.required]],
     })
  }
  

}
