import { Store } from '@ngrx/store';
import { faker } from '@faker-js/faker';
import { Component } from '@angular/core';
import { Vehicle } from '../../models/vehicle.model';
import { createVehicle } from '../../state/actions/vehicle.actions';
import { selectCreatedVehicles } from '../../state/selectors/vehicle.selector';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-create-vehicle',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './create-vehicle.html',
})
export class CreateVehicleComponent {
  creationTime: number = 0;
  createdVehicles$: Observable<Vehicle[]>;

  constructor(private store: Store) {
    this.createdVehicles$ = this.store.select(selectCreatedVehicles);
  }

  create(count: number) {
    const start = performance.now();

    for (let i = 0; i < count; i++) {
      const vehicle: Vehicle = {
        id: faker.number.int(),
        model: faker.vehicle.model(),
        plate: faker.vehicle.vin(),
        capacity: faker.number.int({ min: 2, max: 7 }),
        lastMaintenance: faker.date.past().toLocaleDateString(),
      };
      this.store.dispatch(createVehicle({ vehicle }));
    }

    const end = performance.now();
    this.creationTime = end - start;
  }
}
