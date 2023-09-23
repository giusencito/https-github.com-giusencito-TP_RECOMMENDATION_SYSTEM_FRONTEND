import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { PostulantService } from './../../../services/postulant/postulant.service';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
export interface Section {
  name: string;
  updated: Date;
}
@Component({
  selector: 'app-see-postulants',
  templateUrl: './see-postulants.component.html',
  styleUrls: ['./see-postulants.component.css']
})

export class SeePostulantsComponent implements OnInit {

  constructor(private PostulantService:PostulantService,private formBuilder:FormBuilder,private router:Router) { 
    this.dataSource = new MatTableDataSource<any>();
    this.dataSourceOriginal = new MatTableDataSource<any>();

  }
  username!:string;
  searchform!:FormGroup
  start=false
  dataSource !:MatTableDataSource<any>;
  dataSourceOriginal !:MatTableDataSource<any>;

  ngOnInit() {
    this.getpostulant()
    this.searchform = this.formBuilder.group({
      search:['',[Validators.required,Validators.minLength(1)]],
      


    })
    
  }
  getpostulant(){
       this.PostulantService.getpostulants().subscribe((response:any)=>{
        this.dataSourceOriginal.data= response
        this.dataSource.data=this.dataSourceOriginal.data
             this.start=true
             
       },err=>{
        this.start=true
       })

  }
  finbyusername(username: string): any[] {
   
    return this.dataSourceOriginal.data.filter(elemento => elemento.username.startsWith(username));
  }
  setusers(username: string){

    this.dataSource.data= this.finbyusername(username)

  }
 gopostulant(id:number){

  this.router.navigate(['/see-postulants',id])
 }





  folders: Section[] = [
    {
      name: 'Photos',
      updated: new Date('1/1/16'),
    },
    {
      name: 'Recipes',
      updated: new Date('1/17/16'),
    },
    {
      name: 'Work',
      updated: new Date('1/28/16'),
    },
  ];
  notes: Section[] = [
    {
      name: 'Vacation Itinerary',
      updated: new Date('2/20/16'),
    },
    {
      name: 'Kitchen Remodel',
      updated: new Date('1/18/16'),
    },
  ];

}
