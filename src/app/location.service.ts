import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  api_url = 'https://api.ipgeolocation.io/ipgeo';
  private API_KEY = import.meta.env.NG_APP_IPGEO_API_KEY;

  constructor(private http:HttpClient) { }

  getLocation(ip:string) {
    return this.http.get(this.api_url+'?apiKey='+this.API_KEY+'&ip='+ip, {
      responseType: 'json',
    }).pipe(
      tap(console.log),
      map((location:any)=>({lat: location.latitude, lng: location.longitude})),
      tap(console.log),
    )
  }

}
