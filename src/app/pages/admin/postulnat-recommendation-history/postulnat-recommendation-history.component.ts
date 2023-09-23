import { SelectedjobService } from 'src/app/services/selectedjob/selectedjob.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { JobService } from 'src/app/services/job/job.service';
import { TokenService } from './../../../services/token/token.service';
import { MatTableDataSource } from '@angular/material/table';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { HistoryRecommendation } from 'src/app/models/history/HistoryRecommendation';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-postulnat-recommendation-history',
  templateUrl: './postulnat-recommendation-history.component.html',
  styleUrls: ['./postulnat-recommendation-history.component.css'],
  providers: [DatePipe]
})
export class PostulnatRecommendationHistoryComponent implements OnInit {
  nameform!:FormGroup
  dateform!:FormGroup
  dataSourceoriginal !:MatTableDataSource<any>;
  dataSource!: MatTableDataSource<any>;
  names!:string
  type!:string
  email!:string
  postulantid!:string
  start=false
  cols=3
  constructor(private formBuilder:FormBuilder,private datePipe: DatePipe,private SelectedjobService:SelectedjobService,private JobService:JobService,private ActivatedRoute:ActivatedRoute,private Router:Router) {
    this.dataSourceoriginal = new MatTableDataSource<any>();
    this.dataSource = new MatTableDataSource<any>();
    window.addEventListener('resize', () => {
     
      if (window.innerWidth <= 767) {
        this.cols = 2; 
      } else if (window.innerWidth >= 1600) {
        this.cols = 3; 
      } else {
        this.cols = 3; 
      }
  
      });
   }

  ngOnInit(): void {
    console.log(this.dataSource.data)
    
    this.ActivatedRoute.queryParams.subscribe((params: Params)=>{
      this.postulantid  =params['postulant']
      this.email=params['email']
     
      this.getall(Number(this.postulantid))
    
     
    })
  
   
    this.nameform=this.formBuilder.group({
      name:['',[Validators.required]],
     })
     this.dateform=this.formBuilder.group({
      date:['',[Validators.required]],
     })
  }
  getall(id:number){
    
    this.JobService.getLinkedinJobsByPostulantsJustOne(id).subscribe((response:any)=>{
      this.dataSourceoriginal.data=response.rows
      this.dataSource.data=this.dataSourceoriginal.data
      this.start=true
     
    },err=>{this.start=true})
   }
  findbyMainJob(){
    const names=this.dataSourceoriginal.data.filter((element:HistoryRecommendation)=>{
      return element.jobName.toLowerCase().includes(this.nameform.controls['name'].value.toLowerCase())
  
    })
    this.dataSource.data=names
  
   }
   findbyDate(){
    
    const date=this.dateform.controls['date'].value
    const formattedDate = this.datePipe.transform(date, 'yyyy-MM-dd');
  
    const dates=this.dataSourceoriginal.data.filter((element:HistoryRecommendation)=>{
      
      const date2=element.ObtainDate
      const formattedDate2 = this.datePipe.transform(date2, 'yyyy-MM-dd');
  
      return formattedDate2 == formattedDate
  
    })
    this.dataSource.data=dates
   }
   GoToPast(date:Date,resultTest:number){
    this.Router.navigate(['postulant-recommendation-test'],{queryParams:{'Date':date,'ResultTest':resultTest,'postulant':this.postulantid,'email':this.email}})

 }
 checkEmailp(id:number){
  this.SelectedjobService.GetSelectedJobsByResultTest(id).subscribe((response:any)=>{
       if(response.total==0){
            return false
       }else{
          return true
       }
  })
 }
 
}
