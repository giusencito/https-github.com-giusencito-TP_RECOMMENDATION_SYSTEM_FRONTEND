import { AnswerDialogComponent } from './../../results/answer-dialog/answer-dialog.component';
import { CourserecomendationService } from 'src/app/services/courserecomendation/courserecomendation.service';
import { InterviewquestionService } from './../../../../services/interviewquestions/interviewquestion.service';
import { CourseService } from './../../../../services/course/course.service';
import { RecommendationService } from './../../../../services/recommendation/recommendation.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { JobService } from './../../../../services/job/job.service';
import { Component, OnInit } from '@angular/core';
import { Job } from 'src/app/models/result/job';
import { Course } from 'src/app/models/result/course';
import { Interviewquestion } from 'src/app/models/result/interviewquestion';
import { MatDialog } from '@angular/material/dialog';
import { SelectedJob } from 'src/app/models/result/selectedjob';
import { SelectedjobService } from 'src/app/services/selectedjob/selectedjob.service';
import { PostulateDialogComponent } from '../../results/postulate-dialog/postulate-dialog.component';


@Component({
  selector: 'app-resultHistory',
  templateUrl: './resultHistory.component.html',
  styleUrls: ['./resultHistory.component.css']
})
export class ResultHistoryComponent implements OnInit {
  jobs:any[] = []
  jobsorder:Job[]=[]
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
  selectedjob!:SelectedJob
  Posibilitypercentageint!:number
  GetPosibilitypercentageint!:number
  GetFilterPosibilitypercentageint!:number
  isPostulate: { [key: number]: boolean } = {};
  isLoading=false
  constructor(private JobService:JobService,private ActivatedRoute:ActivatedRoute,private RecommendationService:RecommendationService,
    private CourseService:CourseService,private InterviewquestionService:InterviewquestionService,private CourserecomendationService:CourserecomendationService,
    public dialog:MatDialog, private SelectedjobService:SelectedjobService, private Router:Router) { 
    this.jobdata = {} as Job;
    this.selectedjob= {} as SelectedJob
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

          for(const jobsreturned of response.rows){
            this.GetPosibilitypercentageint = jobsreturned.posibilityPercentage * 100
            jobsreturned.posibilityPercentage = Math.round(this.GetPosibilitypercentageint)
          }
          this.jobs = response.rows
          console.log(this.jobs)
          this.jobsorder=this.jobs
          console.log(this.jobsorder)
          this.isLoading=true
    })
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
                if (!isNaN(job.similarity_pred) && job.similarity_pred % 1 !== 0) {
                  this.jobdata.posibilityPercentage = parseFloat(job.similarity_pred.toFixed(4));
                } else {
                  this.jobdata.posibilityPercentage = job.similarity_pred;
                }
                this.jobdata.resultTest = this.resultTest
                this.JobService.CreateJobs(this.jobdata).subscribe((response:any)=>{
                  this.Posibilitypercentageint = response.posibilityPercentage * 100
                  response.posibilityPercentage = Math.round(this.Posibilitypercentageint)
                  this.jobs.push(response)
                })
            } 
          console.log(this.jobs);
              
        })
      } else {
        for(const jobsreturned of responsejobs.rows){
          this.GetPosibilitypercentageint = jobsreturned.posibilityPercentage * 100
          jobsreturned.posibilityPercentage = Math.round(this.GetPosibilitypercentageint)
        }
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


  JobFilter(){
      if (this.ascendingOrder) {
        this.jobsorder = this.jobsorder.sort((a:Job, b:Job) => a.posibilityPercentage - b.posibilityPercentage);
      } else {
        this.jobsorder = this.jobsorder.sort((a:Job, b:Job) => b.posibilityPercentage - a.posibilityPercentage);
      }
      
      for(const onejob of this.jobsorder){
        if(onejob.posibilityPercentage % 1 !== 0){
          this.GetFilterPosibilitypercentageint = onejob.posibilityPercentage * 100
          onejob.posibilityPercentage = Math.round(this.GetFilterPosibilitypercentageint) 
        }
      }
      this.jobs = this.jobsorder
      this.ascendingOrder = !this.ascendingOrder;
      
  }

  Postulate(id:number){
    console.log(id)
    this.SelectedjobService.GetSelectedJobsByLinkedinJobsId(id).subscribe((responseselected:any)=>{
      console.log(responseselected.rows)
      if(responseselected.total == 0){
        this.selectedjob.job = id
        this.isPostulate[id] = false

        this.SelectedjobService.CreateSelectedJobs(this.selectedjob).subscribe((response:any)=>{
          const dialogRef2 = this.dialog.open(PostulateDialogComponent,{
            data: this.isPostulate[id]
          });
          this.isPostulate[id] = true;
          console.log(this.isPostulate[id])
        })  
      }
      else{
          this.isPostulate[id] = true;
          console.log(this.isPostulate[id])
          const dialogRef2 = this.dialog.open(PostulateDialogComponent,{
            data: this.isPostulate[id]
          });
      }
    })






  }

  GoToHistory(){
    this.Router.navigate(['/recommendation-history'])
  }
  
}
