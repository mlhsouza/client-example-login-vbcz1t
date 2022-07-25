import { Component } from '@angular/core';
import { CumulocityService } from './c8y.service';

@Component({
  selector: 'c8y-app',
  templateUrl: './app.component.html',
  styleUrls: []
})
export class AppComponent {
  app: any;

  constructor(public cumulocity: CumulocityService) {}

}
