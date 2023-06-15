import { Component, OnInit ,Inject} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-configure-dialog',
  templateUrl: './configure-dialog.component.html',
  styleUrls: ['./configure-dialog.component.css']
})
export class ConfigureDialogComponent implements OnInit {

  type!:boolean
  configure!:string
  constructor( public dialogRef: MatDialogRef<ConfigureDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    this.type = this.data.type
    this.configure = this.data.configure
  }
  closetrue(){
    this.dialogRef.close()
  }
  closefalse(){
    this.dialogRef.close()
  }

}
