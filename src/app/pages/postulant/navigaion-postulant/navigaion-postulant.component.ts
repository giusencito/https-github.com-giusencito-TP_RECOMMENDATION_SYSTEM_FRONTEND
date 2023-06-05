import { TokenService } from './../../../services/token/token.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-navigaion-postulant',
  templateUrl: './navigaion-postulant.component.html',
  styleUrls: ['./navigaion-postulant.component.css']
})
export class NavigaionPostulantComponent implements OnInit {

  constructor(private Router:Router,private TokenService:TokenService) { }

  ngOnInit() {
  }
  configuration(){
    this.Router.navigate(['/configure-postulant'])
  }
  exit(){
this.TokenService.logOut()
  }
  Home(){
    this.Router.navigate(['/home-postulant'])
  }


  
}
