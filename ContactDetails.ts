export class ContactDetails
{
firstname:string="";
lastname:string="";
email:string="";
mobileno:number=0;
gender:string="";
country:string="";
ismarried:string="";
}

export class ContactRequest {
    personalData!: PersonalData
    requestType: any = ''
    text: string = ''
  }
  
  export class PersonalData {
    email: string = ''
    mobile: string = ''
    country: string = ''
  }