import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  public forgotform!:FormGroup;
  emailvarible!:string
  constructor(private formBuilder:FormBuilder) { 

    this.forgotform=this.formBuilder.group({
     
      email:['',[Validators.required,Validators.email]],
     })
  }

  ngOnInit() {
  }

}
