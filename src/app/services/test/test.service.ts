import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {catchError, retry} from "rxjs/operators";
import { CreateTest } from 'src/app/models/test/CreateTest';
@Injectable({
  providedIn: 'root'
})
export class TestService {

  basePath = 'http://127.0.0.1:8000/tests/TestViewSet/';
 
 
   
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
   createTest(item:CreateTest){
    return this.http.post<any>(this.basePath, JSON.stringify(item), this.httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError));
   }
   getTestbyTypeTest(id:number){
    return this.http.get<any>(`${this.basePath}${id}/getTestbyTypeTest/` ,this.httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError));
   }
   getAllTest(){
    return this.http.get<any>(`${this.basePath}` ,this.httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError));
   }
   getTestbyId(id:number){
    return this.http.get<any>(`${this.basePath}${id}` ,this.httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError));
   }
   getAllTheTest(test:number){

    return this.http.get<any>(`${this.basePath}${test}/get_test_with_sections_and_questions/` ,this.httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError));

   }
   excludeTests(pk1:number,pk2:number){

    return this.http.get<any>(`${this.basePath}excludeTestbyTypeTest/${pk1}/${pk2}` ,this.httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError));


   }

}
