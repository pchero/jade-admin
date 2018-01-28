import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { JadeService } from '../../../@core/data/jade.service';

@Component({
  selector: 'ngx-app-phone-sip-registry',
  templateUrl: './registry.component.html',
})
export class RegistryComponent implements OnInit {

  list_name: string = 'Registry list';
  detail: any;
  source: LocalDataSource = new LocalDataSource();

  constructor(private service: JadeService) {
    console.log('Fired RegistryComponent.');
    this.detail = {};

    const db = service.get_sip_registries();

    this.source.load(db().get());
    db.settings({
      onDBChange: () => { this.source.load(db().get()); },
    });
  }

  ngOnInit() {
  }

  settings = {
    actions: {
      add: false,
      edit: false,
      delete: false,
      columnTitle: '',
    },
    columns: {
      account: {
        title: 'Account',
        type: 'string',
      },
      state: {
        title: 'State',
        type: 'string',
      },
      username: {
        title: 'Username',
        type: 'string',
      },
      host: {
        title: 'Host',
        type: 'string',
      },
      port: {
        title: 'Port',
        type: 'string',
      },
    },
  }

  onRowSelect(event): void {
    this.detail = Object.assign({}, event.data);
    delete this.detail.___id;
    delete this.detail.___s;
  }

}
