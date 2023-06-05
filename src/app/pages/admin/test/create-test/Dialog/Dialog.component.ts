import { Component, OnInit,Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-Dialog',
  templateUrl: './Dialog.component.html',
  styleUrls: ['./Dialog.component.css']
})
export class DialogComponent implements OnInit {

  type!:boolean
  constructor( public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    this.type = this.data.type
  }
  closetrue(){
    this.dialogRef.close()
  }
  closefalse(){
    this.dialogRef.close()
  }
}
