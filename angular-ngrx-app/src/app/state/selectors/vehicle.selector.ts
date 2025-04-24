import { createFeatureSelector, createSelector } from '@ngrx/store';
import { VehicleState } from '../reducers/vehicle.reducer';

export const selectVehicleState = createFeatureSelector<VehicleState>('vehicleState');

export const selectCreatedVehicles = createSelector(
  selectVehicleState,
  (state: VehicleState) => state.vehicles
);
