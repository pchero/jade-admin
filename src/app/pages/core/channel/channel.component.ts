import { Component, OnInit } from '@angular/core';
import { JadeService } from './../../../@core/data/jade.service';
import { LocalDataSource } from 'ng2-smart-table';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import * as PRETTYJSON from 'prettyjson';

@Component({
  selector: 'app-channel',
  templateUrl: './channel.component.html',
  styleUrls: ['./channel.component.scss']
})
export class ChannelComponent implements OnInit {

  detail_info: string;
  source: LocalDataSource = new LocalDataSource();

  constructor(private service: JadeService) {
    console.log("Fired ChannelComponent.");
    let db = service.get_core_channels();

    this.source.load(db().get());
  }

  ngOnInit() {
  }

  settings = {
    // add: {
    //   addButtonContent: '<i class="nb-plus"></i>',
    //   createButtonContent: '<i class="nb-checkmark"></i>',
    //   cancelButtonContent: '<i class="nb-close"></i>',
    // },
    // edit: {
    //   editButtonContent: '<i class="nb-edit"></i>',
    //   saveButtonContent: '<i class="nb-checkmark"></i>',
    //   cancelButtonContent: '<i class="nb-close"></i>',
    // },
    // delete: {
    //   deleteButtonContent: '<i class="nb-trash"></i>',
    //   confirmDelete: true,
    // },
    actions: {
      add: false,
      edit: false,
      delete: false,
    },
    columns: {
      unique_id: {
        title: 'ID',
        type: 'string',
      },
      channel: {
        title: 'Channel',
        type: 'string',
      },
      channel_state: {
        title: 'State',
        type: 'number',
      },
      channel_state_desc: {
        title: 'State Desc',
        type: 'number',
      },
      context: {
        title: 'Context',
        type: 'string',
      },
      exten: {
        title: 'Exten',
        type: 'string',
      },
      application: {
        title: 'Application',
        type: 'string',
      },
      application_data: {
        title: 'Application data',
        type: 'string',
      }
    },
  };

  onRowSelect(event): void {
    var json_render = PRETTYJSON;
    // console.log(event.data);
    // this.detail_info = event.data;
    // this.detail_info = JSON.stringify(event.data, null, 2);
    // console.log(json_render.render(event.data));
    this.detail_info = json_render.render(event.data)
  }

}
