import { Router } from '@angular/router';
import { TestService } from './../../../../services/test/test.service';
import { TypetestService } from './../../../../services/typetest/typetest.service';
import { CreateTest } from './../../../../models/test/CreateTest';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from './Dialog/Dialog.component';
import { MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-create-test',
  templateUrl: './create-test.component.html',
  styleUrls: ['./create-test.component.css']
})
export class CreateTestComponent implements OnInit {
  public changetest!: FormGroup;
  typetests = ['comunicacion','python']
  CreateTest!:CreateTest
  dataSource !:MatTableDataSource<any>;

  constructor(private formBuilder:FormBuilder,public dialog: MatDialog,private TypetestService:TypetestService,private TestService:TestService,private Router:Router) {
    this.CreateTest = {} as CreateTest
    this.dataSource = new MatTableDataSource<any>();

   }

  ngOnInit() {
    this.changetest = this.formBuilder.group({
      nametest:['',[Validators.required,Validators.minLength(3)]],
      type:['',[Validators.required]],
      descriptiontest:['',[Validators.required]]


    })
    this.gettypes()
  }
  openTrue(id:number) {

    const dialogRef = this.dialog.open(DialogComponent, {
      width: '500px',
      data: {type:true,number:id}
    });
    dialogRef.afterClosed().subscribe(result => {
      this.Router.navigate([`create-test`,id,'create-section']);
    })
   
  }
  openFalse() {
  
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '500px',
      data: {type:false}
    });
   
  }
  gettypes(){
    this.TypetestService.getAll().subscribe((response:any)=>{
         console.log(response.rows)
         this.dataSource.data = response.rows
    })
  }
  submit(){
    console.log("test")
    console.log(this.CreateTest)
    this.TestService.createTest(this.CreateTest).subscribe((response:any)=>{
              console.log(response)
              this.openTrue(response.id)
    },err=>{
      this.openFalse()

    })
    
  }

}
