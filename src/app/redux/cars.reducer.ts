import { Car } from '../car.model';
import { CAR_ACTION, AddCar } from './cars.action';

const initialState = {
  cars: [
    new Car('Ford', '12.02.18', 'Focus', false, 1),
    new Car('Audi', '08.07.18', 'A4', false, 2)
  ]
}

export function carsReducer(state = initialState, action: AddCar) {
  switch (action.type) {
    case CAR_ACTION.ADD_CAR:
      return {
        ...state,
        cars: [...state.cars, action.payload]
      }
    default:
      return state;
  }
}
