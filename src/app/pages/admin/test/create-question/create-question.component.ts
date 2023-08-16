import { CreateOption } from 'src/app/models/test/CreateOption';
import { ActivatedRoute, Router } from '@angular/router';
import { CreateQuestion } from './../../../../models/test/CreateQuestion';
import { QuestionService } from './../../../../services/question/question.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators,ValidatorFn,ValidationErrors,AbstractControl, FormControl } from '@angular/forms';
import { OptionService } from 'src/app/services/option/option.service';

@Component({
  selector: 'app-create-question',
  templateUrl: './create-question.component.html',
  styleUrls: ['./create-question.component.css']
})
export class CreateQuestionComponent implements OnInit {
  public changesquestion!: FormGroup;
  public changesoption!: FormGroup;
  
  constructor(private formBuilder:FormBuilder,private QuestionService:QuestionService,private route:ActivatedRoute,private OptionService:OptionService,private router:Router) {

        this.CreateQuestion = {} as CreateQuestion
        this.CreateOption = {} as CreateOption

   }


  questionid!:number
  CreateQuestion!:CreateQuestion
  CreateOption!:CreateOption
  chargequestion=0
  createquestionavalible=true


  nextsection=false

  chargeoption=false
  optionnumber=0
  idtest!:number
  ngOnInit() {
    console.log(this.questionid)
    this.idtest=parseInt(this.route.snapshot.paramMap.get('id')!);
    this.CreateQuestion.section=parseInt(this.route.snapshot.paramMap.get('section')!);

    this.changesquestion = this.formBuilder.group({
      namequestion:['',[Validators.required,Validators.minLength(3),this.checkquestion()]],
     


    })
    this.changesoption = this.formBuilder.group({
      nameoption:['',[Validators.required,Validators.minLength(3)]],
      scoreoption:['',[Validators.required,Validators.min(0)]],


    })
  }
  

  createoption(){
    if(this.questionid != undefined){
      this.CreateOption.question=this.questionid
      this.OptionService.createOption(this.CreateOption).subscribe((response:any)=>{
      this.optionnumber=this.optionnumber+1
      this.changesoption.controls['nameoption'].setValue('')
      this.changesoption.controls['scoreoption'].setValue('')

      console.log(response)


      })
      

    }

    
  }
 


  finishquestion(){
    this.chargeoption=false
    this.createquestionavalible=true
    this.optionnumber=0
    this.nextsection=true
    

  }
  finishsection(){
   
    this.router.navigate([`create-test`,this.idtest,'create-section']);
  }

  
     
createquestion(){
  
this.CreateQuestion.questionname =this.changesquestion.controls['namequestion'].value
console.log(this.CreateQuestion)
this.QuestionService.createQuestion(this.CreateQuestion).subscribe((response:any)=>{
  this.chargequestion=this.chargequestion+1
  this.createquestionavalible=false
  this.chargeoption=true
  this.nextsection=false
  this.changesquestion.controls['namequestion'].setValue('')
  this.questionid=response.id
  
})


}




















 checkquestion(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const matchingControl = control.parent?.get('namequestion');
   
     
      if (matchingControl) {
      
        if (matchingControl.value.startsWith('¿') && matchingControl.value.endsWith('?') ) {
        
          return null;
        }
        else{
          return { matching: true };
         
        }
      }
     
      return null;
    };
  }





























}
