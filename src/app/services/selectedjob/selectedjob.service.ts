import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {catchError, retry} from "rxjs/operators";
import { ResetPassword } from 'src/app/models/authentication/ResetPassword';

@Injectable({
  providedIn: 'root'
})
export class SelectedjobService {

  basePath = 'http://107.20.6.100:8000/selectedJob/SelectedJobViewSets';

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

  GetAllSelectedJobs(){
    return this.http.get<any>(`${this.basePath}/` ,this.httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError));
  }
  
  GetSelectedJobById(id:number){
    return this.http.get<any>(`${this.basePath}/${id}/` ,this.httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError));
  }

  CreateSelectedJobs(item:any){
    return this.http.post<any>(`${this.basePath}/` ,JSON.stringify(item),this.httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError));
  }
  SendTestEmail(item:ResetPassword){
    return this.http.post<any>(`${this.basePath}/SendTestEmail/send_email/` ,JSON.stringify(item),this.httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError));
  }

  UpdateSelectedJobs(id:number,item:any){
    return this.http.put<any>(`${this.basePath}/${id}/` ,JSON.stringify(item),this.httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError));
  }

  DeleteSelectedJob(id:number){
    return this.http.delete<any>(`${this.basePath}/${id}/` ,this.httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError));
  }

  GetSelectedJobsByLinkedinJobsId(id:number){
    return this.http.get<any>(`${this.basePath}/${id}/getSelectedJobbyLinkedinJobId/` ,this.httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError));
  }
  GetSelectedJobsByResultTest(id:number){
    return this.http.get<any>(`${this.basePath}/getSelectedJobsbyResultTest/${id}/` ,this.httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError));
  }

}
