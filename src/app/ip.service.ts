import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IpService {
  api_url = 'https://api.ipify.org/';

  constructor(private http:HttpClient) { }

  getIp() {
    return this.http.get(this.api_url, {
      responseType: 'text',
    }).pipe(
      tap(console.log),
    )
  }

}
