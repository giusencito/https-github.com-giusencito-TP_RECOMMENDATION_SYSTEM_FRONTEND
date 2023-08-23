import { TokenService } from 'src/app/services/token/token.service';
import { AdminService } from './../../../services/admin/admin.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-admin',
  templateUrl: './home-admin.component.html',
  styleUrls: ['./home-admin.component.css']
})
export class HomeAdminComponent implements OnInit {
  name!:string
  last_name!:string
  constructor(private Router:Router,private AdminService:AdminService,private TokenService:TokenService) { }

  ngOnInit() {
    this.getadmin()
  }
  createTest(){

    this.Router.navigate(['create-test'])
  }
  editTest(){
    this.Router.navigate(['edit-test'])

  }
  createAdmin(){

    this.Router.navigate(['create-admin'])



  }
  getadmin(){
    this.AdminService.getAdmin(this.TokenService.getId()).subscribe((response:any)=>{
      this.name=response.name
      this.last_name=response.last_name
    })
  }
  postulants(){

    this.Router.navigate(['/see-postulants'])

  }
  
}
