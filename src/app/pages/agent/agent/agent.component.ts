import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { JadeService } from '../../../@core/data/jade.service';

@Component({
  selector: 'ngx-app-agent-agent',
  templateUrl: './agent.component.html',
  styleUrls: ['./agent.component.scss'],
})
export class AgentComponent implements OnInit {

  detail: {};
  source: LocalDataSource = new LocalDataSource();

  constructor(private service: JadeService) {
    console.log('Fired ChannelComponent.');
    this.detail = null;
    const db = service.get_agent_agents();

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
      status: {
        title: 'Status',
        type: 'string',
      },
      context: {
        title: 'Context',
        type: 'string',
      },
      exten: {
        title: 'Exten',
        type: 'string',
      },
      channel: {
        title: 'Channel',
        type: 'string',
      },
      channel_state: {
        title: 'Channel state',
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
