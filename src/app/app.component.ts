import { Component } from '@angular/core';
import { Cars, Car } from './car.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public cars: Car[] = [
    new Car('Ford', '12.02.18', 'Focus', false, 1),
    new Car('Audi', '08.07.18', 'A4', false, 2)
  ];

 public add(car: Car) {
    this.cars.push(car);
  }

 public delete(car: Car) {
  this.cars = this.cars.filter((item) => item.id !== car.id);
 }
}
