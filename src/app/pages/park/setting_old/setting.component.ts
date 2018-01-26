import { Component, AfterViewInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { JadeService } from '../../../@core/data/jade.service';
import * as PRETTYJSON from 'prettyjson';

@Component({
  selector: 'ngx-app-park-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss'],
})
export class SettingComponent implements AfterViewInit {

  detail: string;
  source: LocalDataSource = new LocalDataSource();

  constructor(private service: JadeService) {
    console.log('Fired SettingComponent.');

    this.service.get_setting('park').subscribe(
      (data) => {
        this.detail = JSON.stringify(data.result, null, 2);
      },
      (err) => {
        console.log('Error. ' + err);
      },
    );
  }

  update_handler() {
    console.log('Check value. ' + this.detail);
    const data = JSON.parse(this.detail);
    this.service.update_setting('park', data);
  }

  ngAfterViewInit() {
  }

}
