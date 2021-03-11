import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {SharedService} from '../../shared.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-addorder',
  templateUrl: './addorder.component.html',
  styleUrls: ['./addorder.component.css']
})
export class AddorderComponent implements OnInit {

  constructor(private _http :HttpClient,
              
              private _router :Router,
              private _shared:SharedService
    ) {

      // this._shared.isSignIn=false;
      
     if(!this.isSignIn){
      this._router.navigate(['home']);
}else{
  
}
  }
    isSignIn = this._shared.isSignIn;
     

    
  ngOnInit() {
  }

 
 
  orderError= String;
  submitOrder(form : NgForm){

  //  request the payload

  let  order_id = form.value['orderid'];
  let date = form.value['date'];
  let type = form.value['type'];
  let type_2  = form.value['type_2'];
  let type_3 = form.value['type_3'];
  // let amount = form.value['amount'];
  // let payment = form.value['payment'];


  // request object

  let obj={

    order_id:order_id,
    date:date,
    type:type,
    type_2:type_2,
    type_3:type_3
    // amount:amount
    // payment:payment
  }

  this._http.post('http://localhost:3000/api/order/addorder',obj)
  .subscribe((res)=>{

    if(res['status'] ==200){
      this.orderError =null;
      this._shared.isSignIn=true;
      this._router.navigate(['payment']);
      
    }else{

      this.orderError = res['data']['message'];
    }
  })

  }

// 

details(){
  this._router.navigate(['home']);
}
price:number=0;
quantity:number=1;
gettype(event){
  const type= event.target.value
 
  
  switch(type){
    case "Cover" :
     this.price=50 * this.quantity
     this.total=this.price+this.amount+this.amt;
      break;

      case "Tempered" :
      this.price=70 * this.quantity
      this.total=this.price+this.amount+this.amt;
      break;

      case "Screen" :
      this.price=90 * this.quantity
      this.total=this.price+this.amount+this.amt;
      break;

      case "Earphones" :
      this.price=500 * this.quantity
      this.total=this.price+this.amount+this.amt;
      break;

      case "Charger" :
      this.price=80 * this.quantity
      this.total=this.price+this.amount+this.amt;
      break;

      case "Buds" :
      this.price=14 * this.quantity
      this.total=this.price+this.amount+this.amt;
      break;

      // case "Mazaa" :
      // this.price=15 * this.quantity
      // this.total=this.price+this.amount+this.amt;
      // break;

      // case "Sprite" :
      // this.price=12 * this.quantity
      // this.total=this.price+this.amount+this.amt;
      // break;

      // case "Pepsi" :
      // this.price=18 * this.quantity
      // this.total=this.price+this.amount+this.amt;
      // break;

      default: this.price=0;
      break;

  }
   
}
amount:number=0;
quan:number=1;
getmore(event){

  const phase= event.target.value
 
  
  switch(phase){
    case "Cover" :
     this.amount=50 * this.quan
     this.total=this.price+this.amount+this.amt;
      break;

      case "Tempered" :
        this.amount=70 * this.quan
        this.total=this.price+this.amount+this.amt;
      break;

      case "Screen" :
        this.amount=90 * this.quan
        this.total=this.price+this.amount+this.amt;
      break;

      case "Earphones" :
        this.amount=500 * this.quan
        this.total=this.price+this.amount+this.amt;
      break;

      case "Charger" :
        this.amount=80 * this.quan
        this.total=this.price+this.amount+this.amt;
      break;

      case "Buds" :
        this.amount=14 * this.quan
        this.total=this.price+this.amount+this.amt;
      break;

      // case "Mazaa" :
      //   this.amount=15 * this.quan
      //   this.total=this.price+this.amount+this.amt;
      // break;

      // case "Sprite" :
      //   this.amount=12 * this.quan
      //   this.total=this.price+this.amount+this.amt;
      // break;

      // case "Pepsi" :
      //   this.amount=18 * this.quan
      //   this.total=this.price+this.amount+this.amt;
      // break;

      default: this.amount=0;
      break;

}

} 
amt:number=0;
qu:number=1;
total:number=0;
getonemore(event){

  const val= event.target.value
 
  
  switch(val){
    case "Cover" :
     this.amt=50 * this.qu
     this.total=this.price+this.amount+this.amt;
      break;

      case "Tempered" :
        this.amt=70 * this.qu
        this.total=this.price+this.amount+this.amt;
      break;

      case "Screen" :
        this.amt=90 * this.qu
        this.total=this.price+this.amount+this.amt;
      break;

      case "Earphones" :
        this.amt=500 * this.qu
        this.total=this.price+this.amount+this.amt;
      break;

      case "Charger" :
        this.amt=80 * this.qu
        this.total=this.price+this.amount+this.amt;
      break;

      case "Buds" :
        this.amt=14 * this.qu
        this.total=this.price+this.amount+this.amt;
      break;

      // case "Mazaa" :
      //   this.amt=15 * this.qu
      //   this.total=this.price+this.amount+this.amt;
      // break;

      // case "Sprite" :
      //   this.amt=12 * this.qu
      //   this.total=this.price+this.amount+this.amt;
      // break;

      // case "Pepsi" :
      //   this.amt=18 * this.qu
      //   this.total=this.price+this.amount+this.amt;
      // break;

      default: this.amt=0;
      break;

}
}


}
