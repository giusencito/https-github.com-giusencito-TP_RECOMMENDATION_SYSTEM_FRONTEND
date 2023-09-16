import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-start-validation-test',
  templateUrl: './start-validation-test.component.html',
  styleUrls: ['./start-validation-test.component.css']
})
export class StartValidationTestComponent implements OnInit {

  constructor(private Router:Router,private ActivatedRoute:ActivatedRoute) { }
  user!:string
  ngOnInit() {
    this.user=this.ActivatedRoute.snapshot.paramMap.get('user')!;
  }

  continue(){
    
    this.Router.navigate(['validation-test'],{queryParams:{user:this.user}})
  }
}
