import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  reg_no:string=""
  password:string=""
  clickButton:string=""
  clickButtonOne:string=""
  isDisabled:boolean = true

  constructor(private router: Router) {

   }


   
  ngOnInit(): void {
  }

get_regNo(event:any){
    this.reg_no = event.target.value;
    
    if(this.reg_no==''){
      this.isDisabled = true
    }else{
      this.isDisabled = false
    }
  
   }
   get_password(event:any){
    this.password = event.target.value;
    if(this.password==''){
      this.isDisabled = true
    }else{
      this.isDisabled = false
    }
   } 
   onSignin(){
    
      var len = this.reg_no.length;
      if(len < 5){
        this.clickButtonOne = 'Error! enter a valid username'
      }
      else{
        this.clickButton = 'Signed in successfully'   
        console.log(this.reg_no);
        console.log(this.password)
        this.router.navigateByUrl('/user'); 
      }
   }
 }




