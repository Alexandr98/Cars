import { Car } from '../car.model';
import * as Actions from './cars.action';

const initialState = {
  cars: [
    new Car('Ford', '12.02.18', 'Focus', false, 1),
    new Car('Audi', '08.07.18', 'A4', false, 2)
  ]
};

export function carsReducer(state = initialState, action: Actions.AllCarsData) {
  switch (action.type) {
    case Actions.ADD_CAR:
      return {
        ...state,
        cars: [...state.cars, action.payload]
      };
    case Actions.DELETE_CAR:
      return {
        ...state,
        cars: [...state.cars.filter((item) => item.id !== action.payload.id)]
      };
      case Actions.BUY_CAR:
      return {
        ...state,
        cars: [...state.cars]
      };
    default:
      return state;
  }
}
