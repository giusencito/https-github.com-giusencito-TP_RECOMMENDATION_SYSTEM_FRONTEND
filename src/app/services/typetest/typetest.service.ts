import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import {catchError, retry} from "rxjs/operators";
@Injectable({
  providedIn: 'root'
})
export class TypetestService {

  basePath='http://jobbrainprofile-env.eba-3vphmfgm.us-east-1.elasticbeanstalk.com/typetest/TypeTestViewSet/'
  basePath2='http://jobbrainprofile-env.eba-3vphmfgm.us-east-1.elasticbeanstalk.com/typetest'
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
