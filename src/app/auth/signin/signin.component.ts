import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'
import { AuthService } from '../../service/auth.service'
import { Signin } from '../../model/auth'
import { Subscription } from 'rxjs'
import { from } from 'rxjs';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private AuthService:AuthService) { }
  spinner:boolean=false
  err
  authsub:Subscription
  ngOnInit(): void {
    this.authsub=this.AuthService.authListener().subscribe(authstatus=>{
      this.spinner=false
    },error=>{
      this.err=error.err.message
    })
  }
  valid:boolean
  onSignin(userdata : NgForm){
      if(userdata.invalid){
        this.valid=true
        return
      }
      this.spinner=true
      const Signincredential:Signin ={
        email:userdata.value.email,
        password:userdata.value.password
      }
      this.AuthService.onsignin(Signincredential)
    }
  }
