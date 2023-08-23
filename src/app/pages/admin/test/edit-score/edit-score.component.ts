import { ActivatedRoute } from '@angular/router';
import { OptionService } from './../../../../services/option/option.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Option } from 'src/app/models/test/Option';

@Component({
  selector: 'app-edit-score',
  templateUrl: './edit-score.component.html',
  styleUrls: ['./edit-score.component.css']
})
export class EditScoreComponent implements OnInit {
  public changesoption!: FormGroup;
Option!:Option
  constructor(private formBuilder:FormBuilder,private OptionService:OptionService,private ActivatedRoute:ActivatedRoute) {
    this.Option={ } as Option
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
}
