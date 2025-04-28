import { createReducer, on } from '@ngrx/store';
import {
  editVehicles,
  createVehicle,
  deleteVehicles,
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
  })),
  on(deleteVehicles, (state, { count }) => {
    const updatedVehicles = [...state.vehicles].slice(count);

    return {
      ...state,
      vehicles: updatedVehicles,
    };
  })
);
