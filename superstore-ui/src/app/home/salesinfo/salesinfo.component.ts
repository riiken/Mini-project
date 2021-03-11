import { Component, OnInit } from '@angular/core';
import {SharedService} from '../../shared.service';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-salesinfo',
  templateUrl: './salesinfo.component.html',
  styleUrls: ['./salesinfo.component.css']
})
export class SalesinfoComponent implements OnInit {
  allSale:any;
  constructor(private shared : SharedService,
             private router : Router,
             private http : HttpClient
             
  ){ 
    if(!this.isSignIn){

      this.router.navigate(['signup'])
    }else{
  
      // get the clients
      this.http.get('http://localhost:3000/api/client/')
      .subscribe((res)=>{
  
        if(res['status'] ==200){
  
          console.log(res);
          this.shared.allSale=res['data'];
        }
  
  })
  
    }

  }
  isSignIn = this.shared.isSignIn;
  ngOnInit() {
  }

}
