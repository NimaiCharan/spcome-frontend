import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor(private http: HttpClient) {}

  rootUrl = 'https://6790-2401-4900-3e93-45ae-b5b8-8285-9a59-3218.ngrok.io/';
  url = 'http://localhost:3001/api/v1';
  //url = "http://20.120.118.194:3001/api/v1";
  
  options = {
    headers: new HttpHeaders().set(
      'Content-Type',
      'application/x-www-form-urlencoded'
    ),
  };
  get(url: string) {
    return this.http.get(this.rootUrl + url);
  }
  get_notice() {
    var notice_data = this.http.get(this.url + '/notice/get_notice');
    //console.log(notice_data.subscribe());
    return notice_data;
  }
  get_attendance(userId = 'test_id') {
    var notice_data = this.http.get(
      this.url+'/attendance/get_attendance?student_id='+userId,this.options
    );
    //console.log(notice_data.subscribe());
    return notice_data;
  }
  get_fees(userId = 'test_id') {
    var feesData = this.http.get(
      this.url+"/fees/get_fees?student_id="+userId,this.options);
      return feesData;
    }
  getData() {
    console.log('getData');
  }
  // getUser(userId, password){
  //   var userData = this.http.get(this.rootUrl+'get_user/reg_no='+userId+'?')
  // }
}
