import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ip',
  templateUrl: './ip.component.html',
  styleUrls: ['./ip.component.css']
})
export class IpComponent {
  @Input() ip:string = '0.0.0.0';
}
