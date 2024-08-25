import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import {catchError, retry} from "rxjs/operators";
import { urlDev } from '../HttpCommon';
@Injectable({
  providedIn: 'root'
})
export class TypetestService {

  basePath=urlDev+'typetest/TypeTestViewSet/'
  basePath2=urlDev+'typetest'
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
  getAll(){
    return this.http.get<any>(this.basePath, this.httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError));


  }









}
