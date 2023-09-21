import { CreateQuestion } from 'src/app/models/test/CreateQuestion';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionService } from './../../../../services/question/question.service';
import { Question } from './../../../../models/test/Question';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { OptionService } from 'src/app/services/option/option.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TemplateDialogComponent } from 'src/app/pages/template-dialog/template-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-option',
  templateUrl: './edit-option.component.html',
  styleUrls: ['./edit-option.component.css']
})
export class EditOptionComponent implements OnInit {
  dataSource !:MatTableDataSource<any>;
  Question!:Question
  CreateQuestion!:CreateQuestion;
  public changesquestion!: FormGroup;
 start=false
  constructor(private formBuilder:FormBuilder,private QuestionService:QuestionService,private optionService:OptionService,private ActivatedRoute:ActivatedRoute,private Router:Router,public dialog:MatDialog) { 
    this.dataSource = new MatTableDataSource<any>();
    this.Question = {} as Question
    this.CreateQuestion= {} as CreateQuestion

  }

  ngOnInit() {
    let id =parseInt(this.ActivatedRoute.snapshot.paramMap.get('question')!);
    console.log(id)
    this._getOptions(id)
    this.getQuestion(id)
    this.changesquestion = this.formBuilder.group({
      namequestion:['',[Validators.required,Validators.minLength(3)]],
     


    })

  }
  _getOptions(id:number){
    this.optionService.getoptionbyquestion(id).subscribe((response:any)=>{
            console.log(response)
            this.dataSource.data=response.rows
            this.start=true

    })
  }
  getQuestion(id:number){
      this.QuestionService.getQuestionbyId(id).subscribe((response:any)=>{
        this.Question=response
        this.changesquestion.controls['namequestion'].setValue(this.Question.questionname)
        console.log(this.Question)
      })
  }
  goToScore(id:number){
    let id2 =parseInt(this.ActivatedRoute.snapshot.paramMap.get('question')!);

    this.Router.navigate(['edit-score','question',id2,id]);
   


  }
  goToCreate(){
    let id =parseInt(this.ActivatedRoute.snapshot.paramMap.get('question')!);

    this.Router.navigate(['edit-question',id,'create-option']);

  }
  update(){
    this.CreateQuestion.questionname= this.changesquestion.controls['namequestion'].value
    let id2 =parseInt(this.ActivatedRoute.snapshot.paramMap.get('section')!);
    this.CreateQuestion.section=id2
    let id =parseInt(this.ActivatedRoute.snapshot.paramMap.get('question')!);

    this.QuestionService.update(id,this.CreateQuestion).subscribe((response:any)=>{
      this.openTrue()

    },err=>{
        this.openFalse()
    })
  }
  openTrue() {

    const dialogRef = this.dialog.open(TemplateDialogComponent, {
      width: '500px',
      data: {type:'updatequestion'}
    });
    dialogRef.afterClosed().subscribe(result => {
      
    })
   
  }
  openFalse() {
  
    const dialogRef = this.dialog.open(TemplateDialogComponent, {
      width: '500px',
      data: {type:'noupdatequestion'}
    });
   
  }
}
