import { Component, Input } from '@angular/core';
import { Client, BasicAuth } from '@c8y/client';
import { CumulocityService } from './c8y.service';

@Component({
  selector: 'c8y-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  @Input() name: string;
  model = {
    user: 'marcos.hoffmann@softwareag.com',
    password: 'aninhA01',
    tenant: 'mlhoffmann',
  };
  error = {
    shown: false,
    msg: '',
  };
  disabled = false;

  constructor(private cumulocity: CumulocityService) {}

  async login() {
    this.disabled = true;
    const client = new Client(
      new BasicAuth({
        user: this.model.user,
        password: this.model.password,
        tenant: this.model.tenant,
      }),
      `https://${this.model.tenant}.staging.c8y.io`
    );

    try {
      let user = await client.user.current();
      this.cumulocity.client = client;
    } catch (ex) {
      this.cumulocity.client = null;
      this.error.shown = true;
      this.error.msg = ex.message;
    } finally {
      this.disabled = false;
    }
  }
}
