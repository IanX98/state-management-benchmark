import { createAction, props } from '@ngrx/store'; import { Vehicle } from '../../models/vehicle.model';

export const createVehicle = createAction( '[Vehicle] Create', props<{ vehicle: Vehicle }>() );