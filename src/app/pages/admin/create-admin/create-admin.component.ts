import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { SignIn } from 'src/app/models/authentication/SignIn';

@Component({
  selector: 'app-create-admin',
  templateUrl: './create-admin.component.html',
  styleUrls: ['./create-admin.component.css']
})
export class CreateAdminComponent implements OnInit {
  showTextOnButton = true;
  SignIn!:SignIn
  termsChecked = false;
  public signupform!:FormGroup;
  onSubmit(){}
  openTerms(){}
  constructor() { }

  ngOnInit() {
  }

}
