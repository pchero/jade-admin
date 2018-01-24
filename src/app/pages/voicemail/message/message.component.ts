import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { JadeService } from '../../../@core/data/jade.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'ngx-app-voicemail-message',
  templateUrl: './message.component.html',
})
export class MessageComponent implements OnInit {

  super_list_name: string = 'Voicemail users';
  super_source: LocalDataSource = new LocalDataSource();


  list_name: string = 'Voicemail messages';
  detail: any = {};
  detail_variables: any = '{}';
  source: LocalDataSource = new LocalDataSource();

  constructor(private service: JadeService) {
    console.log('Fired DiallistComponent.');

    // superset setting
    const super_db = service.get_voicemail_users();
    this.super_source.load(super_db().get());
    super_db.settings({
      onDBChange: () => { this.super_source.load(super_db().get()); },
    })
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
      id: {
        title: 'ID',
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
      full_name: {
        title: 'Full name',
        type: 'string',
      },
      new_message_count: {
        title: 'New messages',
        type: 'string',
      },
      old_message_count: {
        title: 'Old messages',
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
      callerchan: {
        title: 'Caller channel',
        type: 'string',
      },
      callerid: {
        title: 'Caller ID',
        type: 'string',
      },
      status: {
        title: 'Status',
        type: 'string',
      },
      origdate: {
        title: 'Originate datetime',
        type: 'string',
      },
      msg_id: {
        title: 'Message ID',
        type: 'string',
      },
      duration: {
        title: 'Duration',
        type: 'string',
      },
    },
  };

  onSuperRowSelect(event): void {
    this.detail = event.data;
    delete this.detail.___id;
    delete this.detail.___s;

    const db = this.service.get_voicemail_messages(event.data.context, event.data.mailbox);
    this.source.load(db().get());
    db.settings({
      onDBChange: () => { this.source.load(db().get()); },
    });
  }

  onRowSelect(event): void {
    this.detail = event.data;
    delete this.detail.___id;
    delete this.detail.___s;
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      // this.service.delete_ob_dl(event.data.uuid);
    }
  }
}
