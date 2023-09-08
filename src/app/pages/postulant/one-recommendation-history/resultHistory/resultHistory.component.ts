import { ActivatedRoute, Params } from '@angular/router';
import { JobService } from './../../../../services/job/job.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resultHistory',
  templateUrl: './resultHistory.component.html',
  styleUrls: ['./resultHistory.component.css']
})
export class ResultHistoryComponent implements OnInit {
  jobs:any[] = []
  resultTest!:number
  constructor(private JobService:JobService,private ActivatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.ActivatedRoute.queryParams.subscribe((params: Params)=>{
      this.resultTest=params['ResultTest']
      this.GetJoBbs()
     
    })
  }
  GetJoBbs(){
    this.JobService.GetLinkedinJobbyResultTestId(this.resultTest).subscribe((response:any)=>{
          this.jobs=response.rows
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
  
}
