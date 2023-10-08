import { MatTableDataSource } from '@angular/material/table';
import { ResultSectionService } from 'src/app/services/resultSection/result-section.service';
import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-validation-section-result',
  templateUrl: './validation-section-result.component.html',
  styleUrls: ['./validation-section-result.component.css']
})
export class ValidationSectionResultComponent implements OnInit {

  dataSource !:MatTableDataSource<any>;
  @Input()
  test !: number;
  @Input()
  resulttest !: number;
  constructor(private ResultSectionService:ResultSectionService) { 
    this.dataSource = new MatTableDataSource<any>();

  }

  ngOnInit(): void {
    console.log(this.test)
    console.log(this.resulttest)
    this.getbytestandResultTets(this.test)
  }
  getbytestandResultTets(test:number){
    this.ResultSectionService.getByTestandResulTest(test,this.resulttest).subscribe((response:any)=>{
      this.dataSource.data=response.rows
      
    })
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
