import { Component, OnInit,Inject } from '@angular/core';
import { MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-send-test-email',
  templateUrl: './send-test-email.component.html',
  styleUrls: ['./send-test-email.component.css']
})
export class SendTestEmailComponent implements OnInit {
  change!:boolean
  constructor( public dialogRef: MatDialogRef<SendTestEmailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }
  setChange(date:Date){
     
       const future = new Date(date)
       const actual = new Date()
       future.setMonth(future.getMonth()+3)
       if(actual>=future){
        return true
       }else{
        return false

       }
       
       return true
  }
  open(){}
}
