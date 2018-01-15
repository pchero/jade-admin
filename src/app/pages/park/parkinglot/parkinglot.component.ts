import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { JadeService } from '../../../@core/data/jade.service';
import * as PRETTYJSON from 'prettyjson';

@Component({
  selector: 'ngx-app-park-parkinglot',
  templateUrl: './parkinglot.component.html',
  styleUrls: ['./parkinglot.component.scss']
})
export class ParkinglotComponent implements OnInit {

  list_name: string = 'Parking lots';
  detail_info: string;
  source: LocalDataSource = new LocalDataSource();

  constructor(private service: JadeService) {
    console.log('Fired ParkinglotComponent.');
    const db = service.get_park_parkinglots();

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
      name: {
        title: 'Name',
        type: 'string',
      },
      start_space: {
        title: 'Start space',
        type: 'string',
      },
      stop_spcae: {
        title: 'Stop space',
        type: 'string',
      },
      timeout: {
        title: 'Tiemout',
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
      this.service.delete_park_parkinglot(event.data.name);
    }
  };

}
