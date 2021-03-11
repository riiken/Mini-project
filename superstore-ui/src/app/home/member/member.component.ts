import { Component, OnInit } from '@angular/core';
import {SharedService} from '../../shared.service';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnInit {
  allUser : any;
  constructor(private shared : SharedService,
    private router : Router,
    private http : HttpClient) { 
      if(!this.isSignIn){

        this.router.navigate(['signup'])
      }else{
    
        // get the users
        this.http.get('http://localhost:3000/api/user/')
        .subscribe((res)=>{
    
          if(res['status'] ==200){
    
            console.log(res);
            this.shared.allUser=res['data'];
          }
    
    })
    
      }
  
    }
    isSignIn = this.shared.isSignIn;
  ngOnInit() {
  }

}
