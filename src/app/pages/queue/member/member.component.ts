import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { JadeService } from '../../../@core/data/jade.service';

@Component({
  selector: 'ngx-app-queue-member',
  templateUrl: './member.component.html',
})
export class MemberComponent implements OnInit {

  list_name: string = 'Queue members';
  detail: any;
  source: LocalDataSource = new LocalDataSource();

  constructor(private service: JadeService) {
    console.log('Fired MemberComponent.');
    this.detail = {};

    const db = service.get_queue_members();

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
      id: {
        title: 'ID',
        type: 'string',
      },
      name: {
        title: 'Name',
        type: 'string',
      },
      queue_name: {
        title: 'Queue name',
        type: 'string',
      },
      membership: {
        title: 'Membership',
        type: 'string',
      },
      status: {
        title: 'Status',
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
