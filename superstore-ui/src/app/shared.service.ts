import { Injectable } from '@angular/core';

import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  isSignIn: boolean=false;
  
  allOrder :any;
  allSale :any;
  allFeed :any;
  allUser : any;
  allPay :any;
  signInEmail:string;

  private subject = new Subject<any>();

  setAuthUser(email: string){
    this.subject.next({auth: email});
  }

  getAuthUser(){
    return this.subject.asObservable();
  }

  clearAuthUser(){
    this.subject.next();
  }
  
  constructor() { }
}
