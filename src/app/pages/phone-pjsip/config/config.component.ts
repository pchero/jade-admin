import { Component, AfterViewInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { JadeService } from '../../../@core/data/jade.service';
import * as PRETTYJSON from 'prettyjson';

@Component({
  selector: 'ngx-app-pjsip-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.scss'],
})
export class ConfigComponent implements AfterViewInit {

  current_detail: string;
  old_detail: string;
  old_source: LocalDataSource = new LocalDataSource();

  constructor(private service: JadeService) {
    console.log('Fired ConfigComponent.');

    // get current config
    this.service.get_config('pjsip').subscribe(
      (data) => {
        this.current_detail = data.result;
      },
      (err) => {
        console.log('Error. ' + err);
      },
    );

    const db = service.get_pjsip_configs();
    this.old_source.load(db().get());
    db.settings({
      onDBChange: () => { this.old_source.load(db().get()); },
    });

  }

  current_update_handler() {
    // console.log('Check value. ' + this.current_detail);
    const data = this.current_detail;
    this.service.update_config('pjsip', data);
  }

  current_reload_handler() {
    if (window.confirm('Are you sure you want to reload the module?')) {
      const data = this.current_detail;
      this.service.update_core_modue('res_pjsip.so');
    }
  }

  old_onRowSelect(event): void {
    this.old_detail = event.data.config;
  }

  old_onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      this.service.delete_config('pjsip', event.data.filename);
    }
  }

  ngAfterViewInit() {
  }

  old_settings = {
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
      filename: {
        title: 'Filename',
        type: 'string',
      },
    },
  }
}
