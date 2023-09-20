import { ResultSectionService } from './../../../services/resultSection/result-section.service';
import { MatTableDataSource } from '@angular/material/table';
import { TestService } from './../../../services/test/test.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-oriented-test-result',
  templateUrl: './oriented-test-result.component.html',
  styleUrls: ['./oriented-test-result.component.css']
})
export class OrientedTestResultComponent implements OnInit {
  dataSource !:MatTableDataSource<any>;
  resulTest!:number

  constructor(private TestService:TestService,private ResultSectionService:ResultSectionService,private route:ActivatedRoute, private Router:Router) {
    this.dataSource = new MatTableDataSource<any>();



   }
  ngOnInit(): void {
    this.getTest()
    this.dataSource.data.length=0
    this.resulTest=parseInt(this.route.snapshot.paramMap.get('resultTest')!);

  }
  getTest(){
    this.TestService.getAllTest().subscribe((response:any)=>{
          this.dataSource.data=response.rows
          this.dataSource.data.shift()
          this.dataSource.data.pop()
          console.log(this.dataSource.data)
    })
  }
  
  GoToJobResults(){
    console.log(this.resulTest)

    this.Router.navigate(['results-jobs', this.resulTest])

  }

}
