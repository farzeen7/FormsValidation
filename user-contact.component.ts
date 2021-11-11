import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { ContactDetails } from 'src/Model/ContactDetails';

@Component({
  selector: 'app-user-contact',
  templateUrl: './user-contact.component.html',
  styleUrls: ['./user-contact.component.css']
})

export class UserContactComponent implements OnInit {
  
    contactForm = new FormGroup({
    firstname: new FormControl('',[Validators.required]),
    lastname: new FormControl(),
    mobileno:new FormControl(),
    email: new FormControl(),
    gender: new FormControl(),
    isMarried: new FormControl(),
    country: new FormControl()
  });
  countries = ['USA', 'Germany', 'Italy', 'France', 'India', 'UAE', 'China']
  constructor() { }

  ngOnInit(): void {
  }
  get f()
  {
    return this.contactForm.controls;
  }
SubmitData()
{
console.log(this.contactForm.value);
 let contactDet:ContactDetails=new ContactDetails();
 contactDet.firstname=this.contactForm.value["firstname"];
 contactDet.lastname=this.contactForm.value["lastname"];
 contactDet.mobileno=this.contactForm.value["mobileno"];
 

 //console.log("Going to model class: " + contactDet.firstname);

}
}