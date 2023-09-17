import { TestService } from './../../../services/test/test.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Component, OnInit,Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-one-recommendation-history',
  templateUrl: './one-recommendation-history.component.html',
  styleUrls: ['./one-recommendation-history.component.css']
})
export class OneRecommendationHistoryComponent implements OnInit {
  dataSource !:MatTableDataSource<any>;
  resulTest!:number
  date!:Date
  constructor(private ActivatedRoute:ActivatedRoute,private TestService:TestService,private Router:Router) {
    this.dataSource = new MatTableDataSource<any>();

   }

  ngOnInit(): void {
  this.getTest()
  this.ActivatedRoute.queryParams.subscribe((params: Params)=>{
      this.date=params['Date']
      this.resulTest=params['ResultTest']
     
    })
  }
  getTest(){
    this.TestService.getAllTest().subscribe((response:any)=>{
          this.dataSource.data=response.rows
          this.dataSource.data.shift()
          this.dataSource.data.pop()

    })
  }
  GoToJobResults(){
    this.Router.navigate(['one-recommendation-history-result'],{queryParams:{'ResultTest': this.resulTest}})
  }
}
