import { Component, OnInit } from '@angular/core';
import { Cars, Car } from './car.model';
import { Store } from '@ngrx/store';
import { AppState } from './redux/app.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public cars: Car[] = [];

  public constructor(private store: Store<AppState>) {

  }

  ngOnInit() {
    
  }

 public add(car: Car) {
    this.cars.push(car);
  }

 public delete(car: Car) {
  this.cars = this.cars.filter((item) => item.id !== car.id);
 }
}
