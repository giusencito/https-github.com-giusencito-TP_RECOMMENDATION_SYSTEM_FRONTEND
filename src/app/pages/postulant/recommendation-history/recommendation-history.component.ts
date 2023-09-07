import { TokenService } from './../../../services/token/token.service';
import { ResultTestService } from './../../../services/resultTest/result-test.service';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-recommendation-history',
  templateUrl: './recommendation-history.component.html',
  styleUrls: ['./recommendation-history.component.css']
})
export class RecommendationHistoryComponent implements OnInit {
  dataSource !:MatTableDataSource<any>;


  constructor(private ResultTestService:ResultTestService,private TokenService:TokenService) {
    this.dataSource = new MatTableDataSource<any>();
   }

  ngOnInit(): void {
    this.getall()
  }
 getall(){
  this.ResultTestService.GetByPostulant(this.TokenService.getId()).subscribe((response:any)=>{
    this.dataSource.data=response.rows
  })
 }
}
