import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TokenService } from 'src/app/services/token/token.service';
@Component({
  selector: 'app-navigation-admin',
  templateUrl: './navigation-admin.component.html',
  styleUrls: ['./navigation-admin.component.css']
})
export class NavigationAdminComponent implements OnInit {

  constructor(private Router:Router,private TokenService:TokenService) { }

  ngOnInit() {
  }


  configuration(){
    this.Router.navigate(['/configure-admin'])
  }
 
  exit(){
this.TokenService.logOut()
  }
  Home(){
    this.Router.navigate(['/home-admin'])
  }

}
