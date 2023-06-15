
import { PostulantService } from './../../../services/postulant/postulant.service';
import { PasswordService } from './../../../services/password/password.service';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Name } from 'src/app/models/authentication/Name';
import { Lastname } from 'src/app/models/authentication/Lastname';
import { ConfigurePassword } from 'src/app/models/authentication/ConfigurePassword';
import { TokenService } from 'src/app/services/token/token.service';
import { AdminService } from 'src/app/services/admin/admin.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfigureDialogComponent } from './configure-dialog/configure-dialog.component';

@Component({
  selector: 'app-configure-admin',
  templateUrl: './configure-admin.component.html',
  styleUrls: ['./configure-admin.component.css']
})
export class ConfigureAdminComponent implements OnInit {
  public changename!:FormGroup;
  public changelastaname!:FormGroup;
  public changepassword!:FormGroup;

names!:string
username!:string
email!:string
usernames!:string
lastnames!:string
  Name!:Name
  Lastname!:Lastname
  ConfigurePassword!:ConfigurePassword
  constructor(private formBuilder:FormBuilder,private AdminService:AdminService,public dialog: MatDialog,private TokenService:TokenService,private PasswordService:PasswordService) { 
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
    window.addEventListener('resize', () => {
      console.log(window.innerWidth);
      console.log(window.innerHeight);
    });

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
    this.getadmin()
  }
 
  changenamefun(){
     this.AdminService.changename(this.TokenService.getId(),this.Name).subscribe((response:any)=>{

         console.log(response)
         this.openTrue(this.TokenService.getId(),'nombre')

     },err=>{
           this.openFalse('err')
     })

    
  }
  changenlastamefun(){
    this.AdminService.changelast_name(this.TokenService.getId(),this.Lastname).subscribe((response:any)=>{

      this.openTrue(this.TokenService.getId(),'apellido')


    },err=>{
      this.openFalse('err')
})

   
 }
 getadmin(){
  this.AdminService.getAdmin(this.TokenService.getId()).subscribe((response)=>{
    console.log(response)
    this.email= response.email;
    this.names=response.name
    this.lastnames= response.last_name;
    this.usernames = response.username
  })
 }
 changepasswordfun(){
  this.ConfigurePassword.token='redesdd'
  this.PasswordService.changePassword(this.TokenService.getId(),this.ConfigurePassword).subscribe((response:any)=>{

    this.openTrue(this.TokenService.getId(),'contraseña')


  },err=>{
    this.openFalse('err')
})
 }
 openTrue(id:number,configure:string) {

  const dialogRef = this.dialog.open(ConfigureDialogComponent, {
    width: '500px',
    data: {type:true,number:id,configure:configure}
  });
  dialogRef.afterClosed().subscribe(result => {
      if(configure=="nombre"){
          this.names = this.Name.name
      }
      if(configure=="apellido"){
        this.lastnames = this.Lastname.last_name
      }if(configure=="contraseña"){
      
      }



   
  })
 
}
openFalse(configure:string) {

  const dialogRef = this.dialog.open(ConfigureDialogComponent, {
    width: '500px',
    data: {type:false,configure:configure}
  });
 
}
}
