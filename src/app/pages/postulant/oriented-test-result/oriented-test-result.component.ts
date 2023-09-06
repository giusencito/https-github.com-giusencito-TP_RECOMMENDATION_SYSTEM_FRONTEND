import { ResultSectionService } from './../../../services/resultSection/result-section.service';
import { MatTableDataSource } from '@angular/material/table';
import { TestService } from './../../../services/test/test.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-oriented-test-result',
  templateUrl: './oriented-test-result.component.html',
  styleUrls: ['./oriented-test-result.component.css']
})
export class OrientedTestResultComponent implements OnInit {
  dataSource !:MatTableDataSource<any>;
  constructor(private TestService:TestService,private ResultSectionService:ResultSectionService) {
    this.dataSource = new MatTableDataSource<any>();



   }

  ngOnInit(): void {
    this.getTest()
  }
  getTest(){
    this.TestService.getAllTest().subscribe((response:any)=>{
          this.dataSource.data=response.rows
          this.dataSource.data.shift()
          console.log(this.dataSource.data)
    })
  }
  

}
