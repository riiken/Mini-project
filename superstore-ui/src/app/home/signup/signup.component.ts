import { Component, OnInit } from '@angular/core';
// import { from } from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {SharedService} from '../../shared.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  // add http service to constructor
  constructor( private http :HttpClient ,
    
               private shared :SharedService,
               private router :Router
    ) { 

      this.shared.isSignIn=false;
      this.shared.clearAuthUser();
    }



  ngOnInit() {
  }
  name:string;
  email:string;
  passw:string;
  type:string;
 signUp(){

 

  if(this.name && this.email && this.passw && this.type){
    // call the api

    let reqobj={

      name : this.name,
      email : this.email,
      password : this.passw,
      type : this.type
    }

    this.http.post('http://localhost:3000/api/auth/signup', reqobj)
    .subscribe((res)=>{
      console.log(res);
      this.shared.isSignIn=true;
      this.router.navigate(['home']);
      this.shared.setAuthUser(this.email);
      
    })

  }else{
    // alert message
    alert('enter all fields');
  }
 }


}
