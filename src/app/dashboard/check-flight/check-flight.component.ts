import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'
import { FlightdataService } from '../../service/flightdata.service'


@Component({
  selector: 'app-check-flight',
  templateUrl: './check-flight.component.html',
  styleUrls: ['./check-flight.component.css']
})
export class CheckFlightComponent implements OnInit {
  public resultflights:any;
  constructor(private flight:FlightdataService) { }

  ngOnInit(): void {
  }

  check(data :NgForm){
    const checkdetail={
      from:data.value.from,
      to:data.value.to,
      date:data.value.date,
      trip:data.value.trip,
      count:data.value.passengers
    }
    this.flight.getdetail(checkdetail).subscribe((data)=>{
      this.resultflights=data.flights
      console.log(this.resultflights.flights)
    })
  }
  adddetail(data :NgForm){
    const add={
      fname:data.value.flightname,
      to:data.value.flightto,
      from:data.value.flightfrom,
      date:data.value.date
    }
    console.log(add)
    this.flight.add(add)
  }
  
  bootrip(value:NgForm,id,date){
    const booking={
      fid:id,
      count:value.value.count,
      date:date
    } 
    this.flight.booking(booking)
    // console.log(count)
  }

}
