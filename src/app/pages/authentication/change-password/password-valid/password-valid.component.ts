import { Router } from '@angular/router';
import { Component, OnInit,Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-password-valid',
  templateUrl: './password-valid.component.html',
  styleUrls: ['./password-valid.component.css']
})
export class PasswordValidComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<PasswordValidComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,private Router:Router) { }

  ngOnInit() {
  }
  submit(){


    this.Router.navigate(['/login'])
    this.dialogRef.close()


  }
}
