import { TestService } from './../../../../services/test/test.service';
import { OptionService } from 'src/app/services/option/option.service';
import { QuestionService } from './../../../../services/question/question.service';
import { SectionService } from './../../../../services/section/section.service';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { CreateResultSection } from 'src/app/models/result/CreateResultSection';
import { CreateResultTest } from 'src/app/models/result/CreateResultTest';
import { Section } from 'src/app/models/test/Section';
import { ResultTestService } from './../../../../services/resultTest/result-test.service';
import { ResultSectionService } from 'src/app/services/resultSection/result-section.service';
import { TokenService } from 'src/app/services/token/token.service';

@Component({
  selector: 'app-validation-test',
  templateUrl: './validation-test.component.html',
  styleUrls: ['./validation-test.component.css']
})
export class ValidationTestComponent implements OnInit {

  testActualSituation!:string
  sectionActualSituationname!:string
  total!:number
  questionName!:string
  questionNumber=1
  optionSelected=-1
  actualScore=0
  dataSource !:MatTableDataSource<any>;
  dataSource2 !:MatTableDataSource<any>;
  testSource : any[] = []
  sectionSource : any[] = []
  questionSource : any[] = []
  optionSource : any[] = []
  resultSectionSource: CreateResultSection[]=[]
  sectionNumber!:number
  Section!:Section
  sectionTotal!:number
  testToTAL!:Number
  TestNumber=7
  CreateResultTest!:CreateResultTest
  createTestid!:number

  constructor(private SectionService:SectionService,private QuestionService:QuestionService,private OptionService:OptionService,private TestService:TestService,private Router:Router, 
    private ResultTestService:ResultTestService, private ResultSectionService:ResultSectionService, private TokenService:TokenService) {

    this.dataSource = new MatTableDataSource<any>();
    this.dataSource2 = new MatTableDataSource<any>();
    this.CreateResultTest ={} as CreateResultTest
    this.Section={} as Section

  }

  ngOnInit() {
    this.getActualSituation()
    this.CreateResultTest.postulant= this.TokenService.getId()
    
  }

  getActualSituation(){
    this.TestService.getTestbyTypeTest(this.TestNumber).subscribe((response:any)=>{
      this.testActualSituation=response.rows[0].testname
      this.getsections(response.rows[0].id)
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
      
      if(this.sectionNumber+1==this.sectionTotal){
          const newResult: CreateResultSection = {
            developmentPercentage: Math.round((this.actualScore / this.Section.totalscore) * 100),
            section: this.Section.id,
            resultTest: 0
          };
          this.resultSectionSource.push(newResult)

          this.goReSULTS()
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
  }

  CreateTest(){
    
    this.ResultTestService.CreateResultTest( this.CreateResultTest).subscribe((response:any)=>{
            
            this.createTestid=response.id.toString()
            console.log(this.resultSectionSource)
            this.resultSectionSource = this.resultSectionSource.map((section: CreateResultSection) => {
              return { ...section, resultTest: this.createTestid };
            });
            this.resultSectionSource.forEach((section) => {
              console.log(section)
               this.ResultSectionService.CreateSection(section).subscribe((response:any)=>{

               })
            });
            this.Router.navigate(['validation-test-result', this.createTestid])

           




    })

    
  }
}
