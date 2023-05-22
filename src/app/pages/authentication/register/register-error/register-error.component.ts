import { Component, OnInit,Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-register-error',
  templateUrl: './register-error.component.html',
  styleUrls: ['./register-error.component.css']
})
export class RegisterErrorComponent implements OnInit {
  username!:string
  email!:string
  type!:boolean
  constructor(public dialogRef: MatDialogRef<RegisterErrorComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    this.type= this.data.type
    if(this.type==false){
      this.username = this.data.username
     this.email = this.data.email
    }
     
  }
  closeError(){
    this.dialogRef.close()
  }

}
