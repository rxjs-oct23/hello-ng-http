import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  api_url = 'https://api.open-meteo.com/v1/forecast';
  geocoding_api_url = 'https://geocoding-api.open-meteo.com/v1/search';

  constructor(private http: HttpClient) { }

  getWeather(location: any) {
    return this.http.get(this.api_url + '?latitude=' + location.lat + '&longitude=' + location.lng + '&hourly=temperature_2m', {
      responseType: 'json',
    }).pipe(
      tap(console.log),
    )
  }

  searchByName(q: string) {
    return this.http.get(this.geocoding_api_url + '?name=' + q).pipe(
      tap(console.log),
    )
  }
}
