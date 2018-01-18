import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { JadeService } from '../../../@core/data/jade.service';
import * as PRETTYJSON from 'prettyjson';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss']
})
export class SettingComponent implements OnInit {

  detail;
  source: LocalDataSource = new LocalDataSource();

  constructor(private service: JadeService) {
    console.log('Fired SettingComponent.');

    this.detail = this.service.get_setting('agent').subscribe(
      (data) => {
        const json_render = PRETTYJSON;
        this.detail = json_render.render(data.result);
      },
      (err) => {
        console.log('Error. ' + err);
      },
    );
  }

  ngOnInit() {

  }

}
