import { ActivatedRoute, Router } from '@angular/router';
import { QuestionService } from './../../../../services/question/question.service';
import { Question } from './../../../../models/test/Question';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { OptionService } from 'src/app/services/option/option.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-option',
  templateUrl: './edit-option.component.html',
  styleUrls: ['./edit-option.component.css']
})
export class EditOptionComponent implements OnInit {
  dataSource !:MatTableDataSource<any>;
  Question!:Question
  public changesquestion!: FormGroup;

  constructor(private formBuilder:FormBuilder,private QuestionService:QuestionService,private optionService:OptionService,private ActivatedRoute:ActivatedRoute,private Router:Router) { 
    this.dataSource = new MatTableDataSource<any>();
    this.Question = {} as Question

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

    })
  }
  getQuestion(id:number){
      this.QuestionService.getQuestionbyId(id).subscribe((response:any)=>{
        this.Question=response
        this.changesquestion.controls['namequestion'].setValue(this.Question.questionname)
      })
  }
  goToScore(id:number){
    this.Router.navigate(['edit-score',id]);

  }
  goToCreate(){
    let id =parseInt(this.ActivatedRoute.snapshot.paramMap.get('question')!);

    this.Router.navigate(['edit-question',id,'create-option']);

  }
}
