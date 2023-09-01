import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  constructor(private Router:Router,private viewportScroller: ViewportScroller) { }

  ngOnInit() {
  }
  goLogin(){
    this.Router.navigate(['login'])
  }
  scrollToFragment(fragment: string): void {
    this.viewportScroller.scrollToAnchor(fragment);
  }
}
