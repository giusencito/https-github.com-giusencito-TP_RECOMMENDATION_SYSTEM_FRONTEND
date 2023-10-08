import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

import {catchError, retry} from "rxjs/operators"
import { SignIn } from 'src/app/models/authentication/SignIn';
import { Lastname } from 'src/app/models/authentication/Lastname';
import { Name } from 'src/app/models/authentication/Name';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  basePath='http://107.20.6.100:8000/adminsite/AdminViewSet/'
  basePath2='http://107.20.6.100:8000/adminsite'
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  }
  constructor(private http: HttpClient) { }

  registerAdmin(item:SignIn){
    return this.http.post<any>(`${this.basePath}`, JSON.stringify(item), this.httpOptions)
    .pipe(
      retry(2),
      );
  }
  changename(id:string,item:Name){
  
    return this.http.put<any>(`${this.basePath2}/ChangeNameViewSet/${id}/`, JSON.stringify(item),this.httpOptions)
    .pipe(
      retry(2),
      );
   
  
  
  }
  getAdmin(id:string){
    return this.http.get<any>(`${this.basePath}${id}`, this.httpOptions)
    .pipe(
      retry(2),
      );
  }
  
  changelast_name(id:string,item:Lastname){
  
    return this.http.put<any>(`${this.basePath2}/ChangeLastNameViewSet/${id}/`,JSON.stringify(item) ,this.httpOptions)
    .pipe(
      retry(2),
      );
   
  
  
  }
































}
