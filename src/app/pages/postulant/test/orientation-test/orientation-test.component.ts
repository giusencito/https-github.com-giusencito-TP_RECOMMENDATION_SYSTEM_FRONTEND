import { TestService } from './../../../../services/test/test.service';
import { OptionService } from 'src/app/services/option/option.service';
import { QuestionService } from './../../../../services/question/question.service';
import { SectionService } from './../../../../services/section/section.service';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Test } from 'src/app/models/test/Test';
import { Section } from 'src/app/models/test/Section';

@Component({
  selector: 'app-orientation-test',
  templateUrl: './orientation-test.component.html',
  styleUrls: ['./orientation-test.component.css']
})
export class OrientationTestComponent implements OnInit {
  testSource : any[] = []
  sectionSource : any[] = []
  questionSource : any[] = []
  optionSource : any[] = []

testOriented!:string
Test!:Test;
sectionNumber!:number
Section!:Section
sectionTotal!:number
total!:number
questionNumber=1
questionName!:string
optionSelected=-1;
actualScore=0
  constructor(private SectionService:SectionService,private QuestionService:QuestionService,private OptionService:OptionService,private TestService:TestService,private Router:Router) { 
   
    
    this.Test = {} as Test;
    this.Section={} as Section
  }

  ngOnInit(): void {
    this.getFirstTest()
  }
  getFirstTest(){
    this.TestService.getTestbyTypeTest(2).subscribe((response:any)=>{
             this.testSource= response.rows
             this.Test= this.testSource[0]
             this.getsections(this.Test.id)
    })
  }
  getsections(id:number){

    this.SectionService.getsectionbyTest(id).subscribe((response:any)=>{
         this.sectionSource = response.rows
         this.sectionTotal=response.total
         console.log(this.sectionTotal)
         this.sectionNumber=0
         this.Section = this.sectionSource[this.sectionNumber]
         this.getquestions(this.Section.id)
    
    })


  }
  getquestions(id:number){
    this.QuestionService.getquestionbySection(id).subscribe((response:any)=>{
         this.total = response.total
         this.questionSource=response.rows
         this.questionName=this.questionSource[this.questionNumber-1].questionname
         this.getoptions(this.questionNumber)
        
    })
  }
  getoptions(id:number){
    this.OptionService.getoptionbyquestion(id).subscribe((response)=>{
      this.optionSource=response.rows
    })
  }
  continue(){
    if(this.questionNumber==this.total){
      
      console.log(this.sectionNumber)
      if(this.sectionNumber+1==this.sectionTotal){
           console.log("aqui")
      }else{
      
        this.sectionNumber= this.sectionNumber+1
        this.Section = this.sectionSource[this.sectionNumber]
        this.questionNumber=1
        this.optionSelected= -1
        this.getquestions(this.Section.id)
        
      }





    }else{
      this.actualScore=this.optionSelected+this.actualScore
      this.optionSelected= -1
      this.questionNumber=this.questionNumber+1
      this.questionName=this.questionSource[this.questionNumber-1].questionname
         this.getoptions(this.questionNumber)
         
    }

  }



}
