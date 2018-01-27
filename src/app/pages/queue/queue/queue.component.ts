import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { JadeService } from '../../../@core/data/jade.service';

@Component({
  selector: 'ngx-app-queue-queue',
  templateUrl: './queue.component.html',
})
export class QueueComponent implements OnInit {

  list_name: string = 'Queue queues';
  detail: any;
  source: LocalDataSource = new LocalDataSource();

  constructor(private service: JadeService) {
    console.log('Fired MemberComponent.');
    this.detail = {};

    const db = service.get_queue_queues();

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
      delete: false,
      columnTitle: '',
    },
    columns: {
      name: {
        title: 'Name',
        type: 'string',
      },
      completed: {
        title: 'Completed',
        type: 'string',
      },
      abandoned: {
        title: 'Abandoned',
        type: 'string',
      },
      calls: {
        title: 'Calls',
        type: 'string',
      },
      strategy: {
        title: 'Strategy',
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
      // this.service.delete_queue_entry(event.data.unique_id);
    }
  }

}
