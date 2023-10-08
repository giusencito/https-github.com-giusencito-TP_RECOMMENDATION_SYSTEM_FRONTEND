import { CreateSection } from './../../models/test/CreateSection';
import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {catchError, retry} from "rxjs/operators";
import { CreateTest } from 'src/app/models/test/CreateTest';
import { CreateResultTest } from 'src/app/models/result/CreateResultTest';
@Injectable({
  providedIn: 'root'
})
export class ResultTestService {

  basePath = 'http://107.20.6.100:8000/resultTest/ResultTestViewSets/';
             

 
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  }
  
  constructor(private http: HttpClient) { }
  
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.log(`An error occurred: ${error.error.message} `);
    }
    else {
      console.error(
        `Backend returned code ${error.status}, body was: ${error.error}`
      );
    }
  
    return throwError('Something happened with request, please try again later');
  } 

  CreateResultTest(item:CreateResultTest){
    return this.http.post<any>(this.basePath, JSON.stringify(item), this.httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError));
   }
   GetByPostulant(id:number){
    return this.http.get<any>(`${this.basePath}${id}/getResultTestbypostulant/` ,this.httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError));
   }

















}
