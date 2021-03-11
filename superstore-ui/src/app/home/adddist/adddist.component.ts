import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {SharedService} from '../../shared.service';
import {Router} from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-adddist',
  templateUrl: './adddist.component.html',
  styleUrls: ['./adddist.component.css']
})
export class AdddistComponent implements OnInit {

  constructor(private http:HttpClient,
              private router:Router,
              private shared:SharedService
    ) {
      
     }

  ngOnInit() {
  }



  // passwordError:String="";

  // login(){
  //   // console.log(form.value['email']);

  //   let obj={
  //     name :"admin",
  //     email:"admin@gmail.com",
  //     password: "admin123"
  //   }
  


  //   this.http.post('http://localhost:3000/api/auth/login',obj)
  //   .subscribe((res)=>{

  //     if(res['status'] ==404){
  //       this.passwordError=res['message'];

  //     }

      

  //     if(res['status'] ==200){
  //       this.passwordError='';
  //       this.shared.islogin=true;
  //       this.router.navigate(['adddist'])
  //     }
    
  //   })


  
  

salerror = String;
sales( form : NgForm){

  let  client_id = form.value['client_id'];
  let cl_email= form.value['cl_email'];
  let region = form.value['region'];
  let month = form.value['month'];
  let sales_cost =form.value['sales_cost'];
  // let type = form.value['type'];


  // request object

  let obj={

    client_id:client_id,
    cl_email:cl_email,
    region:region,
    month : month,
    sales_cost:sales_cost
    // type :type
  }

  this.http.post('http://localhost:3000/api/client/addclient',obj)
  .subscribe((res)=>{

    if(res['status'] ==200){
      this.salerror =null;
      this.router.navigate(['salesinfo']);
    }else{

      this.salerror = res['data']['message'];
    }
  })

  }

info(){
  this.router.navigate(['salesinfo'])
}

}
 

