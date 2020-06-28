import { Injectable } from '@angular/core';
import { Signin,Signup } from '../model/auth'
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Subject } from 'rxjs'
import { from } from 'rxjs';
 
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authenticated=false
  token
  private authstatus=new Subject<boolean>();

  constructor(private http:HttpClient,private route:Router) { }

  onsignup(value){
    this.http.post<Signup>("http://localhost:3000/signup",value).subscribe((data)=>{
      console.log("Signup Successfull");
      this.route.navigate([""])
    },error=>{
      this.authstatus.next(false)
    })
  }

  onsignin(value){
    this.http.post<{token:String}>("http://localhost:3000/signin",value).subscribe((data)=>{
      const token =  data.token
      this.token=token
      if(!token){
           this.authenticated=false
           this.authstatus.next(false)
      }
    this.route.navigate([""])
    },error=>{
      this.authstatus.next(false);
      this.authenticated=false
    })
  }

  authListener(){
    return this.authstatus.asObservable()
  }

  getauth(){
    return this.authenticated
  }

  gettoken(){
    return this.token
  }

  logout(){
    this.token=null
    this.route.navigate([""])
    this.authenticated=false
    this.authstatus.next(false)
  }

}