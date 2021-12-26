import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { SidebarModule } from 'ng-sidebar';
//import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { TestComponent } from './test/test.component';
import { CoursesComponent } from './courses/courses.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { CompComponent } from './comp/comp.component';
import { TimeTableComponent } from './time-table/time-table.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import { CalenderComponent } from './calender/calender.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { FooterComponent } from './footer/footer.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { NavComponent } from './nav/nav.component';
import { AssignmentComponent } from './assignment/assignment.component';
import { PaymentComponent } from './payment/payment.component';
import { ResultComponent } from './result/result.component';
//import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';










@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    LoginComponent,
    TestComponent,
    CoursesComponent,
    SideNavComponent,
    CompComponent,
    TimeTableComponent,
    CalenderComponent,
    AttendanceComponent,
    FooterComponent,
    FeedbackComponent,
    NavComponent,
    AssignmentComponent,
    PaymentComponent,
    ResultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    SidebarModule,
    BrowserAnimationsModule,
    MatIconModule,
    HttpClientModule
    //FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
