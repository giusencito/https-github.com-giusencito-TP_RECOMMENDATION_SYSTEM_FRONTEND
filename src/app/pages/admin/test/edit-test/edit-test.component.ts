import { Component, OnInit } from '@angular/core';
import { TestService } from 'src/app/services/test/test.service';
import { MatTableDataSource } from '@angular/material/table';
import { RouteReuseStrategy, Router } from '@angular/router';
@Component({
  selector: 'app-edit-test',
  templateUrl: './edit-test.component.html',
  styleUrls: ['./edit-test.component.css']
})
export class EditTestComponent implements OnInit {
  dataSource !:MatTableDataSource<any>;
  start=false
  constructor(private TestService:TestService,private Router:Router) { 
    this.dataSource = new MatTableDataSource<any>();
  }

  ngOnInit() {
    this.getTest()
  }
  getTest(){
    this.TestService.getAllTest().subscribe((response:any)=>{
      this.dataSource.data=response.rows
      this.start=true
    })
  }
  goSection(id:number){
    this.Router.navigate(['edit-test',id,'edit-section']);
  }
  checklenght(length:number){
    if(length<=5){
     return 'spaceformunique'
    }else{
     return 'spaceform'
    }



 }

}
