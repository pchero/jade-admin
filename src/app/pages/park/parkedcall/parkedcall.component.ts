import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { JadeService } from '../../../@core/data/jade.service';
import * as PRETTYJSON from 'prettyjson';

@Component({
  selector: 'app-parkedcall',
  templateUrl: './parkedcall.component.html',
  styleUrls: ['./parkedcall.component.scss']
})
export class ParkedcallComponent implements OnInit {

  list_name: string = 'Parked calls';
  detail_info: string;
  source: LocalDataSource = new LocalDataSource();

  constructor(private service: JadeService) {
    console.log('Fired CampaignComponent.');
    const db = service.get_park_parkedcalls();

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
      parkee_channel: {
        title: 'Channel',
        type: 'string',
      },
      parkee_channel_state: {
        title: 'State',
        type: 'string',
      },
      parkee_channel_state_desc: {
        title: 'State desc',
        type: 'string',
      },
      parkee_caller_id_name: {
        title: 'Name',
        type: 'string',
      },
      parkee_caller_id_num: {
        title: 'Number',
        type: 'string',
      },
      parking_lot: {
        title: 'Parking lot',
        type: 'string',
      },
      parking_space: {
        title: 'Space',
        type: 'string',
      },
    },
  };

  onRowSelect(event): void {
    const json_render = PRETTYJSON;
    this.detail_info = json_render.render(event.data)
  };

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      this.service.delete_park_parkedcall(event.data.uuid);
    }
  };

}
