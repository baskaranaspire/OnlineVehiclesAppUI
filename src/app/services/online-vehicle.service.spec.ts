import { TestBed } from '@angular/core/testing';

import { OnlineVehicleService } from './online-vehicle.service';

describe('OnlineVehicleService', () => {
  let service: OnlineVehicleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OnlineVehicleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
