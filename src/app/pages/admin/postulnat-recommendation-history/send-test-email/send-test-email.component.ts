import { Router } from '@angular/router';
import { CreateResultTest } from './../../../../models/result/CreateResultTest';
import { ResultTestService } from './../../../../services/resultTest/result-test.service';
import { SendEmail } from './../../../../models/history/SendEmail';
import { TokenService } from './../../../../services/token/token.service';
import { FeedbackService } from './../../../../services/feedback/feedback.service';
import { Feedback } from './../../../../models/history/Feedback';
import { ResetPassword } from './../../../../models/authentication/ResetPassword';
import { SelectedjobService } from 'src/app/services/selectedjob/selectedjob.service';
import { Component, OnInit,Inject } from '@angular/core';
import { MatDialogRef,MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { TemplateDialogComponent } from 'src/app/pages/template-dialog/template-dialog.component';

@Component({
  selector: 'app-send-test-email',
  templateUrl: './send-test-email.component.html',
  styleUrls: ['./send-test-email.component.css']
})
export class SendTestEmailComponent implements OnInit {
  change!:boolean
  SendEmail!:SendEmail
  Feedback!:Feedback
  CreateResultTest!:CreateResultTest
  constructor( public dialogRef: MatDialogRef<SendTestEmailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,private SelectedjobService:SelectedjobService,private FeedbackService:FeedbackService,private TokenService:TokenService,
    private ResultTestService:ResultTestService,private Router:Router,public dialog:MatDialog) { 
      this.SendEmail= {} as SendEmail
      this.Feedback= {} as Feedback
      this.CreateResultTest={} as CreateResultTest
    }

  ngOnInit() {
    console.log(this.data)
  }
  setChange(date:Date){
     
       const future = new Date(date)
       const actual = new Date()
       future.setMonth(future.getMonth()-2)
       if(actual>=future){
        return true
       }else{
        return false

       }
       
      
  }
   generatetoken() {
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    const longitudPalabra = Math.floor(Math.random() * (50-10)) + 1;
    let palabra = '';
  
    for (let i = 0; i < longitudPalabra; i++) {
      const caracterAleatorio = caracteres.charAt(Math.floor(Math.random() * caracteres.length));
      palabra += caracterAleatorio;
    }
  
    return palabra;
  }
  open(selectedJob:number){
   this.Feedback.admin=this.TokenService.getId()
   this.Feedback.token_link=this.generatetoken()
   this.Feedback.selectedjob=selectedJob
   console.log('this.Feedback')
   console.log(this.Feedback)
   console.log(this.data)
   console.log(this.data.postulant)
   this.CreateResultTest.postulant=this.data.postulant

   this.ResultTestService.CreateResultTest(this.CreateResultTest).subscribe((response:any)=>{
    this.Feedback.resultTest=response.id;
    this.FeedbackService.CreateIFeedbacks(this.Feedback).subscribe((response:any)=>{

      this.SendEmail.email= this.data.email
      this.SendEmail.token=this.Feedback.token_link
      this.SelectedjobService.SendTestEmail(this.SendEmail).subscribe((response:any)=>{
        const dialogRef = this.dialog.open(TemplateDialogComponent, {
          width: '500px',
          data: {type:'email'}
        });
    
        dialogRef.afterClosed().subscribe(result => {
         
        });
        
      })
  
     },err=>{})


   },err=>{})



    
  }
  seeresults(resultTest:number){
    this.Router.navigate(['see-validation-results'],{queryParams:{resultTest:resultTest}})
    this.dialogRef.close()

  }











}
