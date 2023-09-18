import { MatTableDataSource } from '@angular/material/table';
import { ResultSectionService } from './../../../services/resultSection/result-section.service';
import { Component, OnInit,Input } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-oriented-section-result',
  templateUrl: './oriented-section-result.component.html',
  styleUrls: ['./oriented-section-result.component.css']
})
export class OrientedSectionResultComponent implements OnInit {
  color: ThemePalette = 'primary';
  dataSource !:MatTableDataSource<any>;
  @Input()
  test !: number;
  @Input()
  resulttest !: number;
  constructor(private ResultSectionService:ResultSectionService) { 
    this.dataSource = new MatTableDataSource<any>();

  }

  ngOnInit(): void {
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
