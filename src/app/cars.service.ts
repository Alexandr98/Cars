import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Http, Response } from '@angular/http';
import { AppState } from './redux/app.state';
import { LoadCars } from './redux/cars.action';
import { Car } from './car.model';
import 'rxjs/add/operator/map';

@Injectable()
export class CarsService {
  constructor(private http: Http, private store: Store<AppState>) {}

  static BASE_URL = 'http//localhost:3000/';

  public loadCars(): void {
    this.http.get(CarsService.BASE_URL + 'cars')
     .map((response: Response) => response.json())
     .toPromise()
     .then((cars: Car[]) => {
       this.store.dispatch(new LoadCars(cars));
     });
  }

}
