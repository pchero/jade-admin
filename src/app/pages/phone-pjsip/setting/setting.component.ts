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

  parkinglots_detail: any;
  queues_detail_member: string;
  parkinglots_create: any;
  global: any;
  source: LocalDataSource = new LocalDataSource();

  endpoint_source: LocalDataSource = new LocalDataSource();
  auth_source: LocalDataSource = new LocalDataSource();
  aor_source:  LocalDataSource = new LocalDataSource();
  contact_source:  LocalDataSource = new LocalDataSource();
  transport_source:  LocalDataSource = new LocalDataSource();

  data_settings: any;

  detail: any;

  endpoint_detail: any;

  constructor(private service: JadeService) {
    console.log('Fired SettingComponent.');
    this.parkinglots_detail = {name: '', setting: {}};
    this.parkinglots_create = {name: '', setting: {}};

    this.detail = {};
    this.endpoint_detail = {};

    this.get_setting();
  }

  get_setting() {
    console.log('Fired pjsip get_setting.');

    this.service.get_settings('pjsip').subscribe(
      (data) => {
        // get setting info and parsing
        const list = data.result.list;
        const settings = [];
        for (let i = 0; i < list.length; i++) {

          const tmp_setting = {};
          tmp_setting['_setting_name'] = list[i].name;
          for (const k in list[i].setting) {
            if (list[i].setting[k].isArray) {
              tmp_setting[k] = list[i].setting[k].member.join('\n');
            }
            else {
              tmp_setting[k] = list[i].setting[k];
            }
          }

          // push
          settings.push(tmp_setting);
        }

        // append to the source
        for (let i = 0; i < settings.length; i++) {
          const setting = settings[i];
          const type = setting['type'];

          // check type
          if (type.constructor === Array) {
            if (type.includes('aor')) {
              this.aor_source.append(setting);
            }

            if (type.includes('auth')) {
              this.auth_source.append(setting);
            }

            if (type.includes('contact')) {
              this.auth_source.append(setting);
            }

            if (type.includes('endpoint')) {
              this.endpoint_source.append(setting);
            }
          }
          else {
            if (type === 'aor') {
              this.aor_source.append(setting);
            }
            else if (type === 'auth') {
              this.auth_source.append(setting);
            }
            else if (type === 'contact') {
              this.contact_source.append(setting);
            }
            else if (type === 'endpoint') {
              this.endpoint_source.append(setting);
            }
          }
        }
      },
    );
  }

  detail_update_handler() {
    const data = {};
    for (const k in this.detail) {
      if (k === '_setting_name') {
        continue;
      }

      const match = /\r|\n/.exec(this.detail[k]);
      if (match) {
        data[k] = this.detail[k].split('\n');
      }
      else {
        data[k] = this.detail[k];
      }
    }

    this.service.update_settings_detail('pjsip', this.detail._setting_name, data);
  }

  endpoint_update_handler() {
    this.detail_update_handler();
  }

  aor_update_handler() {
    this.detail_update_handler();
  }

  auth_update_handler() {
    this.detail_update_handler();
  }

  contact_update_handler() {
    this.detail_update_handler();
  }


  detail_create_handler() {

    const data = JSON.parse(JSON.stringify(this.parkinglots_create));
    for (const k in data.setting) {
      if (!data.setting[k]) {
        delete data.setting[k];
      }
    }
    this.service.create_settings('park', data);
  }

  ngAfterViewInit() {
  }

  onRowSelect(event): void {
    this.detail = JSON.parse(JSON.stringify(event.data));
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      this.service.delete_settings_detail('park', event.data.name);
    }
  }


  endpoint_settings = {
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    actions: {
      add: false,
      edit: false,
      delete: true,
      columnTitle: '',
    },
    columns: {
      _setting_name: {
        title: 'Name',
        type: 'string',
      },
      aors: {
        title: 'AORs',
        type: 'string',
      },
      auth: {
        title: 'Auth',
        type: 'string',
      },
      transport: {
        title: 'Transport',
        type: 'string',
      },
      allow: {
        title: 'Allow',
        type: 'string',
      },
    },
  }

  aor_settings = {
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    actions: {
      add: false,
      edit: false,
      delete: true,
      columnTitle: '',
    },
    columns: {
      _setting_name: {
        title: 'Name',
        type: 'string',
      },
      max_contacts: {
        title: 'Max contacts',
        type: 'string',
      },
      remove_existing: {
        title: 'Remove existing',
        type: 'string',
      },
    },
  }

  auth_settings = {
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    actions: {
      add: false,
      edit: false,
      delete: true,
      columnTitle: '',
    },
    columns: {
      _setting_name: {
        title: 'Name',
        type: 'string',
      },
      auth_type: {
        title: 'Auth type',
        type: 'string',
      },
      username: {
        title: 'Username',
        type: 'string',
      },
      password: {
        title: 'Password',
        type: 'string',
      },
    },
  }


}
