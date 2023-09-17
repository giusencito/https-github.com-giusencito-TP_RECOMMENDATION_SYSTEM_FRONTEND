import { SpinnerService } from './../../../services/spinner/spinner.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent  implements OnInit{
 isLoading =this.SpinnerService.isLoading
  constructor(private SpinnerService:SpinnerService) { }

  ngOnInit(): void {
    console.log(this.SpinnerService.isLoading)
  }

}
