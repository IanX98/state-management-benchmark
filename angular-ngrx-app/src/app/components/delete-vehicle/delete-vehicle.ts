import { Store } from '@ngrx/store';
import { Component } from '@angular/core';
import { deleteVehicles } from '../../state/actions/vehicle.actions';
import { CommonModule } from '@angular/common';
import { selectCreatedVehicles } from '../../state/selectors/vehicle.selector';
import { Observable } from 'rxjs';
import { Vehicle } from '../../models/vehicle.model';

@Component({
  selector: 'app-delete-vehicle',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './delete-vehicle.html',
})
export class DeleteVehicleComponent {
  deleteTime: number | null = null;
  remainingVehicles: number | null = null;

  vehicles$: Observable<Vehicle[]>;

  constructor(private store: Store) {
    this.vehicles$ = this.store.select(selectCreatedVehicles);
    this.vehicles$.subscribe((vehicles) => {
      this.remainingVehicles = vehicles.length;
    });
  }

  delete(count: number) {
    const start = performance.now();
    this.store.dispatch(deleteVehicles({ count }));
    const end = performance.now();
    this.deleteTime = end - start;
  }
}
