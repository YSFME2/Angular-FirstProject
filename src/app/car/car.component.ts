import { carService } from './car.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent {
  cars;
  constructor(service:carService) 
  { 
    this.cars = service.getCars();
  }

}
