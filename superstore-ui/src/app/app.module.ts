import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SigninComponent } from './home/signin/signin.component';
import { SignupComponent } from './home/signup/signup.component';
import { AddorderComponent } from './home/addorder/addorder.component';
import { AdddistComponent } from './home/adddist/adddist.component';
import { ReadorderComponent } from './home/readorder/readorder.component';
import { HomeComponent } from './home/home/home.component';
import {HttpClientModule} from '@angular/common/http';
import { ReadsalesreportComponent } from './home/readsalesreport/readsalesreport.component';
import { SalesinfoComponent } from './home/salesinfo/salesinfo.component';
import { PaymentComponent } from './home/payment/payment.component';
import { PayinfoComponent } from './home/payinfo/payinfo.component';
import { FeedbackComponent } from './home/feedback/feedback.component';
import { FeedbackinfoComponent } from './home/feedbackinfo/feedbackinfo.component';
import { ReadfeedComponent } from './home/readfeed/readfeed.component';
import { MemberdetailsComponent } from './home/memberdetails/memberdetails.component';
import { MemberComponent } from './home/member/member.component';
import { PaydetailsComponent } from './home/paydetails/paydetails.component';
// import { FarewellComponent } from './home/farewell/farewell.component';

// import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SigninComponent,
    SignupComponent,
    AddorderComponent,
    AdddistComponent,
    ReadorderComponent,
    HomeComponent,
    ReadsalesreportComponent,
    SalesinfoComponent,
    PaymentComponent,
    PayinfoComponent,
    FeedbackComponent,
    FeedbackinfoComponent,
    ReadfeedComponent,
    MemberdetailsComponent,
    MemberComponent,
    PaydetailsComponent
    // FarewellComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
