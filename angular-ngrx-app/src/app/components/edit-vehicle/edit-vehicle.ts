import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Vehicle } from '../../models/vehicle.model';
import { loadVehiclesFromJson } from '../../state/actions/vehicle.actions';
import { selectCreatedVehicles } from '../../state/selectors/vehicle.selector';
import { Observable } from 'rxjs';
import { faker } from '@faker-js/faker';
import { CommonModule } from '@angular/common';

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

  edit(count: number) {
    const start = performance.now();

    fetch(`/${count}-dataset.json`)
      .then((response) => response.json())
      .then((vehicles: Vehicle[]) => {
        const editedVehicles = vehicles.map((vehicle, index) => {
          if (index < count) {
            return {
              ...vehicle,
              model: faker.vehicle.model(),
              plate: faker.vehicle.vin(),
              capacity: faker.number.int({ min: 2, max: 7 }),
              lastMaintenance: faker.date.past().toLocaleDateString(),
            };
          }
          return vehicle;
        });

        this.store.dispatch(loadVehiclesFromJson({ vehicles: editedVehicles }));

        const end = performance.now();
        this.editTime = end - start;
      })
      .catch((error) => {
        console.error('Erro ao editar o dataset:', error);
      });
  }
}
