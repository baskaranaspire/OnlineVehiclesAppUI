import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { OnlineVehicleService } from 'src/app/services/online-vehicle.service';

@Component({
  selector: 'app-create-vehicle',
  templateUrl: './create-vehicle.component.html',
  styleUrls: ['./create-vehicle.component.css']
})
export class CreateVehicleComponent implements OnInit {

  createForm : FormGroup;
  submitted : boolean;
  constructor(public service : OnlineVehicleService,
    private route : ActivatedRoute,
    private router : Router,
    private formBuilder : FormBuilder) { 
      this.submitted = false;
      this.createForm = this.formBuilder.group({
        vehicleId : ['', Validators.required],
        vin : ['',Validators.required],
        model : ['',Validators.required],
        make : ['',Validators.required],
        year : ['',Validators.required],
        thumbnailUrl :['',Validators.required],
      })
    }

  ngOnInit(): void {
  }

  onSubmit(formData: { value: any; }){
    this.submitted = true;
    this.service.createVehicle(formData.value).subscribe(res =>{

      this.router.navigateByUrl('/Vehicle/list');
    });
  }
}
