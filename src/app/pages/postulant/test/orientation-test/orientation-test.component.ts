import { TokenService } from './../../../../services/token/token.service';
import { ResultSectionService } from './../../../../services/resultSection/result-section.service';
import { ResultTestService } from './../../../../services/resultTest/result-test.service';
import { RecommendationService } from 'src/app/services/recommendation/recommendation.service';
import { CourserecomendationService } from 'src/app/services/courserecomendation/courserecomendation.service';

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
import { SectionOrientation } from 'src/app/models/test/SectionOrientation';
import { QuestionOrientation } from 'src/app/models/test/QuestionOrientation';
import { OptionOrientaion } from 'src/app/models/test/OptionOrientaion';


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
TestNumber=0
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
sectionName!:string

sectionArray:SectionOrientation[]=[]
questionArray:QuestionOrientation[]=[]
optionArray:OptionOrientaion[]=[]
sectionid!:number
sectionmaxnum!:number
  constructor(private SectionService:SectionService,private QuestionService:QuestionService,private OptionService:OptionService,private TestService:TestService,
    private Router:Router,private TypetestService:TypetestService,private ResultTestService:ResultTestService,private ResultSectionService:ResultSectionService,
    private TokenService:TokenService, private RecommendationService:RecommendationService, private CourserecomendationService:CourserecomendationService
    ) { 
   
    
    this.Test = {} as Test;
    this.Section={} as Section
    this.Result= {} as CreateResultSection
    this.CreateResultTest ={} as CreateResultTest
  }

  ngOnInit(): void {
    //this.getTest(this.TestNumber)
    //this.getTypes()
    this.excludes()
    this.CreateResultTest.postulant= this.TokenService.getId()
    this.RecommendationService.getAllJobs().subscribe((response:any)=>{
      console.log("Generando CSV de Jobs...!!")
    },err=>{
      alert('no se pudo hacer una conexión con Linkedin intente más tarde')
    })
    this.CourserecomendationService.GetAllCourses().subscribe((response:any)=>{
      console.log("Generando CSV de Cursos...!!")
    })




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
            this.Router.navigate(['orientation-test-result', this.createTestid])

           




    })

    
  }

  completeTest(id:number){
    this.TestService.getAllTheTest(id).subscribe((response:any)=>{
      this.testOriented=response.testname
      this.sectionArray=response.sections
      this.sectionNumber=0
      this.sectionName=  this.sectionArray[this.sectionNumber].section
      this.total=this.sectionArray[this.sectionNumber].questions.length
      this.questionArray=this.sectionArray[this.sectionNumber].questions
      this.sectionTotal= this.sectionArray[this.sectionNumber].totalscore
      this.sectionmaxnum=this.sectionArray.length
      this.sectionid= this.sectionArray[this.sectionNumber].id
      this.questionName=this.questionArray[this.questionNumber-1].questionname
      this.optionArray=this.questionArray[this.questionNumber-1].options
        
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
     this.testToTAL=response.total-1
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

excludes(){
  this.TestService.excludeTests(1,7).subscribe((response:any)=>{
        this.testSource=response.rows
        this.testToTAL=this.testSource.length-1
        this.completeTest(this.testSource[this.TestNumber].id)
  })
}






  continue(){
    if(this.questionNumber==this.total){
      
      if(this.sectionNumber+1==this.sectionmaxnum){
         if(this.testToTAL==this.TestNumber){
          const newResult: CreateResultSection = {
            developmentPercentage: Math.round((this.actualScore / this.sectionTotal) * 100),
            section:this.sectionid,
            resultTest: 0
          };
          this.resultSectionSource.push(newResult)
          console.log(this.resultSectionSource)
                this.goReSULTS()
         }else{
          //continuar dentro de un diferente  test
          console.log('nuevo test')
          this.TestNumber=this.TestNumber+1
          this.optionSelected= -1
          this.questionNumber=1
          const newResult: CreateResultSection = {
            developmentPercentage: Math.round((this.actualScore /  this.sectionTotal) * 100),
            section: this.sectionid,
            resultTest: 0
          };
          this.actualScore=0
          this.resultSectionSource.push(newResult)
          console.log(this.resultSectionSource)
          this.completeTest(this.testSource[this.TestNumber].id)
         }


           
         
      }else{
        //continuar dentro de un mismo de test y diferente seccion
        const newResult: CreateResultSection = {
          developmentPercentage: Math.round((this.actualScore /  this.sectionTotal) * 100),
          section:this.sectionid,
          resultTest: 0
        }
        this.resultSectionSource.push(newResult)
        this.actualScore=0
        this.sectionNumber= this.sectionNumber+1
        this.questionNumber=1
        this.sectionName=  this.sectionArray[this.sectionNumber].section
        this.total=this.sectionArray[this.sectionNumber].questions.length
        this.questionArray=this.sectionArray[this.sectionNumber].questions
        this.sectionTotal= this.sectionArray[this.sectionNumber].totalscore
        this.sectionmaxnum=this.sectionArray.length
        this.sectionid= this.sectionArray[this.sectionNumber].id
        this.questionName=this.questionArray[this.questionNumber-1].questionname
        this.optionArray=this.questionArray[this.questionNumber-1].options
        this.optionSelected= -1
        
      }





    }else{
      //continuar dentro de un mismo de test y misma seccion
      this.actualScore=this.optionSelected+this.actualScore
      this.optionSelected= -1
      this.questionNumber=this.questionNumber+1
      this.questionName=this.questionArray[this.questionNumber-1].questionname
      this.optionArray=this.questionArray[this.questionNumber-1].options
         
    }

  }
  goReSULTS(){
    console.log('acabo')
    this.CreateTest()
  }



}
