import { ActivatedRoute, Router } from '@angular/router';
import { SectionService } from './../../../../services/section/section.service';
import { QuestionService } from './../../../../services/question/question.service';
import { Section } from './../../../../models/test/Section';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { DialogEditQuestionCreateComponent } from '../edit-question-create/dialog-edit-question-create/dialog-edit-question-create.component';
import { TemplateDialogComponent } from 'src/app/pages/template-dialog/template-dialog.component';

@Component({
  selector: 'app-edit-question',
  templateUrl: './edit-question.component.html',
  styleUrls: ['./edit-question.component.css']
})
export class EditQuestionComponent implements OnInit {
  dataSource !:MatTableDataSource<any>;
  Section!:Section
  start=false
  constructor(private QuestionService:QuestionService,private SectionService:SectionService,private ActivatedRoute:ActivatedRoute,private Router:Router,public dialog:MatDialog) {
    this.Section = {} as Section
    this.dataSource = new MatTableDataSource<any>();

   }

  ngOnInit() {
    let id =parseInt(this.ActivatedRoute.snapshot.paramMap.get('section')!);
    console.log(id)
    this.getQuestions(id)
    this.getSectionByid(id)
  }
  getQuestions(id:number){
this.QuestionService.getquestionbySection(id).subscribe((response:any)=>{
  console.log(response.rows)
  this.dataSource.data=response.rows
  this.start=true
})
  }
  getSectionByid(id:number){
    this.SectionService.getSectionbyId(id).subscribe((response:any)=>{
      this.Section= response
    })


  }
  goToQuestion(id:number){
    let id2 =parseInt(this.ActivatedRoute.snapshot.paramMap.get('section')!);

    this.Router.navigate(['edit-question','section',id2,id]);
  


  }
  goToCreate(){
    let section =parseInt(this.ActivatedRoute.snapshot.paramMap.get('section')!);
    let test =parseInt(this.ActivatedRoute.snapshot.paramMap.get('test')!);

    this.Router.navigate(['edit-test',test,'edit-section',section,'edit-question-create']);


  }
  
  checklenght(length:number){
    if(length<=5){
     return 'spaceformunique'
    }else{
     return 'spaceform'
    }



 }

}
