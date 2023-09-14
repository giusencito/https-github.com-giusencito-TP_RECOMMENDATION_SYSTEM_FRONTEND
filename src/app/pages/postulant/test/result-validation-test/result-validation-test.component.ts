import { ResultSectionService } from 'src/app/services/resultSection/result-section.service';
import { MatTableDataSource } from '@angular/material/table';
import { TestService } from 'src/app/services/test/test.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Test } from 'src/app/models/test/Test';

@Component({
  selector: 'app-result-validation-test',
  templateUrl: './result-validation-test.component.html',
  styleUrls: ['./result-validation-test.component.css']
})
export class ResultValidationTestComponent implements OnInit {
  dataSource !:MatTableDataSource<any>;
  resulTest!:number
  test!:Test
  testidvar!:number
  constructor(private TestService:TestService,private ResultSectionService:ResultSectionService,private route:ActivatedRoute, private Router:Router) { 
    this.dataSource = new MatTableDataSource<any>();
    this.test = {} as Test 
  }

  ngOnInit() {
    this.getTest()
    this.resulTest=parseInt(this.route.snapshot.paramMap.get('resultTest')!);
  }

  getTest(){
    this.TestService.getTestbyTypeTest(7).subscribe((response:any)=>{
          this.test = response.rows[0]
          this.testidvar = this.test.id
          console.log(this.testidvar) 
          console.log(this.test)
    })
  }

  GoToHome(){
    this.Router.navigate(['/home-postulant'])
  }
}
