import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CreateVehicleComponent } from './components/create-vehicle/create-vehicle';
import { ReadVehicleComponent } from './components/read-vehicle/read-vehicle';
import { EditVehicleComponent } from './components/edit-vehicle/edit-vehicle';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    CreateVehicleComponent,
    ReadVehicleComponent,
    EditVehicleComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-ngrx-app';
}
