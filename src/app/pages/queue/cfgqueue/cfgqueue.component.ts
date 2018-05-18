import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { JadeService } from '../../../@core/data/jade.service';

@Component({
  selector: 'ngx-app-queue-cfgqueue',
  templateUrl: './cfgqueue.component.html',
  styleUrls: ['./cfgqueue.component.scss']
})
export class CfgQueueComponent implements OnInit {

  list_name: string = 'Config queues';
  detail: any;
  source: LocalDataSource = new LocalDataSource();

  constructor(private jService: JadeService) {
    console.log('Fired CfgQueueComponent.');
    this.detail = {data: {}};

    const db = jService.get_queue_cfg_queues();


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
      name: {
        title: 'Name',
        type: 'string',
      },
    },
  }

  onRowSelect(event): void {
    this.detail = Object.assign({data: {}}, event.data);
    delete this.detail.___id;
    delete this.detail.___s;
  }

  private onCreateConfirm(event): void {
    console.log("Fired onCreateConfirm.");
    const j_data = {
      name: event.newData.name,
      data: {},
    }

    this.jService.create_queue_cfg_queue(j_data);
    event.confirm.reject();
  }

  private onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      this.jService.delete_queue_cfg_queue(event.data.name);
    }
  }

  update_handler(): void {
    this.jService.update_queue_cfg_queue(this.detail.name, this.detail);
  }

}
