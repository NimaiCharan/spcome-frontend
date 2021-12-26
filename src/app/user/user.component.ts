import { Component, OnInit } from '@angular/core';

import { AppService } from '../app.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  fees: any=[];
  
  constructor(private appService: AppService) { }
  data :any;
  attendance:any=[];
  attendanceFinal:any;
  ngOnInit(): void {
    this.setFormData();
    this.setAttendance();
    this.setFees();
  }
  setFormData() {
    console.log('setFormData');
    this.appService.get_notice().subscribe((response:any) => { 
      console.log("Response Notice",response);
      this.data = response;
      //console.log("data",this.data[0].notice_heading);
    });
    
    };
    setAttendance(){
      console.log("setAttendance");
      
      this.appService.get_attendance().subscribe((response:any) => {
        console.log("Response Attendance",response);
        this.attendance = response;
        
        
      }
      );
      for(var i=0;i<(this.attendance).length;i++){
        this.attendanceFinal.push(this.attendance[i]);
        
      }
      console.log("attendance",this.attendanceFinal);
    }
    setFees(){
      console.log("setFees");
      
      this.appService.get_fees().subscribe((response:any) => {
        console.log("Response Fees",response);
        this.fees = response[0];
        console.log("fees",this.fees);
        
        
      }
      );
     
    }
  }




