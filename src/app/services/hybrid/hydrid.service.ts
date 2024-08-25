import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import {urlDev} from '../HttpCommon'
@Injectable({
  providedIn: 'root'
})
export class HydridService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  }
  basePath = urlDev+'hybridrecomendation/HybridRecomendationViewset';

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
 getAllJobs(){
  return this.http.get<any>(`${this.basePath}/getAllJobs/` ,this.httpOptions)
  .pipe(
    retry(2),
    catchError(this.handleError));
 }
 hydridRecommendation(resultTest:number){
  return this.http.get<any>(`${this.basePath}/${resultTest}/hydridRecommendation/` ,this.httpOptions)
  .pipe(
    retry(2),
    catchError(this.handleError));
 }

}
