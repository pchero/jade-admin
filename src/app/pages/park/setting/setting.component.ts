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

  detail_info;
  source: LocalDataSource = new LocalDataSource();

  constructor(private service: JadeService) {
    console.log('Fired SettingComponent.');

    this.detail_info = this.service.get_setting('park').subscribe(
      (data) => {
        const json_render = PRETTYJSON;
        this.detail_info = json_render.render(data.result);
      },
      (err) => {
        console.log('Error. ' + err);
      },
    );
  }

  ngAfterViewInit() {
  }

}
