import { Component, OnInit } from '@angular/core';
import { CumulocityService } from './c8y.service';

@Component({
  selector: 'c8y-app-switcher',
  templateUrl: './app-switcher.component.html'
})
export class AppSwitcherComponent {
  isLoading = false;

  constructor(private cumulocity: CumulocityService) {
  }
}
