import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {catchError, retry} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class RecommendationService {

  basePath = 'http://107.20.6.100:8000/recomendation/RecomendationViewset';
              
 
 
   
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
  hydridRecommendation(){
    return this.http.post<any>(`${this.basePath}/hydridRecommendation/` ,this.httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError));
  }

  getAllJobs(){
    return this.http.get<any>(`${this.basePath}/getAllJobs/` ,this.httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError));
  }

  getSectionResults(id:number){
    return this.http.get<any>(`${this.basePath}/${id}/getSectionResults/` ,this.httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError));
  }

}
