import { Component, inject } from '@angular/core';
import { FormControl } from '@angular/forms';
import { WeatherService } from '../weather.service';
import { debounce, debounceTime, switchMap, tap } from 'rxjs';
import { LocationChangeService } from '../location-change.service';

@Component({
  selector: 'app-location-search',
  templateUrl: './location-search.component.html',
  styleUrls: ['./location-search.component.css']
})
export class LocationSearchComponent {
  q = new FormControl('');
  weatherService: WeatherService = inject(WeatherService);
  locationChangeService: LocationChangeService = inject(LocationChangeService);
  list: any[] = [];

  constructor() {
    this.q.valueChanges.pipe(
      debounceTime(1000),
      switchMap(str=>{
        return this.weatherService.searchByName(str||'');
      }),
      tap(response=>{this.list=response.results}),
    ).subscribe()
  }

  setLocation(item: any) {
    console.log("click",item);
    this.locationChangeService.changeLocation({lat: item.latitude, lng:item.longitude});
  }    

}
