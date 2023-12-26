import { Injectable, Inject } from '@angular/core';  
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Vehicles } from '../models/vehicles';

@Injectable({
  providedIn: 'root'
})
export class OnlineVehicleService {

  readonly baseURL : string;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  constructor(private httpClient: HttpClient) {
    this.baseURL = 'https://localhost:44306/Employee/';
  }

  getAllVehicles(): Observable<Vehicles[]> {
    return this.httpClient.get<Vehicles[]>(this.baseURL)
      .pipe(
        catchError(this.errorHandler)
      );
  }
 
  getVehicleById(id: string): Observable<Vehicles> {
    return this.httpClient.get<Vehicles>(this.baseURL + id)
      .pipe(
        catchError(this.errorHandler)
      );
  }
 
  createVehicle(vehicle : any): Observable<Vehicles> {
    return this.httpClient.post<Vehicles>(this.baseURL, JSON.stringify(vehicle), this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      );
  }
 
  updateVehicleById(vehicle : any): Observable<Vehicles> {
    return this.httpClient.put<Vehicles>(this.baseURL + vehicle.vehicleId, JSON.stringify(vehicle), this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      );
  }
 
  deleteVehicleById(id: string) {
    return this.httpClient.delete<Vehicles>(this.baseURL + id, this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      );
  }
 
  errorHandler(error: { error: { message: string; }; status: any; message: any; }) {
    let errorMessage = '';
 
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}
