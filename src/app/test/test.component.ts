import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {
  
  title = 'My Angular Project!';
  formdata:any;
  emailid:any;
  constructor() { }
  ngOnInit() {
  }
  onClickSubmit(data:any) {
     alert("Entered Email id : " + data.emailid);
  }
}
