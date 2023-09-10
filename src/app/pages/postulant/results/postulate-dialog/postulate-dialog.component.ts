import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA,MatDialogRef,MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-postulate-dialog',
  templateUrl: './postulate-dialog.component.html',
  styleUrls: ['./postulate-dialog.component.css']
})
export class PostulateDialogComponent implements OnInit {

  isPostulate!:boolean

  constructor(@Inject(MAT_DIALOG_DATA) public isPostulatedata:any) { }

  ngOnInit() {
    this.isPostulate = this.isPostulatedata
    console.log(this.isPostulate)
  }

}
