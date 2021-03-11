import { Component, Input, OnInit } from '@angular/core';
import {SharedService} from '../../shared.service';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-paydetails',
  templateUrl: './paydetails.component.html',
  styleUrls: ['./paydetails.component.css']
})
export class PaydetailsComponent implements OnInit {
  allPay : any;
  constructor(private shared : SharedService,
    private router : Router,
    private http : HttpClient ) { 
      if(!this.isSignIn){

        this.router.navigate(['signup'])
      }else{
    
        // get the users
        this.http.get('http://localhost:3000/api/payment/')
        .subscribe((res)=>{
    
          if(res['status'] ==200){
    
            console.log(res);
            this.shared.allPay=res['data'];
          }
    
    })
    
      }
  
    }
    isSignIn = this.shared.isSignIn;
    
@Input()
email=this.shared.signInEmail
  ngOnInit() {
  }


}
