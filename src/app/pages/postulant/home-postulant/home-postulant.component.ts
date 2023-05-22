import { TokenService } from './../../../services/token/token.service';
import { PostulantService } from './../../../services/postulant/postulant.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-postulant',
  templateUrl: './home-postulant.component.html',
  styleUrls: ['./home-postulant.component.css']
})
export class HomePostulantComponent implements OnInit {
  name!:string;
  last_name!:string
  constructor(private PostulantService:PostulantService,private TokenService:TokenService) { }

  ngOnInit() {
    this.getpostu()
  }
  getpostu(){
    this.PostulantService.getPostulant(this.TokenService.getId()).subscribe((response:any)=>{
      this.name=response.name
      this.last_name=response.last_name
    })
  }

}
