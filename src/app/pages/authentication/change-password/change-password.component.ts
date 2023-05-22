import { Router,ActivatedRoute } from '@angular/router';
import { PasswordService } from './../../../services/password/password.service';
import { ChangePassword } from './../../../models/authentication/ChangePassword';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators,ValidatorFn,ValidationErrors,AbstractControl, FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { PasswordValidComponent } from './password-valid/password-valid.component';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  public changeform!: FormGroup;
  ChangePassword!: ChangePassword;
  
  constructor(private formBuilder: FormBuilder,public dialog:MatDialog,private PasswordService:PasswordService,private ActivatedRoute:ActivatedRoute
    ) {
    this.ChangePassword = {} as ChangePassword;
  }

  ngOnInit(): void {
    this.changeform = this.formBuilder.group({
      newpassword: ['', [Validators.required,Validators.minLength(6)]],
      repeat: ['', [Validators.required, this.matchPasswordValidators('newpassword')]],
    });


    

  }
  
 



  matchPasswordValidators(controlName: string): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const matchingControl = control.parent?.get('repeat');
      const controlToMatch = control.parent?.get(controlName);
     
      if (matchingControl && controlToMatch) {
        
        if (matchingControl.value !== controlToMatch.value) {
        
          return { matching: true };
        }
        else{
         
          return null;
        }
      }
     
      return null;
    };
  }


  submit(){
    this.ChangePassword.token=(this.ActivatedRoute.snapshot.paramMap.get('code')!);
    console.log(this.ChangePassword)
    this.PasswordService.setPassword(this.ChangePassword).subscribe((response:any)=>{
      const dialogRef = this.dialog.open(PasswordValidComponent, {
        width: '500px',
        data: {}
      });

    },err=>{
      alert('error')
    })




  }






}
