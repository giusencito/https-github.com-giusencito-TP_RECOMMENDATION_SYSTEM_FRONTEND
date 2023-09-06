import { TokenService } from './../../../../services/token/token.service';
import { ResultSectionService } from './../../../../services/resultSection/result-section.service';
import { ResultTestService } from './../../../../services/resultTest/result-test.service';


import { TypetestService } from './../../../../services/typetest/typetest.service';
import { TestService } from './../../../../services/test/test.service';
import { OptionService } from 'src/app/services/option/option.service';
import { QuestionService } from './../../../../services/question/question.service';
import { SectionService } from './../../../../services/section/section.service';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Test } from 'src/app/models/test/Test';
import { Section } from 'src/app/models/test/Section';
import { ResultSection } from 'src/app/models/result/ResultSection';
import { CreateResultSection } from 'src/app/models/result/CreateResultSection';
import { CreateResultTest } from 'src/app/models/result/CreateResultTest';


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
  resultSectionSource: CreateResultSection[]=[]
testToTAL!:Number
testOriented!:string
Test!:Test;
Result!:CreateResultSection
TestNumber=2
CreateResultTest!:CreateResultTest
sectionNumber!:number
Section!:Section
sectionTotal!:number
total!:number
questionNumber=1
questionName!:string
optionSelected=-1;
actualScore=0
createTestid!:number
  constructor(private SectionService:SectionService,private QuestionService:QuestionService,private OptionService:OptionService,private TestService:TestService,
    private Router:Router,private TypetestService:TypetestService,private ResultTestService:ResultTestService,private ResultSectionService:ResultSectionService,
    private TokenService:TokenService
    ) { 
   
    
    this.Test = {} as Test;
    this.Section={} as Section
    this.Result= {} as CreateResultSection
    this.CreateResultTest ={} as CreateResultTest
  }

  ngOnInit(): void {
    this.getTest(this.TestNumber)
    this.getTypes()
    this.CreateResultTest.postulant= this.TokenService.getId()
  }
  CreateTest(){
    
    this.ResultTestService.CreateResultTest( this.CreateResultTest).subscribe((response:any)=>{
            
            this.createTestid=response.id.toString()
            this.resultSectionSource = this.resultSectionSource.map((section: CreateResultSection) => {
              return { ...section, resultTest: this.createTestid };
            });
            this.resultSectionSource.forEach((section) => {
              console.log(section)
               this.ResultSectionService.CreateSection(section).subscribe((response:any)=>{

               })
            });
           




    })

    
  }




  getTest(id:number){
    this.TestService.getTestbyTypeTest(id).subscribe((response:any)=>{
             this.testSource= response.rows
             this.Test= this.testSource[0]
             this.getsections(this.Test.id)
    })
  }
  getTypes(){
    this.TypetestService.getAll().subscribe((response:any)=>{
     this.testToTAL=response.total
    })
  }
  getsections(id:number){

    this.SectionService.getsectionbyTest(id).subscribe((response:any)=>{
         this.sectionSource = response.rows
         this.sectionTotal=response.total
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
         this.getoptions(this.questionSource[this.questionNumber-1].id)
        
        
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
         if(this.testToTAL==this.TestNumber){
                this.goReSULTS()
         }else{
          this.TestNumber=this.TestNumber+1
          this.optionSelected= -1
          this.questionNumber=1
          const newResult: CreateResultSection = {
            developmentPercentage: Math.round((this.actualScore / this.Section.totalscore) * 100),
            section: this.Section.id,
            resultTest: 0
          };
         
          
          this.actualScore=0
          this.resultSectionSource.push(newResult)
          console.log(this.resultSectionSource)
          this.getTest(this.TestNumber)
         }


           
         
      }else{
        const newResult: CreateResultSection = {
          developmentPercentage: Math.round((this.actualScore / this.Section.totalscore) * 100),
          section: this.Section.id,
          resultTest: 0
        }
        this.resultSectionSource.push(newResult)
        this.actualScore=0
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
         this.getoptions(this.questionSource[this.questionNumber-1].id)
         
    }

  }
  goReSULTS(){
    this.CreateTest()
    this.Router.navigate(['orientation-test-result'])
  }



}
