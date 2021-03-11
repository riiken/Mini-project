import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdddistComponent } from './home/adddist/adddist.component';
import { AddorderComponent } from './home/addorder/addorder.component';
import { HomeComponent } from './home/home/home.component';
import { SigninComponent } from './home/signin/signin.component';
import { SignupComponent } from './home/signup/signup.component';
import {SalesinfoComponent} from './home/salesinfo/salesinfo.component';
import {PaymentComponent} from './home/payment/payment.component';
import {FeedbackComponent  } from "./home/feedback/feedback.component";
import { FeedbackinfoComponent } from "./home/feedbackinfo/feedbackinfo.component";
import { MemberComponent } from "./home/member/member.component";
// import {  PayinfoComponent} from "./home/payinfo/payinfo.component";
// import { FarewellComponent } from "./home/farewell/farewell.component";
import {PaydetailsComponent  } from "./home/paydetails/paydetails.component";


const routes: Routes = [

  {path:'', redirectTo: 'home' ,pathMatch:'full'},
  {path:'home', component:HomeComponent},
  {path:'signin',component:SigninComponent},
  {path:'signup', component:SignupComponent},
  {path:'addorder', component:AddorderComponent},
  {path:'adddist', component:AdddistComponent},
  {path:'salesinfo', component:SalesinfoComponent},
  {path :'payment', component:PaymentComponent},
  {path:'feedback', component:FeedbackComponent},
  {path:'feedinfo', component:FeedbackinfoComponent},
  {path:'member', component:MemberComponent},
  {path:'paydetails', component:PaydetailsComponent}
  // {path:'payinfo', component:PayinfoComponent}
  // {path: 'farewell', component:FarewellComponent}

 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
