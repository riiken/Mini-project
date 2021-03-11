import { Component, OnInit } from '@angular/core';
import {SharedService} from '../../shared.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-memberdetails',
  templateUrl: './memberdetails.component.html',
  styleUrls: ['./memberdetails.component.css']
})
export class MemberdetailsComponent implements OnInit {
  memberArr=[]
  constructor(private http:HttpClient,
    private shared :SharedService) 
    { }

  ngOnInit() {
    this.http.get('http://localhost:3000/api/user/')
    .subscribe((res)=>{

      if(res['status'] ==200){
    
        console.log(res);
        this. memberArr=this.shared.allUser;
  }

})

}
}
