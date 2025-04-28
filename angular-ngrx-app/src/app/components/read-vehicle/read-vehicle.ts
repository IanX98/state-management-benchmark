import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Vehicle } from '../../models/vehicle.model';
import { loadVehiclesFromJson } from '../../state/actions/vehicle.actions';
import { selectCreatedVehicles } from '../../state/selectors/vehicle.selector';

@Component({
  selector: 'app-read-vehicle',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './read-vehicle.html',
})
export class ReadVehicleComponent {
  vehicles$: Observable<Vehicle[]>;
  loadTime: number = 0;

  constructor(private store: Store) {
    this.vehicles$ = this.store.select(selectCreatedVehicles);
  }

  load(count: number) {
    const start = performance.now();

    fetch(`/${count}-dataset.json`)
      .then((response) => response.json())
      .then((vehicles: Vehicle[]) => {
        this.store.dispatch(loadVehiclesFromJson({ vehicles }));

        const end = performance.now();
        this.loadTime = end - start;
      })
      .catch((error) => {
        console.error('Erro ao carregar o dataset:', error);
      });
  }
}
