import { Injectable } from '@angular/core';
import { Subject,BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {
isLoading=new Subject<boolean>();
show(){
  this.isLoading.next(true)
}
hide(){
  this.isLoading.next(false)

}
constructor() { }

}
