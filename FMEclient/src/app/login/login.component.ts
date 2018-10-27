import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


name:string='';
pass:string='';
exist:boolean;

  ngOnInit() {
  }

  constructor(private httpclient:HttpClient){}
  onNameKeyup(event:any){
    this.name=event.target.value;

  }

  onPasswordKeyup(event:any){
    this.pass=event.target.value;
  }

  title = 'testapp';
  getprofile(){
    console.log(this.name);
    this.httpclient.get('http://localhost:8081/accounts').subscribe(
      (data:any[])=>
      {

        for(var item in data) {
          if (data[item].userName===this.name && data[item].password===this.pass){
            this.exist=true;
          }
        }

        console.log(this.exist);



      })
  }




}
