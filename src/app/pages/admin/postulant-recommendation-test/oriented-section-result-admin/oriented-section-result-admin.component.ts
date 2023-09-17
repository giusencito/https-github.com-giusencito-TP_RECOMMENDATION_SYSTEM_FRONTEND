import { Component, OnInit,Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ResultSectionService } from 'src/app/services/resultSection/result-section.service';

@Component({
  selector: 'app-oriented-section-result-admin',
  templateUrl: './oriented-section-result-admin.component.html',
  styleUrls: ['./oriented-section-result-admin.component.css']
})
export class OrientedSectionResultAdminComponent implements OnInit {

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

}
