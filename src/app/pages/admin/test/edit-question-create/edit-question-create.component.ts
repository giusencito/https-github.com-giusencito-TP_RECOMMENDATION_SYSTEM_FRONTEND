import { ActivatedRoute, Router } from '@angular/router';
import { QuestionService } from './../../../../services/question/question.service';
import { CreateQuestion } from 'src/app/models/test/CreateQuestion';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DialogEditQuestionCreateComponent } from './dialog-edit-question-create/dialog-edit-question-create.component';

@Component({
  selector: 'app-edit-question-create',
  templateUrl: './edit-question-create.component.html',
  styleUrls: ['./edit-question-create.component.css']
})
export class EditQuestionCreateComponent implements OnInit {
  public changesquestion!: FormGroup;
 CreateQuestion!:CreateQuestion

  constructor(private formBuilder:FormBuilder,private QuestionService:QuestionService,private ActivatedRoute:ActivatedRoute,public dialog:MatDialog,private Router:Router) { 
    this.CreateQuestion = {} as CreateQuestion
  }

  ngOnInit() {
    let id =parseInt(this.ActivatedRoute.snapshot.paramMap.get('section')!);
this.CreateQuestion.section=id
    this.changesquestion = this.formBuilder.group({
      namequestion:['',[Validators.required,Validators.minLength(3)]],
     


    })
  }
  createquestion(){
this.CreateQuestion.questionname =this.changesquestion.controls['namequestion'].value

    this.QuestionService.createQuestion(this.CreateQuestion).subscribe((response:any)=>{
        this.openTrue()
    },err=>{
      this.openFalse()
    })
  }


  openTrue() {

    const dialogRef = this.dialog.open(DialogEditQuestionCreateComponent, {
      width: '500px',
      data: {type:true,text:'pregunta'}
    });
    dialogRef.afterClosed().subscribe(result => {
      let test =parseInt(this.ActivatedRoute.snapshot.paramMap.get('test')!);
      let section =parseInt(this.ActivatedRoute.snapshot.paramMap.get('section')!);

      this.Router.navigate([ 'edit-test',test,`edit-section`,section,'edit-question']);
    })
   
  }
  openFalse() {
  
    const dialogRef = this.dialog.open(DialogEditQuestionCreateComponent, {
      width: '500px',
      data: {type:false}
    });
   
  }

















}
