import { createReducer, on } from '@ngrx/store';
import {
  editVehicles,
  createVehicle,
  loadVehiclesFromJson,
} from '../actions/vehicle.actions';
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
  })),
  on(loadVehiclesFromJson, (state, { vehicles }) => ({
    ...state,
    vehicles: [...vehicles],
  })),
  on(editVehicles, (state, { vehicles }) => ({
    ...state,
    vehicles: vehicles,
  }))
);
