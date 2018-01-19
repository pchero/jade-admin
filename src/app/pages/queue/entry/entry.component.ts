import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { JadeService } from '../../../@core/data/jade.service';

@Component({
  selector: 'ngx-app-queue-entry',
  templateUrl: './entry.component.html',
})
export class EntryComponent implements OnInit {

  list_name: string = 'Queue entries';
  detail: any;
  source: LocalDataSource = new LocalDataSource();

  constructor(private service: JadeService) {
    console.log('Fired EntryComponent.');
    this.detail = {};

    const db = service.get_queue_entries();

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
      queue_name: {
        title: 'Queue name',
        type: 'string',
      },
      position: {
        title: 'Position',
        type: 'string',
      },
      channel: {
        title: 'Channel name',
        type: 'string',
      },
      wait: {
        title: 'Wait',
        type: 'string',
      },
    },
  }

  onRowSelect(event): void {
    this.detail = Object.assign({}, event.data);
    delete this.detail.___id;
    delete this.detail.___s;
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      this.service.delete_queue_entry(event.data.unique_id);
    }
  }

}
