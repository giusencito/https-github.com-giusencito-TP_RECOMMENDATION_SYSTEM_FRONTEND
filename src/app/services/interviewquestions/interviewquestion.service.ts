import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {catchError, retry} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class InterviewquestionService {

  basePath = 'http://127.0.0.1:8000/interviewquestions/InterviewQuestionViewSets';

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

  GetAllInterviewQuestions(){
    return this.http.get<any>(`${this.basePath}/` ,this.httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError));
  }
  
  GetInterviewQuestionById(id:number){
    return this.http.get<any>(`${this.basePath}/${id}/` ,this.httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError));
  }

  CreateInterviewQuestions(item:any){
    return this.http.post<any>(`${this.basePath}/` ,JSON.stringify(item),this.httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError));
  }

  UpdateInterviewQuestion(id:number,item:any){
    return this.http.put<any>(`${this.basePath}/${id}/` ,JSON.stringify(item),this.httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError));
  }

  DeleteInterviewQuestion(id:number){
    return this.http.delete<any>(`${this.basePath}/${id}/` ,this.httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError));
  }

  GetAnswerbyQuestionName(questionname:string){
    return this.http.get<any>(`${this.basePath}/getAnswerbyQuestionName/${questionname}/` ,this.httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError));
  }
  
  GetQuestionsbyJobId(id:number){
    return this.http.get<any>(`${this.basePath}/${id}/getQuestionsbyJobId/` ,this.httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError));
  }



}
