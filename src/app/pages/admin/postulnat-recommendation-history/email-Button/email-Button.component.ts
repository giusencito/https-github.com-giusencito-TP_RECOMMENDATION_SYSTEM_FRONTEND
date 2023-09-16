import { Component, OnInit,Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SelectedjobService } from 'src/app/services/selectedjob/selectedjob.service';
import { SendTestEmailComponent } from '../send-test-email/send-test-email.component';
import { SelectedEmail } from 'src/app/models/history/SelectedEmail';

@Component({
  selector: 'app-email-Button',
  templateUrl: './email-Button.component.html',
  styleUrls: ['./email-Button.component.css']
})
export class EmailButtonComponent implements OnInit {
  @Input()
  resultest!:number
  @Input()
  email!:string
  @Input()
  postulant!:string
  change!:boolean
 selectedjobs:SelectedEmail[]=[]


  constructor(private SelectedjobService:SelectedjobService,private dialog:MatDialog) { }

  ngOnInit() {
    this.checkEmail(this.resultest)
  }
  checkEmail(id:number){
    this.SelectedjobService.GetSelectedJobsByResultTest(id).subscribe((response:any)=>{
       this.selectedjobs=response.rows
         if(response.total==0){
              this.change=false
         }else{
          this.change=true
         }
    })
   }

   open() {

    const dialogRef = this.dialog.open(SendTestEmailComponent, {
      width: '500px',
      data: {jobs:this.selectedjobs,email:this.email,postulant:this.postulant}
    });
    dialogRef.afterClosed().subscribe(result => {

    })
   
  }














}
