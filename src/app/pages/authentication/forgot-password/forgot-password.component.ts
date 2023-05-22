import { PasswordService } from './../../../services/password/password.service';
import { ResetPassword } from './../../../models/authentication/ResetPassword';
import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { EmailDialogComponent } from './email-dialog/email-dialog.component';
@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  public forgotform!:FormGroup;
  emailvarible!:string
  ResetPassword!:ResetPassword
  constructor(private formBuilder:FormBuilder,public dialog: MatDialog,private PasswordService:PasswordService) { 
   this.ResetPassword  = {} as ResetPassword
    this.forgotform=this.formBuilder.group({
     
      email:['',[Validators.required,Validators.email]],
     })
  }

  ngOnInit() {
  }

submit(){
  this.PasswordService.emailSend(this.ResetPassword).subscribe((response:any)=>{
    this.openTrue()
  },err=>{
    this.openFalse()
  })
}
openTrue() {

  const dialogRef = this.dialog.open(EmailDialogComponent, {
    width: '500px',
    data: {type:true}
  });
 
}
openFalse() {

  const dialogRef = this.dialog.open(EmailDialogComponent, {
    width: '500px',
    data: {type:false}
  });
 
}


}
