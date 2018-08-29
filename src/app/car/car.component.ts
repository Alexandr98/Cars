import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Car } from '../car.model';
import { AppState } from '../redux/app.state';
import { Store } from '@ngrx/store';
import { DeleteCar, BuyCar } from '../redux/cars.action';

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

  constructor(private store: Store<AppState>) { }

  public delete() {
    this.store.dispatch(new DeleteCar(this.car));
    // this.deleteCar.emit(this.car);
  }
  public buy() {
    this.car.isSold = true;
    this.store.dispatch(new BuyCar(this.car));
  }
}
