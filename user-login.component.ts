import { Component, OnInit } from '@angular/core';
import { User } from 'src/Model/UserModel';
import { FormControl, FormGroup,Validators,FormBuilder, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
//private userformdata:any={};

emailid=new FormControl('',[Validators.required,Validators.minLength(5)]);
password=new FormControl('',Validators.required)
  
  loginform:FormGroup=this.bldr.group({emailid:this.emailid,password:this.password});

  private showMessage:boolean=false;

  constructor(private bldr:FormBuilder) { }
  ngOnInit(): void {


  }


  onsubmitClick()
{
  var p=new User();
   
  //this.userformdata=this.loginform.value;
  // p.SetLoginId=this.userformdata.emailid;
  // p.SetLoginPwd=this.userformdata.password;

 p.SetLoginId=this.loginform.value.emailid;
  p.SetLoginPwd=this.loginform.value.password;
  //alert(this.loginform.value.password);
if (p.GetLoginId=="abc@gmail.com" && p.GetLoginPwd=="abc@123") {
 this.showMessage=true;
 // alert("Welcome");
}
else  
{
//alert("Check it");

}

}




}