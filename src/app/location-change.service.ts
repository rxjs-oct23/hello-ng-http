import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocationChangeService {
  private locationChangeSource = new Subject<any>();
  locationChange$ = this.locationChangeSource.asObservable();

  changeLocation(newLocation:any) {
    this.locationChangeSource.next(newLocation);
  }

  constructor() { }
}
