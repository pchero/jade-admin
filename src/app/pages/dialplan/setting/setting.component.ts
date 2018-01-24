import { Component, AfterViewInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { JadeService } from '../../../@core/data/jade.service';
import * as PRETTYJSON from 'prettyjson';

@Component({
  selector: 'ngx-app-dialplan-setting',
  templateUrl: './setting.component.html',
})
export class SettingComponent implements AfterViewInit {

  detail: string;
  source: LocalDataSource = new LocalDataSource();

  constructor(private service: JadeService) {
    console.log('Fired SettingComponent.');

    this.service.get_setting_text('dp').subscribe(
      (data) => {
        // this.detail = JSON.stringify(data.result, null, 2);
        this.detail = data.result;
      },
      (err) => {
        console.log('Error. ' + err);
      },
    );
  }

  update_handler() {
    console.log('Check value. ' + this.detail);
    // const data = JSON.parse(this.detail);
    const data = this.detail;
    this.service.update_setting_text('dp', data);
  }

  ngAfterViewInit() {
  }

}
