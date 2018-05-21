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

  constructor(private jService: JadeService) {
    console.log('Fired DpmaComponent.');
    this.detail = {};
    this.create = {};

    jService.reload_dialplan_adpma();

    const db = jService.get_dialplan_adpmas();

    this.source.load(db().get());
    db.settings({
      onDBChange: () => { this.source.load(db().get()); },
    });
  }

  ngOnInit() {
  }

  settings = {
    actions: {
      add: true,
      edit: false,
      delete: true,
      columnTitle: 'Actions',
    },
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmCreate: true,
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
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
    this.jService.create_dialplan_adpma(this.create);
  }

  update_handler() {
    this.jService.update_dialplan_adpma(this.detail.uuid, this.detail);
  }

  onRowSelect(event): void {
    this.detail = Object.assign({}, event.data);
    delete this.detail.___id;
    delete this.detail.___s;
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      this.jService.delete_dialplan_adpma(event.data.uuid);
    }
  }

  private onCreateConfirm(event): void {
    console.log("Fired onCreateConfirm. dpmacomponent. " + event.newData);
    this.jService.create_dialplan_adpma(event.newData);
    event.confirm.reject();
  }

}
