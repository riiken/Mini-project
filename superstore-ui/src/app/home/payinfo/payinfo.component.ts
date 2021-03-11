import { Component, Input, OnInit } from '@angular/core';
import {SharedService} from '../../shared.service';

import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-payinfo',
  templateUrl: './payinfo.component.html',
  styleUrls: ['./payinfo.component.css']
})
export class PayinfoComponent implements OnInit {
  payArr=[]
  email:string;
isSignIn=this.shared.isSignIn;
  constructor(private shared : SharedService,
   
    private http : HttpClient) {

      this.shared.getAuthUser()
      .subscribe((user)=>{
        if(user){
          this.email=user.auth;
          if(this.email){
            
            this.shared.signInEmail=this.email

          }
        }
        else{
          this.isSignIn=false;
        }
      })


     }


    
  ngOnInit() {
    this.http.get('http://localhost:3000/api/payment/')
    .subscribe((res)=>{

      if(res['status'] ==200){
    
        console.log(res);
        this.payArr=this.shared.allPay;
  }

})

}
  }


