import { DeleteDialogComponent } from './deleteDialog/deleteDialog.component';


import { ActivatedRoute, Router } from '@angular/router';
import { PostulantService } from './../../../services/postulant/postulant.service';
import { Component, OnInit,Inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-see-one-postulant',
  templateUrl: './see-one-postulant.component.html',
  styleUrls: ['./see-one-postulant.component.css']
})
export class SeeOnePostulantComponent implements OnInit {
 name!:string
 last_name!:string
 email!:string
  constructor(public dialog: MatDialog,private PostulantService:PostulantService,private route:ActivatedRoute,private router:Router ) { }

  ngOnInit() {
    this.getPodtulant()
  }
  getPodtulant(){
    let id =parseInt(this.route.snapshot.paramMap.get('postulant')!);

    this.PostulantService.getPostulant(id.toString()).subscribe((response:any)=>{
                this.name = response.name
                this.last_name = response.last_name
                this.email= response.email

    })



  }
  deletedpostulant(){
    let id =parseInt(this.route.snapshot.paramMap.get('postulant')!);
    this.PostulantService.deletedpostulants(id).subscribe((response)=>{
      this.openTrue(id)
    },err=>{
      this.openFalse()
    })
  }
  openTrue(id:number) {

    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      width: '500px',
      data: {type:true,number:id}
    });
    dialogRef.afterClosed().subscribe(result => {
      this.router.navigate([`see-postulants`],);
    })
   
  }
  openFalse() {
  
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      width: '500px',
      data: {type:false}
    });
   
  }
  history(){
    let id =parseInt(this.route.snapshot.paramMap.get('postulant')!);

    this.router.navigate([`postulant-recommendation-history`],{queryParams:{postulant:id,email:this.email}});

  }

}
