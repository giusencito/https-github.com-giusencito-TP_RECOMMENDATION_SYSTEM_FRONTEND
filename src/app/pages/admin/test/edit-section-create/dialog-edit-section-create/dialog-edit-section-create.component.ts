import { Component, OnInit,Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-edit-section-create',
  templateUrl: './dialog-edit-section-create.component.html',
  styleUrls: ['./dialog-edit-section-create.component.css']
})
export class DialogEditSectionCreateComponent implements OnInit {

  type!:boolean
  constructor( public dialogRef: MatDialogRef<DialogEditSectionCreateComponent>,
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
