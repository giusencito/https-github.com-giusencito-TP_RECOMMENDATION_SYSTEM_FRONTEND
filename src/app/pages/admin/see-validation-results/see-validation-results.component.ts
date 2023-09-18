import { ActivatedRoute, Params, Router } from '@angular/router';
import { ResultSectionService } from './../../../services/resultSection/result-section.service';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-see-validation-results',
  templateUrl: './see-validation-results.component.html',
  styleUrls: ['./see-validation-results.component.css']
})
export class SeeValidationResultsComponent implements OnInit {

  dataSource !:MatTableDataSource<any>;
  
  test !: number;
  
  resulttest !: number;
  constructor(private ResultSectionService:ResultSectionService,private ActivatedRoute:ActivatedRoute,private Router:Router) { 
    this.dataSource = new MatTableDataSource<any>();

  }

  ngOnInit(): void {
    this.ActivatedRoute.queryParams.subscribe((params: Params)=>{
      this.resulttest  =params['resultTest']
      this.test=8
      this.getbytestandResultTets(this.test)

     
    
     
    })
  }
  getbytestandResultTets(test:number){
    this.ResultSectionService.getByTestandResulTest(test,this.resulttest).subscribe((response:any)=>{
      this.dataSource.data=response.rows
      console.log( this.dataSource.data)
      
    })
 }
 return(){
  this.Router.navigate(['home-admin'])
 }
 spinnerStyle(percetaje:number) {
  if(percetaje<=29){
    return 'spinnerbad'
  }
  if(percetaje>=30 && percetaje<=69){
   return 'spinnermed'
 
  }
  else{
   return 'spinnergood'
 
  }
 
  
 
 }

}
