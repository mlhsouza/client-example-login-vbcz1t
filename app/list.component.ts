import { Component } from '@angular/core';
import { CumulocityService } from './c8y.service';
import { AlarmStatus } from '@c8y/client';
import { Severity } from '@c8y/client';

@Component({
  selector: 'c8y-list',
  templateUrl: './list.component.html',
  styleUrls: []
})
export class ListComponent {
  alarms: any = [];

  constructor(public cumulocity: CumulocityService) {
    this.cumulocity
      .client
      .alarm
      .list$()
      .subscribe((data) => this.alarms = data);
      this.getDetails();
  }

  updateStatus(alarm) {
    alarm.status = AlarmStatus.ACKNOWLEDGED;
    const { id, status } = alarm;
    this.cumulocity.client.alarm.update({ id, status });
  }

  async getDetails() {
    const test = await this.cumulocity
      .client
      .inventory
      .list({query: `name eq 'NEW NAME 0.2886094428496442'`});
    console.log(test);
  }

  async createNew() {
    const { data } = await this.cumulocity.client.inventory.create({name: 'Test device'});
    await this.cumulocity.client.alarm.create({
      source: {
        id: data.id
      },
      severity: Severity.CRITICAL,
      time: '2018-05-02T10:08:00Z',
      type: 'Test Alarm',
      text: 'This is a alarm.'
    });
  }
}
