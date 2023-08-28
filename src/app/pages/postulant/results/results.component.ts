import { RecommendationService } from './../../../services/recommendation/recommendation.service';
import { CourserecomendationService } from 'src/app/services/courserecomendation/courserecomendation.service';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  jobs: any[] = []
  opencourses:boolean = false
  idtest:number = 1
  courses: any[] = []

  constructor(private RecommendationService:RecommendationService, private CourserecomendationService: CourserecomendationService) { 
   

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
              this.jobs = response;

              console.log(this.jobs);
    })
  }

  openCourses(id:number){
    if(this.opencourses == false){
      this.opencourses = true
      this.courserecommendation(id)
    }else{
      this.opencourses = false
    }
      
  }

  courserecommendation(id:number){
    console.log(id)
    console.log(this.idtest)
    
    console.log("esta afuera del servicio")
    
    this.CourserecomendationService.courseRecommendation(this.idtest).subscribe((response:any)=>{
      console.log("esta entrando")
      console.log(response)
      this.courses = response
    })
    
  }

}
