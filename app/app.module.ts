import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppSwitcherComponent } from './app-switcher.component';
import { LoginComponent } from './login.component';
import { ListComponent } from './list.component';
import { CumulocityService } from './c8y.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, LoginComponent, ListComponent, AppSwitcherComponent ],
  bootstrap:    [ AppComponent ],
  providers: [
    CumulocityService
  ]
})
export class AppModule { }
