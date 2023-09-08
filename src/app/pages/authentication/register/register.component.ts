import { Router } from '@angular/router';
import { PostulantService } from './../../../services/postulant/postulant.service';
import { SignIn } from './../../../models/authentication/SignIn';
import { TermsDialogComponent } from './TermsDialog/TermsDialog.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { RegisterErrorComponent } from './register-error/register-error.component';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  showTextOnButton = true;
  SignIn!:SignIn
  public signupform!:FormGroup;
  constructor(public dialog: MatDialog,private formBuilder:FormBuilder,private PostulantService:PostulantService,private Router:Router) { 

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
      password:['',[Validators.required, Validators.minLength(6)]],
     

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


  onSubmit(){
    this.SignIn.role =1

   this.PostulantService.registerpostulant(this.SignIn).subscribe((response:any)=>{

      const dialogRef = this.dialog.open(RegisterErrorComponent, {
      width: '500px',
      data: {type:true}
    });
    dialogRef.afterClosed().subscribe(result => {
      this.Router.navigate(['/login'])

    });


   },err=>{
   
    let username = err.error.errors.username
    let email = err.error.errors.email
    console.log(username)
    if(username==undefined){username=''}else{username=username[0]}
    if(email==undefined){email=''}else{email=email[0]}
    const dialogRef = this.dialog.open(RegisterErrorComponent, {
      width: '500px',
      data: {username:username,email:email,type:false}
    });
   })



  }
  openValidator(){
    


  }










}
