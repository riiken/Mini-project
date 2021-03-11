import { Component, OnInit } from '@angular/core';
import {SharedService} from '../../shared.service';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  allOrder :any;
  constructor(private shared : SharedService,
              private router : Router,
              private http : HttpClient
    
    ) {

      if(!this.isSignIn){

        this.router.navigate(['signup'])
      }else{

        // get the orders
        this.http.get('http://localhost:3000/api/order/')
        .subscribe((res)=>{

          if(res['status'] ==200){

            
            this.shared.allOrder=res['data'];
          }

        })

      }
     }
  isSignIn = this.shared.isSignIn;

  ngOnInit() {

   
  }

  members(){
    this.router.navigate(['member']);
  }
  pay(){
    this.router.navigate(['paydetails'])
  }
  

}
