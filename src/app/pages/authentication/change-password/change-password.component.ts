import { ChangePassword } from './../../../models/authentication/ChangePassword';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators,ValidatorFn,ValidationErrors,AbstractControl, FormControl } from '@angular/forms';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  public changeform!: FormGroup;
  ChangePassword!: ChangePassword;
  
  constructor(private formBuilder: FormBuilder) {
    this.ChangePassword = {} as ChangePassword;
  }

  ngOnInit(): void {
    this.changeform = this.formBuilder.group({
      newpassword: ['', [Validators.required]],
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

  



}
