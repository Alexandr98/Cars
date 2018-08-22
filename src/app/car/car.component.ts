import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Car } from '../car.model';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent {
  @Input()
  public car: Car;
  @Output()
  public deleteCar = new EventEmitter<Car>();

  constructor() { }

  public delete() {
    this.deleteCar.emit(this.car);
  }
  public buy() {
    this.car.isSold = true;
  }
}
