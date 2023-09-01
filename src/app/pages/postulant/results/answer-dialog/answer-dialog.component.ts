import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA,MatDialogRef,MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-answer-dialog',
  templateUrl: './answer-dialog.component.html',
  styleUrls: ['./answer-dialog.component.css']
})
export class AnswerDialogComponent implements OnInit {
  posibleanswer!:string

  constructor(@Inject(MAT_DIALOG_DATA) public answer:any) { }

  ngOnInit() {
    this.posibleanswer = this.answer 
    console.log(this.posibleanswer)
  }


}
