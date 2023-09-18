import { NoContinueComponent } from './no-continue/no-continue.component';
import { TestService } from './../../../../services/test/test.service';
import { SectionService } from './../../../../services/section/section.service';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-result-emotional-test',
  templateUrl: './result-emotional-test.component.html',
  styleUrls: ['./result-emotional-test.component.css']
})
export class ResultEmotionalTestComponent implements OnInit {
  dataSource !:MatTableDataSource<any>;
  TestName!:string
  TestSection!:string
  sectionMaximun!:number
  score!:number
  constructor(private SectionService:SectionService,private TestService:TestService,private route:ActivatedRoute,private Router:Router,public dialog:MatDialog) {
    this.dataSource = new MatTableDataSource<any>();

   }

  ngOnInit() {
    this.score=parseInt(this.route.snapshot.paramMap.get('totalscore')!);
    this.sections()
  }
  sections(){
      this.TestService.getTestbyTypeTest(1).subscribe((response:any)=>{
              
               this.SectionService.getsectionbyTest( response.rows[0].id).subscribe((response:any)=>{
                   this.dataSource.data= response.rows
                   console.log(this.dataSource.data[0])
                   this.TestName=this.dataSource.data[0].test
                   this.TestSection=this.dataSource.data[0].sectionname
                   this.sectionMaximun=this.dataSource.data[0].totalscore
                   this.score=(this.score / this.sectionMaximun) * 100
                   this.score= Math.round(this.score)
                   console.log(this.score)
               })
      })
  }
  continue(){
    if(this.score>=70){
      this.Router.navigate(['/start-orientation-test'])

      
    }else{
      const dialogRef = this.dialog.open(NoContinueComponent, {
        width: '500px',
        data: {}
      });
      dialogRef.afterClosed().subscribe(result => {
        this.Router.navigate([`home-postulant`]);
      });
    }
   
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
