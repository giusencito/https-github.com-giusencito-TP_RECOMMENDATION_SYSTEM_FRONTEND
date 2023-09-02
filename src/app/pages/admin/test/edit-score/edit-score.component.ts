import { CreateOption } from './../../../../models/test/CreateOption';
import { ActivatedRoute } from '@angular/router';
import { OptionService } from './../../../../services/option/option.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Option } from 'src/app/models/test/Option';
import { TemplateDialogComponent } from 'src/app/pages/template-dialog/template-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-score',
  templateUrl: './edit-score.component.html',
  styleUrls: ['./edit-score.component.css']
})
export class EditScoreComponent implements OnInit {
  public changesoption!: FormGroup;
Option!:Option
CreateOption!:CreateOption
  constructor(private formBuilder:FormBuilder,private OptionService:OptionService,private ActivatedRoute:ActivatedRoute,public dialog:MatDialog) {
    this.Option={ } as Option
    this.CreateOption={} as CreateOption
     }

  ngOnInit() {
    let id =parseInt(this.ActivatedRoute.snapshot.paramMap.get('option')!);
    this.getOption(id)
    this.changesoption = this.formBuilder.group({
      nameoption:['',[Validators.required,Validators.minLength(3)]],
      scoreoption:['',[Validators.required,Validators.min(0)]],


    })
  }
  getOption(id:number){
    this.OptionService.getOptionbyId(id).subscribe((response:any)=>{
       this.Option=response
    })
  }
  update(){
    let id =parseInt(this.ActivatedRoute.snapshot.paramMap.get('option')!);
    let question =parseInt(this.ActivatedRoute.snapshot.paramMap.get('question')!);

    this.CreateOption.optionname=this.changesoption.controls['nameoption'].value
    this.CreateOption.optionscore=this.changesoption.controls['scoreoption'].value
    this.CreateOption.question=question
    this.OptionService.update(id,this.CreateOption).subscribe((response:any)=>{
       this.openTrue()
    },err=>{
       this.openFalse()
    })


  }
  openTrue() {

    const dialogRef = this.dialog.open(TemplateDialogComponent, {
      width: '500px',
      data: {type:'updateoption'}
    });
    dialogRef.afterClosed().subscribe(result => {
      
    })
   
  }
  openFalse() {
  
    const dialogRef = this.dialog.open(TemplateDialogComponent, {
      width: '500px',
      data: {type:'noupdateoption'}
    });
   
  }
}
