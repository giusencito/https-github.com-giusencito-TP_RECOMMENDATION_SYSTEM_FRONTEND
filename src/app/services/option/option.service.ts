import { Injectable } from '@angular/core';
import { CreateOption } from 'src/app/models/test/CreateOption';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {catchError, retry} from "rxjs/operators";
@Injectable({
  providedIn: 'root'
})
export class OptionService {

  basePath = 'http://107.20.6.100:8000/option/OptionViewSet/';
 
 
   
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
  createOption(item:CreateOption){
   return this.http.post<any>(this.basePath, JSON.stringify(item), this.httpOptions)
   .pipe(
     retry(2),
     catchError(this.handleError));
  }
  getoptionbyquestion(id:number){
    return this.http.get<any>(`${this.basePath}${id}/getoptionbysection/` ,this.httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError));
  }
  getOptionbyId(id:number){
    return this.http.get<any>(`${this.basePath}${id}/` ,this.httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError));


  }
  update(id:number,item:CreateOption){
    return this.http.put<any>(`${this.basePath}${id}/`, JSON.stringify(item) ,this.httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError));
  }
  QuestionsWithOptions(section:number){
    return this.http.get<any>(`${this.basePath}get_questions_with_options/${section}/` ,this.httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError));
  }
}
