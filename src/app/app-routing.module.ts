import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{LoginComponent} from './login/login.component';
import{UserComponent} from './user/user.component';
// import{TestComponent} from './test/test.component';
 import { CoursesComponent } from './courses/courses.component';
import{CompComponent} from "./comp/comp.component";
import{CalenderComponent} from "./calender/calender.component";
import{TimeTableComponent} from "./time-table/time-table.component";
import{AttendanceComponent} from "./attendance/attendance.component";
import{FeedbackComponent} from "./feedback/feedback.component";
import{AssignmentComponent} from "./assignment/assignment.component";
import{ResultComponent} from "./result/result.component";
import{PaymentComponent} from "./payment/payment.component";


const routes: Routes = [

  { path: '', component:LoginComponent },
  { path: 'user', component:UserComponent },
  { path: 'course',component:CoursesComponent},
  { path: 'comp',component:CompComponent},
  { path: 'calender',component:CalenderComponent},
  { path: 'time-table',component:TimeTableComponent},
  { path: 'attendance',component:AttendanceComponent},
  { path: 'feedback',component:FeedbackComponent},
  { path: 'student/assignment',component:AssignmentComponent},
  { path: 'result',component:ResultComponent},
  { path: 'payment',component:PaymentComponent}
  
  
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
