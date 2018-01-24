import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { JadeService } from '../../../@core/data/jade.service';

@Component({
  selector: 'ngx-app-voicemail-user',
  templateUrl: './user.component.html',
})
export class UserComponent implements OnInit {

  list_name: string = 'Voicemail users';
  detail: any;
  source: LocalDataSource = new LocalDataSource();

  constructor(private service: JadeService) {
    console.log('Fired UserComponent.');
    this.detail = {};

    const db = service.get_voicemail_users();


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
      id: {
        title: 'ID',
        type: 'string',
      },
      new_message_count: {
        title: 'New message',
        type: 'string',
      },
      old_message_count: {
        title: 'Old message',
        type: 'string',
      },
      full_name: {
        title: 'Name',
        type: 'string',
      },
      email: {
        title: 'Email',
        type: 'string',
      },
      context: {
        title: 'Context',
        type: 'string',
      },
      mailbox: {
        title: 'Mailbox',
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
