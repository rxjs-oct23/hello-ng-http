import { Component, inject } from '@angular/core';
import { IpService } from './ip.service';
import { mergeMap, tap } from 'rxjs';
import { LocationService } from './location.service';
import { WeatherService } from './weather.service';
import { LocationChangeService } from './location-change.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hello-ng-http';
  ipService: IpService = inject(IpService);
  locationService: LocationService = inject(LocationService);
  weatherService: WeatherService = inject(WeatherService);
  locationChangeService: LocationChangeService = inject(LocationChangeService);
  ip:string='';
  location:any={};
  weather: any={};

  constructor() {
    this.ipService.getIp().pipe(
      tap(ip=>{this.ip=ip}),
      mergeMap(ip=>this.locationService.getLocation(ip)),
      tap(location=>{this.location=location}),
      mergeMap(location=>this.weatherService.getWeather(location)),
      tap(weather=>{this.weather=weather}),
    ).subscribe()

    this.locationChangeService.locationChange$.pipe(
      tap(console.log),
      tap(location=>{this.location=location}),
      mergeMap(location=>this.weatherService.getWeather(location)),
      tap(weather=>{this.weather=weather}),
    ).subscribe()

  }

}
