import { MatDialog } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { CreateSection } from 'src/app/models/test/CreateSection';
import { ActivatedRoute, Router } from '@angular/router';
import { SectionService } from 'src/app/services/section/section.service';
import { DialogEditSectionCreateComponent } from './dialog-edit-section-create/dialog-edit-section-create.component';

@Component({
  selector: 'app-edit-section-create',
  templateUrl: './edit-section-create.component.html',
  styleUrls: ['./edit-section-create.component.css']
})
export class EditSectionCreateComponent implements OnInit {

  public changesection!: FormGroup;
  CreateSection!:CreateSection
  constructor(private formBuilder:FormBuilder,private route:ActivatedRoute,private SectionService:SectionService,private Router:Router,public dialog: MatDialog) { 
    this.CreateSection = {} as CreateSection;
  }

  ngOnInit() {
    this.CreateSection.test=parseInt(this.route.snapshot.paramMap.get('test')!);

    this.changesection = this.formBuilder.group({
      namesection:['',[Validators.required,Validators.minLength(3)]],
      totalscore:['',[Validators.required,Validators.min(0)]],


    })
  }
  openTrue(id:number) {

    const dialogRef = this.dialog.open(DialogEditSectionCreateComponent, {
      width: '500px',
      data: {type:true,number:id}
    });
    dialogRef.afterClosed().subscribe(result => {
      
      this.Router.navigate([ 'edit-test',this.CreateSection.test,`edit-section`]);
    })
   
  }
  openFalse() {
  
    const dialogRef = this.dialog.open(DialogEditSectionCreateComponent, {
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
