import { ResultSectionService } from './../../../services/resultSection/result-section.service';
import { MatTableDataSource } from '@angular/material/table';
import { TestService } from './../../../services/test/test.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-oriented-test-result',
  templateUrl: './oriented-test-result.component.html',
  styleUrls: ['./oriented-test-result.component.css']
})
export class OrientedTestResultComponent implements OnInit {
  dataSource !:MatTableDataSource<any>;
  resulTest!:number

  constructor(private TestService:TestService,private ResultSectionService:ResultSectionService,private route:ActivatedRoute) {
    this.dataSource = new MatTableDataSource<any>();



   }
  ngOnInit(): void {
    this.getTest()
    this.resulTest=parseInt(this.route.snapshot.paramMap.get('resultTest')!);

  }
  getTest(){
    this.TestService.getAllTest().subscribe((response:any)=>{
          this.dataSource.data=response.rows
          this.dataSource.data.shift()
          console.log(this.dataSource.data)
    })
  }
  

}
