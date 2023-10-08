import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {catchError, retry} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class CourserecomendationService {

  basePath = 'http://107.20.6.100:8000/courserecomendation/CourseRecomendationViewset';

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

  courseRecommendation(id:number){
    return this.http.post<any>(`${this.basePath}/${id}/CourseRecomendation/` ,this.httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError));
  }
  
  QuestionRecommendation(id:number){
    return this.http.post<any>(`${this.basePath}/${id}/QuestionRecomendation/` ,this.httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError));
  }

  GetAllCourses(){
    return this.http.get<any>(`${this.basePath}/GetAllCourses/` ,this.httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError));
  }


}
