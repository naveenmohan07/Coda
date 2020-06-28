import { Component, OnInit } from '@angular/core';
import { FlightdataService } from '../../service/flightdata.service'
import { Subscription } from 'rxjs'
import { Flight } from '../../model/product'
@Component({
  selector: 'app-list-flight',
  templateUrl: './list-flight.component.html',
  styleUrls: ['./list-flight.component.css']
})
export class ListFlightComponent implements OnInit {

  constructor(private flight:FlightdataService) { }
  flights=[]
  fligh
  ngOnInit(): void {
    // this.fligh=this.flight.getdetail()
    // this.flights.push(this.fligh)
    // console.log(this.flights)
    
  }
}
