import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { JadeService } from '../../../@core/data/jade.service';

@Component({
  selector: 'ngx-app-user-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {

  list_name: string = 'Contact list';
  detail: any;
  detail_create: any;
  source: LocalDataSource = new LocalDataSource();

  constructor(private service: JadeService) {
    console.log('Fired ContactComponent.');
    this.detail = {};
    this.detail_create = {};

    const db = service.get_user_contacts();

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
      user_uuid: {
        title: 'User uuid',
        type: 'string',
      },
      type: {
        title: 'Type',
        type: 'string',
      },
      target: {
        title: 'Target',
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
      this.service.delete_user_contact(event.data.uuid);
    }
  }

  create_handler(): void {
    this.service.create_user_contact(this.detail_create);
  }

  update_handler(): void {
    this.service.update_user_contact(this.detail.uuid, this.detail);
  }

}
