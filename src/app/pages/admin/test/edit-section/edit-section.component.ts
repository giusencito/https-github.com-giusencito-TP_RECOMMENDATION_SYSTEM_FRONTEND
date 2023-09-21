import { TestService } from 'src/app/services/test/test.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SectionService } from './../../../../services/section/section.service';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Test } from 'src/app/models/test/Test';

@Component({
  selector: 'app-edit-section',
  templateUrl: './edit-section.component.html',
  styleUrls: ['./edit-section.component.css']
})
export class EditSectionComponent implements OnInit {
  dataSource !:MatTableDataSource<any>;
  Test!:Test
  testNumber!:number
  start=false
  constructor(private SectionService:SectionService,private ActivatedRoute:ActivatedRoute,private Router:Router,
    private TestService:TestService) { 
    this.dataSource = new MatTableDataSource<any>();
    this.Test = {} as Test

  }
  checklenght(length:number){
     if(length<=5){
      return 'spaceformunique'
     }else{
      return 'spaceform'
     }



  }
  ngOnInit() {
    let id =parseInt(this.ActivatedRoute.snapshot.paramMap.get('test')!);
    this.testNumber =parseInt(this.ActivatedRoute.snapshot.paramMap.get('test')!);

    this.getsections(id)
    this.getTest(id)

  }
  getsections(id:number){
        this.SectionService.getsectionbyTest(id).subscribe((response:any)=>{
                      this.dataSource.data = response.rows
                      this.start=true
                      
        }
        )
  }
  getTest(id:number){
    this.TestService.getTestbyId(id).subscribe((response:any)=>{
      this.Test = response
    })
  }
  goQuestions(id:number){
    this.Router.navigate(['edit-test',this.testNumber,'edit-section',id,'edit-question']);

  }
  goTocreate(){
    this.Router.navigate(['edit-test',this.testNumber,'edit-section-create']);


  }
  

}
