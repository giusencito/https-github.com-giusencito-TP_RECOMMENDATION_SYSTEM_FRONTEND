import { AdminService } from './../../../services/admin/admin.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { SignIn } from 'src/app/models/authentication/SignIn';
import { AdminDialogComponent } from './adminDialog/adminDialog.component';

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
  onSubmit(){
    this.SignIn.role =2
    this.AdminService.registerAdmin(this.SignIn).subscribe((response:any)=>{

      const dialogRef = this.dialog.open(AdminDialogComponent, {
      width: '500px',
      data: {type:true}
    });
    dialogRef.afterClosed().subscribe(result => {
      this.Router.navigate(['/home-admin'])

    });


   },err=>{
    console.log(err)
    let username = err.error.errors.username
    let email = err.error.errors.email
    console.log(username)
    if(username==undefined){username=''}else{username=username[0]}
    if(email==undefined){email=''}else{email=email[0]}
    const dialogRef = this.dialog.open(AdminDialogComponent, {
      width: '500px',
      data: {username:username,email:email,type:false}
    });
   })
    



















  }

  constructor(public dialog: MatDialog,private formBuilder:FormBuilder,private AdminService:AdminService,private Router:Router) {
    this.SignIn = {} as SignIn
   }

  ngOnInit() {
    this.signupform=this.formBuilder.group({
      username:['',[Validators.required, Validators.minLength(3)]],
      name:['',[Validators.required, Validators.minLength(3)]],
      lastname:['',[Validators.required, Validators.minLength(3)]],
      email:['',[Validators.required, Validators.email]],
      password:['',[Validators.required, Validators.minLength(6)]],
     

     })
  }
  openTermsDialog(): void {
    const dialogRef = this.dialog.open(AdminDialogComponent, {
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
}
