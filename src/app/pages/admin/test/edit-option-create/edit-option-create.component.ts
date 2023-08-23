import { CreateOption } from 'src/app/models/test/CreateOption';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OptionService } from 'src/app/services/option/option.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DialogEditQuestionCreateComponent } from '../edit-question-create/dialog-edit-question-create/dialog-edit-question-create.component';

@Component({
  selector: 'app-edit-option-create',
  templateUrl: './edit-option-create.component.html',
  styleUrls: ['./edit-option-create.component.css']
})
export class EditOptionCreateComponent implements OnInit {

  public changesoption!: FormGroup;
CreateOption!:CreateOption
  constructor(private formBuilder:FormBuilder,private OptionService:OptionService,private ActivatedRoute:ActivatedRoute,public dialog:MatDialog,private Router:Router) {
    this.CreateOption={ } as CreateOption
   }

  ngOnInit() {
    let id =parseInt(this.ActivatedRoute.snapshot.paramMap.get('question')!);
    
    this.changesoption = this.formBuilder.group({
      nameoption:['',[Validators.required,Validators.minLength(3)]],
      scoreoption:['',[Validators.required,Validators.min(0)]],


    })
    this.CreateOption.question=id
  }
  submit(){
    this.OptionService.createOption(this.CreateOption).subscribe((response:any)=>{
         this.openTrue()
    },err=>{
      this.openFalse()
    })
  }
  openTrue() {

    const dialogRef = this.dialog.open(DialogEditQuestionCreateComponent, {
      width: '500px',
      data: {type:true,text:'opcion'}
    });
    dialogRef.afterClosed().subscribe(result => {

      let question =parseInt(this.ActivatedRoute.snapshot.paramMap.get('question')!);

      this.Router.navigate([ 'edit-question',question]);

    })
   
  }
  openFalse() {
  
    const dialogRef = this.dialog.open(DialogEditQuestionCreateComponent, {
      width: '500px',
      data: {type:false}
    });
   
  }
}
