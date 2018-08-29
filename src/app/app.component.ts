import { Component, OnInit } from '@angular/core';
import { Cars, Car } from './car.model';
import { Store } from '@ngrx/store';
import { AppState } from './redux/app.state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public cars: Car[] = [];
  public carsState: Observable<AppState>;

  public constructor(private store: Store<Cars>) {

  }

  ngOnInit() {
    this.carsState = this.store.select('carPage');
    // this.store.select('carPage').subscribe(({cars}) => this.cars = cars);
  }
}
