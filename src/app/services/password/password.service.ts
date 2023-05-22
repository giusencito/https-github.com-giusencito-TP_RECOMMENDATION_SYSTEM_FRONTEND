import { ChangePassword } from './../../models/authentication/ChangePassword';
import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

import {catchError, retry} from "rxjs/operators"
import { ResetPassword } from 'src/app/models/authentication/ResetPassword';
import { ConfigurePassword } from 'src/app/models/authentication/ConfigurePassword';
@Injectable({
  providedIn: 'root'
})
export class PasswordService {

  basePath = 'http://127.0.0.1:8000/user';




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
        `Backend returned code ${error.status}, body was: ${error.error.error}`
      );
    }
  
    return throwError('Something happened with request, please try again later');
  }
  emailSend(item:ResetPassword){
    return this.http.post<any>(`${this.basePath}/EmailSend/`, item, this.httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError)
     );
  }
  setPassword(item:ChangePassword){
    return this.http.post<any>(`${this.basePath}/SetPassword/`, item, this.httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError)
     );
  }
  changePassword(id:string,item:ConfigurePassword){
    return this.http.post<any>(`${this.basePath}/UserViewSet/${id}/set_password/`, item, this.httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError)
     );

  }



}
