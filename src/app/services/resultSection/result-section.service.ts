import { CreateResultSection } from 'src/app/models/result/CreateResultSection';
import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {catchError, retry} from "rxjs/operators";
import { CreateSection } from 'src/app/models/test/CreateSection';
@Injectable({
  providedIn: 'root'
})
export class ResultSectionService {

  basePath = 'http://107.20.6.100:8000/resultSection/ResultSectionViewSets/';
  basePath2 = 'http://107.20.6.100:8000/resultSection/getResultSectionbyTestAndResultTest/'

 
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
  CreateSection(item:CreateResultSection){
    return this.http.post<any>(this.basePath, JSON.stringify(item), this.httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError));
   }
   getByTestandResulTest(test:number,resultTest:number){
    return this.http.get<any>(`${this.basePath2}${test}/${resultTest}/` ,this.httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError));

   }

}
