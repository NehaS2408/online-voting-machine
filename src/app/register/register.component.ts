import { Component } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(
    private readonly router: Router
  ) {}

  title = 'student1';
  // num1=0;
  // num2=0;
  // result=0;
 
  bjp()
   {
    // this.result=this.num1+this.num2;
   }
     congress()
   {
    // this.result=this.num1-this.num2;
   }
  aap()
  {
     //this.result=this.num1*this.num2;
   }
    communist()
    {
     //this.result=this.num1/this.num2;
   }
 // username=0;
 // password=0;
 // result=0;
 // login()
 // {
 // if(this.username=="admin" && this.password=="admin")
 // {
 //   result="Login Successfull";
   
 // }
 // else{
 //   this.result="login unsuccessfull";
 // }
 // }

 register() {
    this.router.navigate(['/vote']);
 }
  }