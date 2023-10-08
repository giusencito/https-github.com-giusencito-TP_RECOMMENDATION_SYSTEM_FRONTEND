import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {catchError, retry} from "rxjs/operators";
import { CreateQuestion } from 'src/app/models/test/CreateQuestion';
import { Question } from 'src/app/models/test/Question';
@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  basePath = 'http://107.20.6.100:8000/question/QuestionViewSet/';

 
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
  getquestionbySection(id:number){
    return this.http.get<any>(`${this.basePath}${id}/getquestionbySection/` ,this.httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError));
  }
  getQuestionbyId(id:number){
    return this.http.get<any>(`${this.basePath}${id}/` ,this.httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError));


  }
  update(id:number,item:CreateQuestion){
    return this.http.put<any>(`${this.basePath}${id}/` ,JSON.stringify(item),this.httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError));
  }

}
