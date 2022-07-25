import { Injectable } from '@angular/core';
import { Client } from '@c8y/client';

@Injectable()
export class CumulocityService {
  public client: Client;

  constructor() {}
}
