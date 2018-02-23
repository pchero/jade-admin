import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { JadeService } from '../../../@core/data/jade.service';

@Component({
  selector: 'ngx-app-user-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {

  list_name: string = 'AOR list';
  detail: any;
  source: LocalDataSource = new LocalDataSource();

  constructor(private service: JadeService) {
    console.log('Fired AorComponent.');
    this.detail = {};

    const db = service.get_pjsip_aors();

    this.source.load(db().get());
    db.settings({
      onDBChange: () => { this.source.load(db().get()); },
    });
  }

  ngOnInit() {
  }

  settings = {
    actions: {
      add: false,
      edit: false,
      delete: false,
      columnTitle: '',
    },
    columns: {
      object_name: {
        title: 'Name',
        type: 'string',
      },
      contacts: {
          title: 'Contacts',
          type: 'string',
        },
      max_contacts: {
        title: 'Max contacts',
        type: 'string',
      },
      total_contacts: {
          title: 'Toatal contacts',
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
    //   this.service.delete_park_parkinglot(event.data.name);
    }
  }

  private get_data_from_form(): any {
    // const data: any = {};

    // data.name = this.detail.name;
    // data.parkops = '> ' + this.detail.start_space + '-' + this.detail.stop_space;
    // data.parkingtime = this.detail.timeout.toString();

    // return data;
  }

  create_handler(): void {
    // const data = this.get_data_from_form();

    // this.service.create_park_parkinglot(data);
  }

  update_handler(): void {
    // const data = this.get_data_from_form();

    // this.service.update_park_parkinglot(data.name, data);
  }

}
