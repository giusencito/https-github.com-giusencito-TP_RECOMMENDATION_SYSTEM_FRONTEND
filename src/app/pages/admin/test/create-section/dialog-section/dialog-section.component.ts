import { Component, OnInit,Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-section',
  templateUrl: './dialog-section.component.html',
  styleUrls: ['./dialog-section.component.css']
})
export class DialogSectionComponent implements OnInit {

  type!:boolean
  constructor( public dialogRef: MatDialogRef<DialogSectionComponent>,
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
