import { JobService } from 'src/app/services/job/job.service';
import { TokenService } from './../../../services/token/token.service';
import { ResultTestService } from './../../../services/resultTest/result-test.service';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { HistoryRecommendation } from 'src/app/models/history/HistoryRecommendation';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-recommendation-history',
  templateUrl: './recommendation-history.component.html',
  styleUrls: ['./recommendation-history.component.css'],
  providers: [DatePipe]
})
export class RecommendationHistoryComponent implements OnInit {
  nameform!:FormGroup
  dateform!:FormGroup
  dataSourceoriginal !:MatTableDataSource<any>;
  dataSource!: MatTableDataSource<any>;
  data: any[] =[]
  names!:string
  type!:string
  start=false
  cols=3
  constructor(private ResultTestService:ResultTestService,private TokenService:TokenService,private Router:Router,private JobService:JobService,private formBuilder:FormBuilder,private datePipe: DatePipe) {
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
    this.getall()
  
    this.nameform=this.formBuilder.group({
      name:['',[Validators.required]],
     })
     this.dateform=this.formBuilder.group({
      date:['',[Validators.required]],
     })



  }
  
 getall(){
  this.JobService.getLinkedinJobsByPostulantsJustOne(this.TokenService.getId()).subscribe((response:any)=>{
    this.dataSourceoriginal.data=response.rows
    console.log( this.dataSource.data)
    this.dataSource.data=this.dataSourceoriginal.data
    console.log( this.dataSource.data)
    this.start=true
   
  },err=>{
    this.start=true
  })
 }
 GoToPast(date:Date,resultTest:number){
    this.Router.navigate(['one-recommendation-history'],{queryParams:{'Date':date,'ResultTest':resultTest}})
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
 
}
