import { SendEmail } from './../../../../models/history/SendEmail';
import { TokenService } from './../../../../services/token/token.service';
import { FeedbackService } from './../../../../services/feedback/feedback.service';
import { Feedback } from './../../../../models/history/Feedback';
import { ResetPassword } from './../../../../models/authentication/ResetPassword';
import { SelectedjobService } from 'src/app/services/selectedjob/selectedjob.service';
import { Component, OnInit,Inject } from '@angular/core';
import { MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-send-test-email',
  templateUrl: './send-test-email.component.html',
  styleUrls: ['./send-test-email.component.css']
})
export class SendTestEmailComponent implements OnInit {
  change!:boolean
  SendEmail!:SendEmail
  Feedback!:Feedback
  constructor( public dialogRef: MatDialogRef<SendTestEmailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,private SelectedjobService:SelectedjobService,private FeedbackService:FeedbackService,private TokenService:TokenService) { 
      this.SendEmail= {} as SendEmail
      this.Feedback= {} as Feedback
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
  open(){
   this.Feedback.admin=this.TokenService.getId()
   this.Feedback.token_link=this.generatetoken()
   this.Feedback.postulant=this.data.postulant
   console.log('this.Feedback')
   console.log(this.Feedback)
   this.FeedbackService.CreateIFeedbacks(this.Feedback).subscribe((response:any)=>{

    this.SendEmail.email= this.data.email
    this.SendEmail.token=this.Feedback.token_link
    this.SelectedjobService.SendTestEmail(this.SendEmail).subscribe((response:any)=>{
      
    })

   },err=>{})


    
  }
}
