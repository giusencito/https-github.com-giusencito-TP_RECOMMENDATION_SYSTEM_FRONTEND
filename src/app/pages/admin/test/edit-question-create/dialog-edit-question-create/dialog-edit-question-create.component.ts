import { Component, OnInit ,Inject} from '@angular/core';
import { MatDialogRef ,MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-edit-question-create',
  templateUrl: './dialog-edit-question-create.component.html',
  styleUrls: ['./dialog-edit-question-create.component.css']
})
export class DialogEditQuestionCreateComponent implements OnInit {

  type!:boolean
  text!:string
  constructor( public dialogRef: MatDialogRef<DialogEditQuestionCreateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    this.type = this.data.type
    this.text= this.data.text
  }
  closetrue(){
    this.dialogRef.close()
  }
  closefalse(){
    this.dialogRef.close()
  }

}
