import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Subject } from 'rxjs'
import { Flight } from '../model/product'
import { Router } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class FlightdataService {

  flight:Flight[] =[]
  private flightsub=new Subject<Flight[]>();

  constructor(private http:HttpClient,private route:Router) { }

  add(value){
    console.log(value)
    this.http.post("http://localhost:3000/save",value).subscribe(data=>{
      console.log("fetched")
    })
  }

  getdetail(check){
    console.log((check))
    return this.http.post<{message:string,flights:Flight[]}>("http://localhost:3000/view",check)
  }

  booking(value){
    console.log(value)
    this.http.post("http://localhost:3000/booking",value).subscribe(data=>{
      console.log("fetched")
    })
  }

}
