import { Component, OnInit,Inject } from '@angular/core';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';



@Component({
  selector: 'app-adminDialog',
  templateUrl: './adminDialog.component.html',
  styleUrls: ['./adminDialog.component.css']
})
export class AdminDialogComponent implements OnInit {

  username!:string
  email!:string
  type!:boolean
  constructor(public dialogRef: MatDialogRef<AdminDialogComponent>,
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
