import { TestService } from './../../../../services/test/test.service';
import { OptionService } from 'src/app/services/option/option.service';
import { QuestionService } from './../../../../services/question/question.service';
import { SectionService } from './../../../../services/section/section.service';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
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
  constructor(private SectionService:SectionService,private QuestionService:QuestionService,private OptionService:OptionService,private TestService:TestService,private Router:Router) { 
    this.dataSource = new MatTableDataSource<any>();
    this.dataSource2 = new MatTableDataSource<any>();
    console.log(this.optionSelected)
  }

  ngOnInit() {
    this.getEmotional()
  }
  getEmotional(){
    this.TestService.getTestbyTypeTest(1).subscribe((response:any)=>{
      this.testEmotional=response.rows[0].testname
      this.getsections(response.rows[0].id)
    })
  }
  getsections(id:number){
    this.SectionService.getsectionbyTest(id).subscribe((response:any)=>{
         this.sectionEmotionalName=  response.rows[0].sectionname
         this.getquestions( response.rows[0].id)
    })
  }
  getquestions(id:number){
    this.QuestionService.getquestionbySection(id).subscribe((response:any)=>{
         this.total = response.total
         this.dataSource.data=response.rows
         this.questionName=this.dataSource.data[this.questionNumber-1].questionname
         this.getoptions(this.questionNumber)
        
    })
  }
  getoptions(id:number){
    this.OptionService.getoptionbyquestion(id).subscribe((response)=>{
      this.dataSource2.data=response.rows
    })
  }
  continue(){
    if(this.questionNumber==this.total){
      console.log(this.actualScore)
      this.seeResults()
    }
    this.actualScore=this.optionSelected+this.actualScore
    this.optionSelected= -1
    this.questionNumber=this.questionNumber+1
    this.questionName=this.dataSource.data[this.questionNumber-1].questionname
       this.getoptions(this.questionNumber)
  }
  seeResults(){
    this.Router.navigate([`result-emotional-test`,this.actualScore]);
  }

}
