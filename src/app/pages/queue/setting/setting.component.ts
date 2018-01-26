import { Component, AfterViewInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { JadeService } from '../../../@core/data/jade.service';
import * as PRETTYJSON from 'prettyjson';

@Component({
  selector: 'ngx-app-queue-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss'],
})
export class SettingComponent implements AfterViewInit {

  queues_detail: any;
  queues_detail_member: string;
  queues_create: any;
  global: any;
  source: LocalDataSource = new LocalDataSource();

  constructor(private service: JadeService) {
    console.log('Fired SettingComponent.');
    this.queues_detail = {name: '', setting: {}};
    this.queues_create = {name: '', setting: {}};

    const settings = this.service.get_settings('queue').subscribe(
        (data) => {
          console.log(data);

          const list = data.result.list;
          for (let i = 0; i < list.length; i++) {
            if (list[i].name === 'general') {
              this.global = list[i];
            }
            else {
              console.log(list[i]);
              const data_tmp = list[i].setting;
              data_tmp.name = list[i].name;
              this.source.add(data_tmp);
            }
          }
          this.source.refresh();
        },
      );
  }

  detail_update_handler() {
    console.log('Check value. ' + this.queues_detail);

    let data = JSON.parse(JSON.stringify(this.queues_detail));
    if (data.setting.member != null) {
      data.setting.member = data.setting.member.split('\n');
    }
    this.service.update_settings_detail('queue', data.name, data.setting);
  }

  detail_create_handler() {
    console.log('Check value. ' + this.queues_create);
    if (this.queues_create.setting.member) {
      this.queues_create.setting.member = this.queues_create.setting.member.split(',');
    }
    this.service.create_settings('queue', this.queues_create);
  }

  ngAfterViewInit() {
  }

  onRowSelect(event): void {
    const name = event.data.name;
    const setting = Object.assign({}, event.data);
    delete setting.name;

    this.queues_detail.name = name;
    this.queues_detail.setting = setting;

    if (this.queues_detail.setting.member) {
      this.queues_detail.setting.member = this.queues_detail.setting.member.join('\n');
    }
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      this.service.delete_settings_detail('queue', event.data.name);
    }
  }


  settings = {
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
      name: {
        title: 'Name',
        type: 'string',
      },
      strategy: {
        title: 'Strategy',
        type: 'string',
      },
      servicelevel: {
        title: 'Service level',
        type: 'string',
      },
      joinempty: {
        title: 'Join empty',
        type: 'string',
      },
      musicclass: {
        title: 'Music class',
        type: 'string',
      },
    },
  }
}
