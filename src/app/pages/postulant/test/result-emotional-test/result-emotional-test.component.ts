import { SpinnerService } from './../../../../services/spinner/spinner.service';
import { NoContinueComponent } from './no-continue/no-continue.component';
import { TestService } from './../../../../services/test/test.service';
import { SectionService } from './../../../../services/section/section.service';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Params, Router } from '@angular/router';
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
  start=false;
  constructor(private SectionService:SectionService,private TestService:TestService,private route:ActivatedRoute,private Router:Router,public dialog:MatDialog,private SpinnerService:SpinnerService) {
    this.dataSource = new MatTableDataSource<any>();

   }

  ngOnInit() {
    this.SpinnerService.show()
    this.score=parseInt(this.route.snapshot.paramMap.get('totalscore')!);
    this.route.queryParams.subscribe((params: Params)=>{
      this.TestName  =params['Testname']
      this.TestSection  =params['sectionname']
      this.sectionMaximun  =params['totalscore']


    })
    
      this.sections();
   
  }
  sections(){
    
              
              
                 
                  
                   this.score=(this.score / this.sectionMaximun) * 100
                   this.score= Math.round(this.score)
                   console.log(this.score)
                   this.start=true
              
     
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
