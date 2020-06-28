import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service'
import { Subscription } from 'rxjs'
 
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private auth:AuthService) { }
  authenticated=false
  authlistener:Subscription
  ngOnInit(): void {
  }
  signin(){
    this.authlistener=this.auth.authListener().subscribe((data)=>{
      this.authenticated=this.auth.getauth()  
    },err=>{
      alert(err)
      this.authenticated=true
    })
    this.authenticated=this.auth.getauth()
  }

  logout(){
    this.auth.logout()
  }
}
