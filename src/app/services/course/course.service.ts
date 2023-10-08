import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {catchError, retry} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  basePath = 'http://107.20.6.100:8000/course/CourseViewSets';

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

  GetAllCourses(){
    return this.http.get<any>(`${this.basePath}/` ,this.httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError));
  }
  
  GetCourseById(id:number){
    return this.http.get<any>(`${this.basePath}/${id}/` ,this.httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError));
  }

  CreateCourses(item:any){
    return this.http.post<any>(`${this.basePath}/` ,JSON.stringify(item),this.httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError));
  }

  UpdateCourses(id:number,item:any){
    return this.http.put<any>(`${this.basePath}/${id}/` ,JSON.stringify(item),this.httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError));
  }

  DeleteCourse(id:number){
    return this.http.delete<any>(`${this.basePath}/${id}/` ,this.httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError));
  }

  GetCoursesByLinkedinJobsId(id:number){
    return this.http.get<any>(`${this.basePath}/${id}/getCoursesbyLinkedinJobId/` ,this.httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError));
  }

}
