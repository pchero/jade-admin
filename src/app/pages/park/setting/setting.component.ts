import { Component, AfterViewInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { JadeService } from '../../../@core/data/jade.service';
import * as PRETTYJSON from 'prettyjson';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss']
})
export class SettingComponent implements AfterViewInit {

  detail_info: string;
  source: LocalDataSource = new LocalDataSource();

  constructor(private service: JadeService) {
    console.log('Fired SettingComponent.');
    this.service.get_setting('park').subscribe((data) => {
      this.detail_info = data;
    });
    console.log(this.detail_info);
  }

  ngAfterViewInit() {
  }

}
