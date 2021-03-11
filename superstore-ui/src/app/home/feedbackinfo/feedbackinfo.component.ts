import { Component, OnInit } from '@angular/core';
import {SharedService} from '../../shared.service';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-feedbackinfo',
  templateUrl: './feedbackinfo.component.html',
  styleUrls: ['./feedbackinfo.component.css']
})
export class FeedbackinfoComponent implements OnInit {
  allFeed:any;
  constructor(private shared:SharedService,
              private http:HttpClient,
              private router:Router
    ) {

      if(!this.isSignIn){

        this.router.navigate(['signup'])
      }else{
    
        // get the clients
        this.http.get('http://localhost:3000/api/feedback/')
        .subscribe((res)=>{
    
          if(res['status'] ==200){
    
            console.log(res);
            this.shared.allFeed=res['data'];
          }
    
    })
    
      }
  
    }
    isSignIn = this.shared.isSignIn;
     

  ngOnInit() {
  }

}

