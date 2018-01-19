import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { JadeService } from '../../../@core/data/jade.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'ngx-app-outbound-dl',
  templateUrl: './diallist.component.html',
})
export class DiallistComponent implements OnInit {

  super_list_name: string = 'Dial List Master';
  super_source: LocalDataSource = new LocalDataSource();


  list_name: string = 'Dial List';
  detail: any = {};
  detail_variables: any = '{}';
  source: LocalDataSource = new LocalDataSource();

  constructor(private service: JadeService) {
    console.log('Fired DiallistComponent.');

    // superset setting
    const super_db = service.get_ob_dlmas();
    this.super_source.load(super_db().get());
    super_db.settings({
      onDBChange: () => { this.super_source.load(super_db().get()); },
    })

    // // subset setting
    // this.detail = {};
    // this.detail_variables = '{}';

    // const db = service.get_ob_destinations();

    // this.source.load(db().get());
    // db.settings({
    //   onDBChange: () => { this.source.load(db().get()); },
    // });
  }

  ngOnInit() {
  }


  super_settings = {
    actions: {
      add: false,
      edit: false,
      delete: false,
      columnTitle: '',
    },
    columns: {
      name: {
        title: 'Name',
        type: 'string',
      },
      detail: {
        title: 'Detail',
        type: 'string',
      },
    },
  };

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
      detail: {
        title: 'Detail',
        type: 'string',
      },
      status: {
        title: 'status',
        type: 'string',
      },
      number_1: {
        title: 'number_1',
        type: 'string',
      },
      res_dial: {
        title: 'res_dial',
        type: 'string',
      },
      res_hangup: {
        title: 'res_hangup',
        type: 'string',
      },
    },
  };

  onSuperRowSelect(event): void {
    this.detail = event.data;
    delete this.detail.___id;
    delete this.detail.___s;

    const db = this.service.get_ob_dls(event.data.uuid);
    this.source.load(db().get());
    db.settings({
      onDBChange: () => { this.source.load(db().get()); },
    });

    this.detail_variables = JSON.stringify(event.data.variables, null, 2);
  }

  onRowSelect(event): void {
    this.detail = event.data;
    delete this.detail.___id;
    delete this.detail.___s;

    this.detail_variables = JSON.stringify(event.data.variables, null, 2);
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      this.service.delete_ob_dl(event.data.uuid);
    }
  }

  create_handler(): void {
    this.detail.variables = JSON.parse(this.detail_variables);
    this.service.create_outbound_dl(this.detail);
  }

  update_handler(): void {
    try {
      this.detail.variables = JSON.parse(this.detail_variables);
    } catch (err) {
      this.detail.variables = {};
    }
    this.service.update_outbound_dl(this.detail.uuid, this.detail);
  }


}
