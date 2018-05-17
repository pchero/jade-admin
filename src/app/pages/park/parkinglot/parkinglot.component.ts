import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { JadeService } from '../../../@core/data/jade.service';

@Component({
  selector: 'ngx-app-park-parkinglot',
  templateUrl: './parkinglot.component.html',
  styleUrls: ['./parkinglot.component.scss']
})
export class ParkinglotComponent implements OnInit {

  list_name: string = 'Parking lots';
  detail: any;
  source: LocalDataSource = new LocalDataSource();

  constructor(private service: JadeService) {
    console.log('Fired ParkinglotComponent.');
    this.detail = {};

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
      delete: false,
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
      stop_space: {
        title: 'Stop space',
        type: 'string',
      },
      timeout: {
        title: 'Tiemout',
        type: 'string',
      },
    },
  }

  onRowSelect(event): void {
    this.detail = Object.assign({}, event.data);
    delete this.detail.___id;
    delete this.detail.___s;
  }

}
