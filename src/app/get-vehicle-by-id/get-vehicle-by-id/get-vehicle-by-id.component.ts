import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Vehicles } from 'src/app/models/vehicles';
import { OnlineVehicleService } from 'src/app/services/online-vehicle.service';

@Component({
  selector: 'app-get-vehicle-by-id',
  templateUrl: './get-vehicle-by-id.component.html',
  styleUrls: ['./get-vehicle-by-id.component.css']
})
export class GetVehicleByIdComponent implements OnInit {

  id: string = "";
  vehicle: Vehicles = new Vehicles;
 
  constructor(
    public service: OnlineVehicleService,
    private route: ActivatedRoute,
    private router: Router
  ) { }
 
  ngOnInit(): void {
    this.id = this.route.snapshot.params['VehicleId'];
    this.service.getVehicleById(this.id).subscribe((data: Vehicles) => {
      this.vehicle = data;
    });
  }

}
