import { Component, OnInit ,Inject} from '@angular/core';
import { MatDialogRef ,MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-deleteDialog',
  templateUrl: './deleteDialog.component.html',
  styleUrls: ['./deleteDialog.component.css']
})
export class DeleteDialogComponent implements OnInit {

  type!:boolean
  constructor( public dialogRef: MatDialogRef<DeleteDialogComponent>,
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
