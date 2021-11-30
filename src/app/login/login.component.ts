import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  message:string=""
  message1:string=""
  clickButton:string=""
  clickButtonOne:string=""
  isDisabled:boolean = true

  constructor(private router: Router) {

   }


   
  ngOnInit(): void {
  }

onInput(event:any){
    this.message = event.target.value
    if(this.message=='' || this.message1==''){
      this.isDisabled = true
    }else{
      this.isDisabled = false
    }
  
   }
   onInput1(event:any){
    this.message1 = event.target.value
    if(this.message1==''|| this.message==''){
      this.isDisabled = true
    }else{
      this.isDisabled = false
    }
   }
   onSignin(){
    
      var len = this.message.length;
      if(len < 3){
        this.clickButtonOne = 'Error! enter a valid username'
      }
      else{
        this.clickButton = 'Signed in successfully'   
        console.log(this.message);
        this.router.navigateByUrl('/user'); 
      }
   }
 }




