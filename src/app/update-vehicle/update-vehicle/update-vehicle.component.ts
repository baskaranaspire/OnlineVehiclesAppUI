import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Vehicles } from 'src/app/models/vehicles';
import { OnlineVehicleService } from 'src/app/services/online-vehicle.service';

@Component({
  selector: 'app-update-vehicle',
  templateUrl: './update-vehicle.component.html',
  styleUrls: ['./update-vehicle.component.css']
})
export class UpdateVehicleComponent implements OnInit {

  id: string = "";
  vehicle: Vehicles = new Vehicles;
  editForm: FormGroup;
  submitted: boolean;
 
  constructor(
    public service: OnlineVehicleService,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.submitted = false;
    this.editForm = this.formBuilder.group({
      vehicleId: [''],
      vin: ['', Validators.required],
      model: ['', Validators.required],
      make : ['', Validators.required],
      year : ['', Validators.required],
    thumbnailUrl : ['',Validators.required]
    });
  }
 
  ngOnInit(): void {
    this.submitted = false;
    this.id = this.route.snapshot.params['VehicleId'];
    this.service.getVehicleById(this.id).subscribe((data: Vehicles) => {
      this.vehicle = data;
      this.editForm.patchValue(data);
    });
  }
 
  onSubmit(formData: { value: any; }) {
    this.submitted = true;
    this.service.updateVehicleById(formData.value).subscribe(res => {
      this.router.navigateByUrl('/Vehicle/list');
    });
  }

}
