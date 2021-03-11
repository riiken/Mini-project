import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {SharedService} from '../../shared.service';
import { NgForm } from '@angular/forms';
import {Router} from '@angular/router';


@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  constructor(private http:HttpClient,
              private router:Router,
              private shared:SharedService
    ) { }

  ngOnInit() {
  }

  pay(form : NgForm){

    //  request the payload
  
    let  card_no = form.value['card_no'];
    let name = form.value['name'];
    let cvv = form.value['cvv'];
    let email_id = form.value['email_id'];
 
    // let payment = form.value['payment'];
  
  
    // request object
  
    let obj={
  
      card_no:card_no,
      name:name,
      cvv:cvv,
      email_id:email_id
      // payment:payment
    }
  
    this.http.post('http://localhost:3000/api/payment/pay',obj)
    .subscribe((res)=>{
  
      if(res['status'] ==200){
       
        this.shared.isSignIn=true;
        this.router.navigate(['feedback']);
      // }else{
  
      //   this.orderError = res['data']['message'];
      // }
    
    }})
  
    }

    farewell(){
      this.router.navigate['feedback'];
    }
  

}
