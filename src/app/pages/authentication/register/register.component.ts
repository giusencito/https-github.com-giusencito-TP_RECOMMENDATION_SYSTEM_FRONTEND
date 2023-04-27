import { SignIn } from './../../../models/authentication/SignIn';
import { TermsDialogComponent } from './TermsDialog/TermsDialog.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  showTextOnButton = true;
  SignIn!:SignIn
  public signupform!:FormGroup;
  constructor(public dialog: MatDialog,private formBuilder:FormBuilder) { 

    this.SignIn = {} as SignIn
    window.addEventListener('resize', () => {
      console.log(window.innerWidth);
      console.log(window.innerHeight);
    });
  }
  termsChecked = false;
  ngOnInit() {

    this.signupform=this.formBuilder.group({
      username:['',[Validators.required, Validators.minLength(3)]],
      name:['',[Validators.required, Validators.minLength(3)]],
      lastname:['',[Validators.required, Validators.minLength(3)]],
      email:['',[Validators.required, Validators.email]],
      password:['',[Validators.required, Validators.minLength(3)]],
     

     })

   


    




  }
  openTermsDialog(): void {
    const dialogRef = this.dialog.open(TermsDialogComponent, {
      width: '500px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.termsChecked = true;
      }
    });
  }
  openTerms(){
    console.log("open")
     this.openTermsDialog()
  }


  onSubmit(){}
}
