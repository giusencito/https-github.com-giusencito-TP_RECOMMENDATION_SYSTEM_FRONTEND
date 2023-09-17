import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { TestService } from 'src/app/services/test/test.service';

@Component({
  selector: 'app-postulant-recommendation-test',
  templateUrl: './postulant-recommendation-test.component.html',
  styleUrls: ['./postulant-recommendation-test.component.css']
})
export class PostulantRecommendationTestComponent implements OnInit {
  postulantid!:string;
  email!:string
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
      this.postulantid=params['postulant']
      this.email=params['email']
     

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
    this.Router.navigate(['postulant-recommendation-result'],{queryParams:{'ResultTest': this.resulTest,'postulant':this.postulantid,'email':this.email}})

  }

}
