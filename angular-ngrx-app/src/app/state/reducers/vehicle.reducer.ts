import { createReducer, on } from '@ngrx/store';
import { createVehicle } from '../actions/vehicle.actions';
import { Vehicle } from '../../models/vehicle.model';

export interface VehicleState {
  vehicles: Vehicle[];
}

export const initialState: VehicleState = {
  vehicles: [],
};

export const vehicleReducer = createReducer(
  initialState,
  on(createVehicle, (state, { vehicle }) => ({
    ...state,
    vehicles: [...state.vehicles, vehicle],
  }))
);
