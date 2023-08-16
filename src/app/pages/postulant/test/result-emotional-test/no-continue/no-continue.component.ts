import { Component, OnInit,Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-no-continue',
  templateUrl: './no-continue.component.html',
  styleUrls: ['./no-continue.component.css']
})
export class NoContinueComponent implements OnInit {

  constructor(    public dialogRef: MatDialogRef<NoContinueComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }
  close(): void {
    this.dialogRef.close(true);
  }
}
