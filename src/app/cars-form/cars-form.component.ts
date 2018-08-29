import { Component, OnInit, Output } from '@angular/core';
import { Car } from '../car.model';
import * as moment from 'moment';
import { AppState } from '../redux/app.state';
import { Store } from '@ngrx/store';
import { AddCar } from '../redux/cars.action';

@Component({
  selector: 'app-cars-form',
  templateUrl: './cars-form.component.html',
  styleUrls: ['./cars-form.component.css']
})
export class CarsFormComponent implements OnInit {
  private id = 2;
  public carName = '';
  public carModel = '';


  constructor(private store: Store<AppState>) { }

  ngOnInit() {
  }
  public add() {
    if (this.carModel === '' || this.carName === '') {
      return;
        }
    this.id = ++this.id;
    const car = new Car (
      this.carName,
      moment().format('DD/MM/YY'),
      this.carModel,
      false,
      this.id
    );

    this.store.dispatch(new AddCar(car));
    this.carName = '';
    this.carModel = '';
  }
  public load() {

  }
}
