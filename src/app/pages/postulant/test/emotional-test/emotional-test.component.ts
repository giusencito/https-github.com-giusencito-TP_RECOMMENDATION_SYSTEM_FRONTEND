import { SpinnerService } from './../../../../services/spinner/spinner.service';
import { TestService } from './../../../../services/test/test.service';
import { OptionService } from 'src/app/services/option/option.service';
import { QuestionService } from './../../../../services/question/question.service';
import { SectionService } from './../../../../services/section/section.service';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { QuestionOrientation } from 'src/app/models/test/QuestionOrientation';
import { OptionOrientaion } from 'src/app/models/test/OptionOrientaion';
@Component({
  selector: 'app-emotional-test',
  templateUrl: './emotional-test.component.html',
  styleUrls: ['./emotional-test.component.css']
})
export class EmotionalTestComponent implements OnInit {
  dataSource !:MatTableDataSource<any>;
  dataSource2 !:MatTableDataSource<any>;
  testEmotional!:string
  sectionEmotionalName!:string
  total!:number
  optionSelected=-1;
  questionNumber=1
  questionName!:string
  actualScore=0
  start=false
  totalscore!:number
  questions:QuestionOrientation[]=[]
  options:OptionOrientaion[]=[]
  constructor(private OptionService:OptionService,
    private Router:Router,private SpinnerService:SpinnerService) { 
    this.dataSource = new MatTableDataSource<any>();
    this.dataSource2 = new MatTableDataSource<any>();
    console.log(this.optionSelected)
  }

  ngOnInit() {
    this.SpinnerService.show()
   this.getEmotionalAdvance()
  }
  getEmotionalAdvance(){
    this.OptionService.QuestionsWithOptions(1).subscribe((response:any)=>{
              this.testEmotional=response.testname
              this.totalscore=response.total
              this.sectionEmotionalName=  response.sectionname
              this.total=response.questions.length
              this.questions=response.questions
              this.questionName=this.questions[0].questionname
              this.options=this.questions[0].options
              this.start=true
    })
  }

  continue(){
    if(this.questionNumber==this.total){
      console.log(this.actualScore)
      this.seeResults()
    }else{
      this.actualScore=this.optionSelected+this.actualScore
      this.optionSelected= -1
      this.questionNumber=this.questionNumber+1
      this.questionName=this.questions[this.questionNumber-1].questionname
      this.options=this.questions[this.questionNumber-1].options
    }
    
  }
  seeResults(){
    this.Router.navigate([`result-emotional-test`,this.actualScore],{queryParams:{Testname:this.testEmotional,sectionname:this.sectionEmotionalName,totalscore:this.totalscore}});
  }

}
