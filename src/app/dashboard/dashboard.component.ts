import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'
import { FlightdataService } from '../service/flightdata.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  
}
