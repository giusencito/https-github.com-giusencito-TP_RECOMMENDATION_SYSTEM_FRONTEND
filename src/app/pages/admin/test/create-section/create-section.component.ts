import { SectionService } from './../../../../services/section/section.service';
import { CreateSection } from './../../../../models/test/CreateSection';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DialogSectionComponent } from './dialog-section/dialog-section.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-create-section',
  templateUrl: './create-section.component.html',
  styleUrls: ['./create-section.component.css']
})
export class CreateSectionComponent implements OnInit {
  public changesection!: FormGroup;
  CreateSection!:CreateSection
  constructor(private formBuilder:FormBuilder,private route:ActivatedRoute,private SectionService:SectionService,private Router:Router,public dialog: MatDialog) { 
    this.CreateSection = {} as CreateSection;
  }

  ngOnInit() {
    this.CreateSection.test=parseInt(this.route.snapshot.paramMap.get('id')!);

    this.changesection = this.formBuilder.group({
      namesection:['',[Validators.required,Validators.minLength(3)]],
      totalscore:['',[Validators.required,Validators.min(0)]],


    })
  }
  openTrue(id:number) {

    const dialogRef = this.dialog.open(DialogSectionComponent, {
      width: '500px',
      data: {type:true,number:id}
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log("entro")
      
      this.Router.navigate([ 'create-test',this.CreateSection.test,`create-section`,id,'create-question']);
    })
   
  }
  openFalse() {
  
    const dialogRef = this.dialog.open(DialogSectionComponent, {
      width: '500px',
      data: {type:false}
    });
   
  }
  submit(){
    console.log(this.CreateSection)
    this.SectionService.createSection(this.CreateSection).subscribe((response:any)=>{

      this.openTrue(response.id)
         





    },err=>{

        this.openFalse()

    })
    




  }

}
