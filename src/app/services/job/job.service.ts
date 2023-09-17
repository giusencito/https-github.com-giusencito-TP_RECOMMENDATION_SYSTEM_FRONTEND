import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {catchError, retry} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class JobService {

  basePath = 'http://127.0.0.1:8000/linkedinJob/LinkedinJobsViewSets';
  basePath2='https://restcountries.com/v3.1/all'
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

  GetAllJobs(){
    return this.http.get<any>(`${this.basePath}/` ,this.httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError));
  }
  GetContries(){
    return this.http.get<any>(`${this.basePath2}/` ,this.httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError));
  }
  
  GetJobById(id:number){
    return this.http.get<any>(`${this.basePath}/${id}/` ,this.httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError));
  }

  CreateJobs(item: any){
    return this.http.post<any>(`${this.basePath}/` , JSON.stringify(item),this.httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError));
  }

  UpdateJobs(id:number, item: any){
    return this.http.put<any>(`${this.basePath}/${id}/` , JSON.stringify(item) ,this.httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError));
  }

  DeleteJob(id:number){
    return this.http.delete<any>(`${this.basePath}/${id}/` ,this.httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError));
  }

  GetLinkedinJobbyResultTestId(id:number){
    return this.http.get<any>(`${this.basePath}/${id}/getLinkedinJobbyResultTest/` ,this.httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError));
  }
  GetJustOnebyResultTest(id:number){
    return this.http.get<any>(`${this.basePath}/${id}/getLinkedinJobbyResultTestJustOne/` ,this.httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError));
  }
  GetLinkedinJobbyResultTestIdAndPostulant(resultTest:number,postualnt:number){
                                               
    return this.http.get<any>(`${this.basePath}/getLinkedinJobsByResultTestAndPostulant/${resultTest}/${postualnt}/` ,this.httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError));
  }
  getLinkedinJobsByPostulantsJustOne(postulnat:number){
    return this.http.get<any>(`${this.basePath}/getLinkedinJobsByPostulantsJustOne/${postulnat}/` ,this.httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError));

  }

}
