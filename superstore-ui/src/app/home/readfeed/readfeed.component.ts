import { Component, OnInit } from '@angular/core';
import {SharedService} from '../../shared.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-readfeed',
  templateUrl: './readfeed.component.html',
  styleUrls: ['./readfeed.component.css']
})
export class ReadfeedComponent implements OnInit {
  readFeedArr=[]
  constructor(private http:HttpClient,
              private shared :SharedService
    ) { }

  ngOnInit() {
    this.http.get('http://localhost:3000/api/feedback/')
    .subscribe((res)=>{

      if(res['status'] ==200){
    
        console.log(res);
        this.readFeedArr=this.shared.allFeed;
  }

})
  }

}
