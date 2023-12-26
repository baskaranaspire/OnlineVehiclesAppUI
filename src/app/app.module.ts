import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateVehicleComponent } from './create-vehicles/create-vehicle/create-vehicle.component';
import { GetAllVehiclesComponent } from './get-all-vehicles/get-all-vehicles/get-all-vehicles.component';
import { GetVehicleByIdComponent } from './get-vehicle-by-id/get-vehicle-by-id/get-vehicle-by-id.component';
import { OnlineVehicleService } from './services/online-vehicle.service';
import { UpdateVehicleComponent } from './update-vehicle/update-vehicle/update-vehicle.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateVehicleComponent,
    GetAllVehiclesComponent,
    GetVehicleByIdComponent,
    UpdateVehicleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,AppRoutingModule,ReactiveFormsModule
    
  ],
  providers: [OnlineVehicleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
