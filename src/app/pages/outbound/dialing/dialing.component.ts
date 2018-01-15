import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { JadeService } from '../../../@core/data/jade.service';
import * as PRETTYJSON from 'prettyjson';

@Component({
  selector: 'ngx-app-outbound-dialing',
  templateUrl: './dialing.component.html',
  styleUrls: ['./dialing.component.scss']
})
export class DialingComponent implements OnInit {

  list_name: string = 'Dialings';
  detail_info: string;
  source: LocalDataSource = new LocalDataSource();

  constructor(private service: JadeService) {
    console.log('Fired DialingComponent.');
    const db = service.get_ob_dialings();

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
      uuid: {
        title: 'Uuid',
        type: 'string',
      },
      channel: {
        title: 'Channel',
        type: 'string',
      },
      status: {
        title: 'Status',
        type: 'string',
      },
      dial_channel: {
        title: 'Dial channel',
        type: 'string',
      },
      dial_addr: {
        title: 'Dial address',
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
      this.service.delete_ob_dialing(event.data.uuid);
    }
  };

}
