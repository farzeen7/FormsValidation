import { Injectable } from '@angular/core';
import { cls_LoginModel } from 'Model/cls_LoginModel';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MyLoginService {
  public api="https://localhost:44326/api/AdminLogin/adminlogin";
  mystatus:number=0;
  public getapi='https://localhost:44326/api/';
  constructor(private http:HttpClient) {

   }
  postlogin(logindata:cls_LoginModel):number{
    let endpoints="AdminLogin/adminLogin";
    let loginStatus:boolean=false;
    this.http.post(this.getapi+endpoints,logindata).subscribe(
      (i:any) => { console.log(i.status);this.mystatus=i.status;}
       
      );
     return this.mystatus; 
  }

}

