import { RecommendationService } from './../../../services/recommendation/recommendation.service';
import { CourserecomendationService } from 'src/app/services/courserecomendation/courserecomendation.service';
import { CourseService } from 'src/app/services/course/course.service';
import { JobService } from 'src/app/services/job/job.service';
import { Component, OnInit } from '@angular/core';
import { Job } from 'src/app/models/result/job';
import { Course } from 'src/app/models/result/course';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  jobs:any[] = []
  opencourses:boolean = false
  jobdata!:Job
  coursedata!:Course
  courses: any[] = []
  cont:number = 0

  constructor(private RecommendationService:RecommendationService, private CourserecomendationService: CourserecomendationService, private CourseService:CourseService,
              private JobService:JobService) { 
              
              this.jobdata = {} as Job;
              this.coursedata = {} as Course;

  }

  ngOnInit() {
    this.recommendation()
    
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
                this.jobdata.resultTest = 1
                this.JobService.CreateJobs(this.jobdata).subscribe((response:any)=>{
                    this.jobs.push(response)
                })
            } 
          console.log(this.jobs);
              
    })
  }

  openCourses(id:number){
    if(this.opencourses == false){
      this.opencourses = true
      this.courses = []
      this.courserecommendation(id)
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

}
