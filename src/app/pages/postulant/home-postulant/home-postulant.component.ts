import { TokenService } from './../../../services/token/token.service';
import { PostulantService } from './../../../services/postulant/postulant.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-postulant',
  templateUrl: './home-postulant.component.html',
  styleUrls: ['./home-postulant.component.css']
})
export class HomePostulantComponent implements OnInit {
  name!:string;
  last_name!:string
  width!:number
   height !:string
   myVariable = 'red';
  constructor(private PostulantService:PostulantService,private TokenService:TokenService,private Router:Router) { 
    window.addEventListener('resize', () => {
    this.width=window.innerWidth;
    
    this.height=window.innerHeight.toString()+'px';
    console.log(this.width)
    });
  }

  ngOnInit() {
    this.getpostu()
  }
  getpostu(){
    this.PostulantService.getPostulant(this.TokenService.getId()).subscribe((response:any)=>{
      this.name=response.name
      this.last_name=response.last_name
    })
  }
  startTest(){
    this.Router.navigate(['/start-test'])
  }
  history(){
    this.Router.navigate(['/recommendation-history'])

  }

}
