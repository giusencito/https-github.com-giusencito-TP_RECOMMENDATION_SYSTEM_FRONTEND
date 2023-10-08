import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {catchError, retry} from "rxjs/operators";
import { Feedback } from 'src/app/models/history/Feedback';
@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  basePath = 'http://107.20.6.100:8000/feedback/FeedbackViewSets';

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
  GetAllFeedbacks(){
    return this.http.get<any>(`${this.basePath}/` ,this.httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError));
  }
  
  GetIFeedbacksById(id:number){
    return this.http.get<any>(`${this.basePath}/${id}/` ,this.httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError));
  }
  GetIFeedbacksByResultTestFROMJOBS(id:number){
    return this.http.get<any>(`${this.basePath}/get_feedback_by_result_test/${id}/` ,this.httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError));
  }

  CreateIFeedbacks(item:Feedback){
    return this.http.post<any>(`${this.basePath}/` ,JSON.stringify(item),this.httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError));
  }

  UpdateFeedbacksn(id:number,item:any){
    return this.http.put<any>(`${this.basePath}/${id}/` ,JSON.stringify(item),this.httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError));
  }

  DeleteIFeedbacks(id:number){
    return this.http.delete<any>(`${this.basePath}/${id}/` ,this.httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError));
  }

}
