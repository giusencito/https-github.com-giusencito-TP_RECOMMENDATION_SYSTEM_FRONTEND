import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-start-validation-test',
  templateUrl: './start-validation-test.component.html',
  styleUrls: ['./start-validation-test.component.css']
})
export class StartValidationTestComponent implements OnInit {

  constructor(private Router:Router) { }

  ngOnInit() {
  }

  continue(){
    
    this.Router.navigate(['validation-test'])
  }
}
