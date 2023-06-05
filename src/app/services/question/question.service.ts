import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {catchError, retry} from "rxjs/operators";
import { CreateQuestion } from 'src/app/models/test/CreateQuestion';
@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  basePath = 'http://127.0.0.1:8000/question/QuestionViewSet/';
 
 
   
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
  createQuestion(item:CreateQuestion){
   return this.http.post<any>(this.basePath, JSON.stringify(item), this.httpOptions)
   .pipe(
     retry(2),
     catchError(this.handleError));
  }

}