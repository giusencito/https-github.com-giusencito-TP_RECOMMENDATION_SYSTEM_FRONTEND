import { RecommendationService } from './../../../services/recommendation/recommendation.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Params } from '@angular/router';
import { Course } from 'src/app/models/result/course';
import { Interviewquestion } from 'src/app/models/result/interviewquestion';
import { Job } from 'src/app/models/result/job';
import { CourseService } from 'src/app/services/course/course.service';
import { CourserecomendationService } from 'src/app/services/courserecomendation/courserecomendation.service';
import { InterviewquestionService } from 'src/app/services/interviewquestions/interviewquestion.service';
import { JobService } from 'src/app/services/job/job.service';
import { AnswerDialogComponent } from '../../postulant/results/answer-dialog/answer-dialog.component';

@Component({
  selector: 'app-postulant-recommendation-result',
  templateUrl: './postulant-recommendation-result.component.html',
  styleUrls: ['./postulant-recommendation-result.component.css']
})
export class PostulantRecommendationResultComponent implements OnInit {

  jobs:any[] = []
  jobsorder:Job[] = []
  resultTest!:number
  opencourses:boolean = false
  jobdata!:Job
  jobdataselected!:Job
  coursedata!:Course
  interviewquestiondata !:Interviewquestion
  courses: any[] = []
  questions: any[] = []
  answers: any[] = []
  questionsanswerslist: any[] = []
  cont:number = 0
  ascendingOrder:boolean = false
  constructor(private JobService:JobService,private ActivatedRoute:ActivatedRoute,private RecommendationService:RecommendationService,
    private CourseService:CourseService,private InterviewquestionService:InterviewquestionService,private CourserecomendationService:CourserecomendationService,
    public dialog:MatDialog) { 
    this.jobdata = {} as Job;
    this.coursedata = {} as Course;
    this.jobdataselected = {} as Job;
    this.interviewquestiondata = {} as Interviewquestion;
  }

  ngOnInit() {
    this.ActivatedRoute.queryParams.subscribe((params: Params)=>{
      this.resultTest=params['ResultTest']
      this.GetJoBbs()
     
    })
  }
  GetJoBbs(){
    this.JobService.GetLinkedinJobbyResultTestId(this.resultTest).subscribe((response:any)=>{
          this.jobs=response.rows
          this.jobsorder=this.jobs
    })
  }

  JobFilter(){
   
      
    if (this.ascendingOrder) {
      this.jobsorder = this.jobsorder.sort((a:Job, b:Job) => a.posibilityPercentage - b.posibilityPercentage);
    } else {
      this.jobsorder = this.jobsorder.sort((a:Job, b:Job) => b.posibilityPercentage - a.posibilityPercentage);
    }
    this.ascendingOrder = !this.ascendingOrder;
    
 

 
}

  isRemote(Jobname:string){
    const remotePatterns = [
      'Developer - Remote - Latin America',
      'Online Job',
      '(Remote)',
      'Remote',
      'Remote Work',
      'Remote Job',
      'Remote job',
      'Work from home',
      'Work from Home',
      'Remoto',
      'Developer- Remote - Latin America',
      'remoto'

    ];
  
    const isRemote = remotePatterns.some(pattern => Jobname.includes(pattern));
    return isRemote ? 'Remoto' : 'No Remoto';
   




  }
  translate(date:string):string{
    date=date.replace('ago','')
    const translations: { [key: string]: string } = {
      days: 'dias',
      weeks: 'semanas',
      week: 'semana',
      months: 'meses',
      day:'dia',
      hours:'horas',
      hour:'hora'

    };
    for (const key of Object.keys(translations)) {
      if (date.includes(key)) {
        return date.replace(key, translations[key]);
      }
    }
   
    return date;
    
  }
  gotoUrl(url:string){
    window.open(url, '_blank');
  }
  gotoCourseUrl(url:string){
    window.open(url, '_blank');
  }
  recommendation(){
    this.JobService.GetLinkedinJobbyResultTestId(this.resultTest).subscribe((responsejobs:any)=>{
      console.log(responsejobs.rows)
      if(responsejobs.rows.length == 0){
        this.RecommendationService.hydridRecommendation().subscribe((response:any)=>{
          
          for(const job of response){       
                const validCharactersRegex: RegExp = /[\x20-\x7E\u00A0-\u00FF\u0100-\u017F]/g;
                const cleanedText: string = job.Description.match(validCharactersRegex)?.join('') || '';
                this.jobdata.jobName = job.Jobname
                this.jobdata.jobDescription = cleanedText
                this.jobdata.jobUrl = job.URL
                this.jobdata.jobLocation = job.Location
                this.jobdata.jobCompany = job.Company
                this.jobdata.jobDate = job.Date
                this.jobdata.posibilityPercentage = job.similarity_pred
                this.jobdata.resultTest = this.resultTest
                this.JobService.CreateJobs(this.jobdata).subscribe((response:any)=>{
                    this.jobs.push(response)
                })
            } 
          console.log(this.jobs);
              
        })
      } else {
        this.jobs = responsejobs.rows
        console.log(this.jobs)
      }
    })
    
  }

  openCourses(id:number){
    if(this.opencourses == false){
      this.opencourses = true
      this.courses = []
      this.questions = []
      this.answers = []
      this.questionsanswerslist = []
      this.JobService.GetJobById(id).subscribe((response:any)=>{
        this.jobdataselected = response
        console.log(this.jobdataselected)
      })
      this.courserecommendation(id)
      this.QuestionandAnswwerRecomendation(id)
    }else{
      this.opencourses = false
    }
      
  }

  courserecommendation(id:number){
    console.log(id)
    
    console.log("esta afuera del servicio")
    this.CourseService.GetCoursesByLinkedinJobsId(id).subscribe((responsecoursesjob:any)=>{
      console.log(responsecoursesjob.rows)
      if(responsecoursesjob.rows.length == 0){
        this.CourserecomendationService.courseRecommendation(id).subscribe((response:any)=>{
          console.log("esta entrando")

          for(const course of response){
            this.coursedata.courseName = course.CourseTitle
            this.coursedata.courseDescription = course.Description
            this.coursedata.Url = course.URL        
            this.coursedata.job = id   
            
            this.CourseService.CreateCourses(this.coursedata).subscribe((response:any)=>{
              this.courses.push(response) 
            }) 
            
          }
          console.log(this.courses)
        })
      } else {
        this.courses = responsecoursesjob.rows
        console.log(this.courses)
      }
    })
  }

  QuestionandAnswwerRecomendation(id:number){
    console.log(id)
    console.log("esta afuera del servicio QuestionAnswers")
    this.InterviewquestionService.GetQuestionsbyJobId(id).subscribe((responsequestions:any)=>{
      console.log(responsequestions.rows)
      if(responsequestions.rows.length == 0){
        this.CourserecomendationService.QuestionRecommendation(id).subscribe((response:any)=>{
          console.log("esta entrando a la recomendacion QuestionAnswers")
          const indexRespuestas = response.indexOf("Respuestas:");
          const preguntas = response.slice(1, indexRespuestas);
          const respuestas = response.slice(indexRespuestas + 1);
          this.questions = preguntas
          this.answers = respuestas
          console.log("Con los numeros iniciales de las preguntas y respuestas")
          console.log(this.questions)
          console.log(this.answers)
          this.questions = this.questions.map(question => question.split('. ')[1]);
          this.answers = this.answers.map(answer => answer.split('. ')[1]);
          console.log("Quitando los numeros iniciales de las preguntas y respuestas")
          console.log(this.questions)
          console.log(this.answers)
          for(let i = 0; i < this.questions.length; i++){
            this.interviewquestiondata.question = this.questions[i]  
            this.interviewquestiondata.answer = this.answers[i]
            this.interviewquestiondata.job = id
    
            this.InterviewquestionService.CreateInterviewQuestions(this.interviewquestiondata).subscribe((response:any)=>{
               this.questionsanswerslist.push(response)
            })
          } 
          console.log(this.questionsanswerslist)
        })
      }else{
        this.questionsanswerslist = responsequestions.rows
        console.log(this.questionsanswerslist)
      }

    })
    
  }

  openAnswer(answer:string){
    console.log(answer)
    const dialogRef= this.dialog.open(AnswerDialogComponent,{
      data: answer
    })
  }

}
