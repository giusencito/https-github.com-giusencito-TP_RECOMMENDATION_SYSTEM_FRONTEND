import { PasswordService } from './../../../services/password/password.service';
import { ConfigurePassword } from './../../../models/authentication/ConfigurePassword';
import { Lastname } from './../../../models/authentication/Lastname';
import { TokenService } from './../../../services/token/token.service';
import { PostulantService } from './../../../services/postulant/postulant.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators,ValidatorFn,ValidationErrors,AbstractControl, FormControl } from '@angular/forms';
import { Name } from 'src/app/models/authentication/Name';

@Component({
  selector: 'app-configure-postulant',
  templateUrl: './configure-postulant.component.html',
  styleUrls: ['./configure-postulant.component.css']
})
export class ConfigurePostulantComponent implements OnInit {
  public changename!:FormGroup;
  public changelastaname!:FormGroup;
  public changepassword!:FormGroup;
  Name!:Name
  Lastname!:Lastname
  ConfigurePassword!:ConfigurePassword
 
  constructor(private formBuilder:FormBuilder,private PostulantService:PostulantService,private TokenService:TokenService,private PasswordService:PasswordService) { 
    this.changename=this.formBuilder.group({
      name:['',[Validators.required, Validators.minLength(3)]],
      
     })
     this.changelastaname=this.formBuilder.group({
     
      lastname:['',[Validators.required, Validators.minLength(3)]],
     
     })

     this.changepassword=this.formBuilder.group({
      
      password:['',[Validators.required, Validators.minLength(6)]],
      password2:['',[Validators.required, Validators.minLength(6), this.matchPasswordValidators('password')]],
     })

    this.Name = {} as Name
    this.Lastname = {} as Lastname
    this.ConfigurePassword = {} as ConfigurePassword

  }
  matchPasswordValidators(controlName: string): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const matchingControl = control.parent?.get('password2');
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

  ngOnInit() {
  }
 
  changenamefun(){
     this.PostulantService.changename(this.TokenService.getId(),this.Name).subscribe((response:any)=>{

         console.log(response)

     })

    
  }
  changenlastamefun(){
    this.PostulantService.changelast_name(this.TokenService.getId(),this.Lastname).subscribe((response:any)=>{})

   
 }
 changepasswordfun(){
  this.ConfigurePassword.token='redesdd'
  this.PasswordService.changePassword(this.TokenService.getId(),this.ConfigurePassword).subscribe((response:any)=>{})
 }




}
