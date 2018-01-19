import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { JadeService } from '../../../@core/data/jade.service';

@Component({
  selector: 'ngx-app-phone-pjsip-endpoint',
  templateUrl: './endpoint.component.html',
})
export class EndpointComponent implements OnInit {

  list_name: string = 'Endpoint list';
  detail: any;
  source: LocalDataSource = new LocalDataSource();

  constructor(private service: JadeService) {
    console.log('Fired EndpointComponent.');
    this.detail = {};

    const db = service.get_pjsip_endpoints();

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
      object_name: {
        title: 'Name',
        type: 'string',
      },
      aors: {
        title: 'AORs',
        type: 'string',
      },
      auth: {
        title: 'Auths',
        type: 'string',
      },
      transport: {
        title: 'Transports',
        type: 'string',
      },
      context: {
        title: 'Context',
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
      this.service.delete_park_parkinglot(event.data.name);
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
