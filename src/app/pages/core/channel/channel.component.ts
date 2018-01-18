import { Component, OnInit } from '@angular/core';
import { NgIf } from '@angular/common';
import { JadeService } from './../../../@core/data/jade.service';
import { LocalDataSource } from 'ng2-smart-table';
import { Ng2SmartTableModule } from 'ng2-smart-table';

@Component({
  selector: 'ngx-app-core-channel',
  templateUrl: './channel.component.html',
  styleUrls: ['./channel.component.scss'],
})
export class ChannelComponent implements OnInit {

  detail: {} = null;
  source: LocalDataSource = new LocalDataSource();

  constructor(private service: JadeService) {
    console.log('Fired ChannelComponent.');
    const db = service.get_core_channels();

    this.source.load(db().get());
    db.settings({
      onDBChange: () => { this.source.load(db().get()); },
    });

    this.detail = null;
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
      unique_id: {
        title: 'ID',
        type: 'string',
      },
      channel: {
        title: 'Channel',
        type: 'string',
        width: '300px',
      },
      channel_state: {
        title: 'State',
        type: 'number',
        width: '80px',
      },
      channel_state_desc: {
        title: 'State Desc',
        type: 'number',
        width: '130px',
      },
      context: {
        title: 'Context',
        type: 'string',
      },
      exten: {
        title: 'Exten',
        type: 'string',
        width: '100px',
      },
      application: {
        title: 'Application',
        type: 'string',
      },
      application_data: {
        title: 'Application data',
        type: 'string',
      },
    },
  };

  onRowSelect(event): void {
    this.detail = event.data;
  };

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      this.service.delete_channel(event.data.unique_id);
    }
  };
}
