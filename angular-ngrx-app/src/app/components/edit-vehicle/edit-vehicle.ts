import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { faker } from '@faker-js/faker';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Vehicle } from '../../models/vehicle.model';
import { editVehicles } from '../../state/actions/vehicle.actions';
import { selectCreatedVehicles } from '../../state/selectors/vehicle.selector';

@Component({
  selector: 'app-edit-vehicle',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './edit-vehicle.html',
})
export class EditVehicleComponent {
  vehicles$: Observable<Vehicle[]>;
  editTime: number = 0;

  constructor(private store: Store) {
    this.vehicles$ = this.store.select(selectCreatedVehicles);
  }

  editAllVehicles(count: number) {
    const start = performance.now();

    const updatedVehicles: Vehicle[] = Array.from(
      { length: count },
      (_, i) => ({
        id: i + 1,
        model: faker.vehicle.model(),
        plate: faker.vehicle.vin(),
        capacity: faker.number.int({ min: 2, max: 7 }),
        lastMaintenance: faker.date.past().toLocaleDateString(),
      })
    );

    this.store.dispatch(editVehicles({ vehicles: updatedVehicles }));

    const end = performance.now();
    this.editTime = end - start;
  }
}
