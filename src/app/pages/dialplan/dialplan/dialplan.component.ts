import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { JadeService } from '../../../@core/data/jade.service';

@Component({
  selector: 'ngx-app-dialplan-dialplan',
  templateUrl: './dialplan.component.html',
  styleUrls: ['./dialplan.component.scss'],
})
export class DialplanComponent implements OnInit {

  list_name: string = 'Dynamic dialplans';
  detail: any;
  create: any;
  source: LocalDataSource = new LocalDataSource();

  constructor(private jService: JadeService) {
    console.log('Fired DialplanComponent.');
    this.detail = {};
    this.create = {};

    jService.reload_dialplan_adp();

    const db = jService.get_dialplan_adps();

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
      dpma_uuid: {
        title: 'DPMA uuid',
        type: 'text',
      },
      sequence: {
        title: 'sequence',
        type: 'text',
      },
      name: {
        title: 'Name',
        type: 'text',
      },
      detail: {
        title: 'Detail',
        type: 'text',
      },
      command: {
        title: 'Command',
        type: 'text',
      },
    },
  }

  create_handler() {
    this.jService.create_dialplan_adp(this.create);
  }

  update_handler() {
    this.jService.update_dialplan_adp(this.detail.uuid, this.detail);
  }

  onRowSelect(event): void {
    this.detail = Object.assign({}, event.data);
    delete this.detail.___id;
    delete this.detail.___s;
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      this.jService.delete_dialplan_adp(event.data.uuid);
    }
  }

  private onCreateConfirm(event): void {
    console.log("Fired onCreateConfirm.");
    let data = event.newData;
    if(data.sequence) {
      data.sequence = Number(data.sequence);
    }
    this.jService.create_dialplan_adp(data);
    event.confirm.reject();
  }

}
