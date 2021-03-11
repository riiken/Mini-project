import { Component, Input, OnInit } from '@angular/core';
import {SharedService} from '../../shared.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-readsalesreport',
  templateUrl: './readsalesreport.component.html',
  styleUrls: ['./readsalesreport.component.css']
})
export class ReadsalesreportComponent implements OnInit {
 
  readSalesArr=[]
  constructor(private shared:SharedService,
              private http :HttpClient
    ) { }

  ngOnInit() {

    this.http.get('http://localhost:3000/api/client/')
    .subscribe((res)=>{

      if(res['status'] ==200){
    
        console.log(res);
        this.readSalesArr = this.shared.allSale;
  }

})

  }
}