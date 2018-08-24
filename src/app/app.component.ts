import { Component } from '@angular/core';
import { Cars, Car } from './car.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public cars: Car[] = [];

 public add(car: Car) {
    this.cars.push(car);
  }

 public delete(car: Car) {
  this.cars = this.cars.filter((item) => item.id !== car.id);
 }
}
