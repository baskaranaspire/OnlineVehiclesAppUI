import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateVehicleComponent } from './create-vehicles/create-vehicle/create-vehicle.component';
import { GetAllVehiclesComponent } from './get-all-vehicles/get-all-vehicles/get-all-vehicles.component';
import { GetVehicleByIdComponent } from './get-vehicle-by-id/get-vehicle-by-id/get-vehicle-by-id.component';
import { UpdateVehicleComponent } from './update-vehicle/update-vehicle/update-vehicle.component';

export const routes: Routes = [
  { path: '', redirectTo: 'Vehicle/list', pathMatch: 'full' }, 
  { path: 'Vehicle', redirectTo: 'Vehicle/list', pathMatch: 'full' },
  { path: 'Vehicle/list', component: GetAllVehiclesComponent },
  { path: 'Vehicle/:VehicleId/details', component: GetVehicleByIdComponent },
  { path: 'Vehicle/create', component: CreateVehicleComponent },
  { path: 'Vehicle/:VehicleId/edit', component: UpdateVehicleComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
