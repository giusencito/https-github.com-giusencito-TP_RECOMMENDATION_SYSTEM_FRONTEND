import { TestService } from './../../../../services/test/test.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-start-test',
  templateUrl: './start-test.component.html',
  styleUrls: ['./start-test.component.css']
})
export class StartTestComponent implements OnInit {

  constructor(private Router:Router) { }

  ngOnInit() {
  }
  continue(){
    this.Router.navigate(['/emotional-test'])

  }
  
}
