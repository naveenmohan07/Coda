import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../service/auth.service'
import { Signup } from '../../model/auth'


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor( private AuthService:AuthService ) { }
  ngOnInit(): void { }
  valid:boolean
  onSignup(userdata : NgForm){
    if(userdata.invalid){
      this.valid=true
      return
    }
    const signupcredential:Signup={
      username:userdata.value.username,
      email:userdata.value.email,
      password:userdata.value.password
    }
    this.AuthService.onsignup(signupcredential)
  }
}
