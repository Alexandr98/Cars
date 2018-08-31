import { Car } from '../car.model';
import * as Actions from './cars.action';

const initialState = {
  cars: []
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
