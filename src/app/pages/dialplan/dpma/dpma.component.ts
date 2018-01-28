import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { JadeService } from '../../../@core/data/jade.service';

@Component({
  selector: 'ngx-app-dialplan-dpma',
  templateUrl: './dpma.component.html',
  styleUrls: ['./dpma.component.scss'],
})
export class DpmaComponent implements OnInit {

  list_name: string = 'Dynamic masters';
  detail: any;
  create: any;
  source: LocalDataSource = new LocalDataSource();

  constructor(private service: JadeService) {
    console.log('Fired DpmaComponent.');
    this.detail = {};
    this.create = {};

    const db = service.get_dp_dpmas();

    this.source.load(db().get());
    db.settings({
      onDBChange: () => { this.source.load(db().get()); },
    });
  }

  ngOnInit() {
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
      uuid: {
        title: 'UUID',
        type: 'string',
      },
      name: {
        title: 'Name',
        type: 'string',
      },
      detail: {
        title: 'Detail',
        type: 'string',
      },
    },
  }

  create_handler() {
    this.service.create_dp_dpma(this.create);
  }

  update_handler() {
    this.service.update_dp_dpma(this.detail.uuid, this.detail);
  }

  onRowSelect(event): void {
    this.detail = Object.assign({}, event.data);
    delete this.detail.___id;
    delete this.detail.___s;
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      this.service.delete_dp_dpma(event.data.uuid);
    }
  }

}
