import { Component, OnInit } from '@angular/core';
import { Vehicles } from 'src/app/models/vehicles';
import { OnlineVehicleService } from 'src/app/services/online-vehicle.service';

@Component({
  selector: 'app-get-all-vehicles',
  templateUrl: './get-all-vehicles.component.html',
  styleUrls: ['./get-all-vehicles.component.css']
})
export class GetAllVehiclesComponent implements OnInit {

  vehicles: Vehicles[] = [];
  constructor(public service: OnlineVehicleService) { }
 
  ngOnInit(): void {
    this.service.getAllVehicles().subscribe((data: Vehicles[]) => {
      this.vehicles = data;
    });
  }
 
  deleteVehicle(id: any) {
    this.service.deleteVehicleById(id).subscribe(res => {
      this.vehicles = this.vehicles.filter(item => item.vehicleId !== id);
    });
  }
}
