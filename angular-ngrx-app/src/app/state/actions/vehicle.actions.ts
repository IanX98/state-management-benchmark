import { createAction, props } from '@ngrx/store';
import { Vehicle } from '../../models/vehicle.model';

export const createVehicle = createAction(
  '[Vehicle] Create',
  props<{ vehicle: Vehicle }>()
);

export const loadVehiclesFromJson = createAction(
  '[Vehicle] Load From File',
  props<{ vehicles: Vehicle[] }>()
);

export const editVehicles = createAction(
  '[Vehicle] Edit Vehicles',
  props<{ vehicles: Vehicle[] }>()
);
