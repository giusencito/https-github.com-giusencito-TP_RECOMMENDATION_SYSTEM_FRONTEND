import { NgModule } from "@angular/core";
import { SpinnerComponent } from "./spinner.component";
import { CommonModule } from "@angular/common";
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@NgModule({
declarations:[SpinnerComponent],
imports:[CommonModule,MatProgressSpinnerModule],
exports:[SpinnerComponent]


})
export class SpinnerModule{}