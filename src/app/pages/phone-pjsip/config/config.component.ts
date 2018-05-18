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

  // current_detail: string;
  detail: any;
  source: LocalDataSource = new LocalDataSource();

  constructor(private jService: JadeService) {
    console.log('Fired ConfigComponent.');

    this.detail = {};

    jService.reload_pjsip_configuration();

    const db = jService.get_pjsip_configurations();
    this.source.load(db().get());
    db.settings({
      onDBChange: () => { this.source.load(db().get()); },
    });

  }

  update_handler() {
    this.jService.update_pjsip_configuration(this.detail.name, this.detail);
  }

  onRowSelect(event): void {
    this.detail = Object.assign({}, event.data);
    delete this.detail.___id;
    delete this.detail.___s;
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      this.jService.delete_pjsip_configuration(event.data.name);
    }
  }

  ngAfterViewInit() {
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
        title: 'Filename',
        type: 'string',
      },
    },
  }
}
