import { Component, OnInit } from '@angular/core';
import {SharedService} from '../../shared.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-readorder',
  templateUrl: './readorder.component.html',
  styleUrls: ['./readorder.component.css']
})
export class ReadorderComponent implements OnInit {
  
  readOrderInput
  readOrderArr=[]
  constructor(private _shared :SharedService,
              private _http : HttpClient
    
    ) { }

  ngOnInit() {
 
//  
 this._http.get('http://localhost:3000/api/order/')
 .subscribe((res)=>{

  if(res['status'] ==200){

    console.log(res);
    this.readOrderArr = this._shared.allOrder;
    
  // console.log(this.readOrderArr);
   
  }
})
 
  
// ngOnChanges(){
//   this.readOrderArr = this.readOrderInput;
//   console.log("readpost component");
//   console.log(this.readOrderArr);
// }
  
// }



}
}
