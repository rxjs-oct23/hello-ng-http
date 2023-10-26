import { Component, inject } from '@angular/core';
import { IpService } from './ip.service';
import { tap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hello-ng-http';
  ipService: IpService = inject(IpService);
  ip:string='';

  constructor() {
    this.ipService.getIp().pipe(
      tap(ip=>{this.ip=ip}),
    ).subscribe()
  }

}
