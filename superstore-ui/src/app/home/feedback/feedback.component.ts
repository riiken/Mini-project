import { Component, OnInit, SkipSelf } from '@angular/core';
import { NgForm } from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {SharedService} from '../../shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  constructor(private http:HttpClient,
              private router:Router,
              private shared:SharedService
    ) {
      this.shared.isSignIn=false;
      
  //     if(!this.isSignIn){
  //       this.router.navigate(['addorder']);
        
        
  // }else{
    
  // }
  //   }
  //     isSignIn = this.shared.isSignIn;
       
  
      
    } 

  ngOnInit() {
  }
  feedbackError=String;
  feed(form : NgForm){
    // request payload
    let email = form.value['email'];
    let service_provided = form.value['service_provided'];
    let product_quality = form.value['product_quality'];
    let management = form.value['management'];


    // request obj
    let obj={
      email:email,
      service_provided:service_provided,
      product_quality:product_quality,
      management:management
    }
    this.http.post('http://localhost:3000/api/feedback/review',obj)
    .subscribe((res)=>{

      if(res['status'] ==200){
        this.shared.isSignIn=true;
        this.feedbackError=null;
        this.router.navigate(['home']);
      }else{
        this.feedbackError=res['data']['message'];
      }
    })
  
    }
    
  
// skip(){
//   this.router.navigate(['addorder'])
// }

  }



