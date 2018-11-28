import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { Car } from './car';
import { CarService } from './car.service';

@Component({
  selector: 'app-tablefilter',
  templateUrl: './tablefilter.component.html',
  styleUrls: ['./tablefilter.component.css']
})
export class TablefilterComponent implements OnInit {

    cars: Car[];
    constructor(private carService: CarService) { }

    ngOnInit() {
        this.carService.getCarsSmall().then(cars => this.cars = cars);
    }
}

