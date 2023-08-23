import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-start-orientation-test',
  templateUrl: './start-orientation-test.component.html',
  styleUrls: ['./start-orientation-test.component.css']
})
export class StartOrientationTestComponent implements OnInit {

  constructor(private Router:Router) { }

  ngOnInit() {
  }
  continue(){
    
  this.Router.navigate(['orientation-test'])
  }
}
