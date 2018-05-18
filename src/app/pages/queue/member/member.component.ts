import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { JadeService } from '../../../@core/data/jade.service';

@Component({
  selector: 'ngx-app-queue-member',
  templateUrl: './member.component.html',
})
export class MemberComponent implements OnInit {

  list_name: string = 'Queue members';
  detail: any;
  create: any;
  source: LocalDataSource = new LocalDataSource();

  constructor(private jService: JadeService) {
    console.log('Fired MemberComponent.');
    this.detail = {};
    this.create = {};

    const db = jService.get_queue_members();

    this.source.load(db().get());
    db.settings({
      onDBChange: () => { this.source.load(db().get()); },
    });
  }

  ngOnInit() {
  }

  settings = {
    actions: {
      add: true,
      edit: false,
      delete: true,
      columnTitle: 'Actions',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmCreate: true,
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
      queue_name: {
        title: 'Queue name',
        type: 'string',
      },
      membership: {
        title: 'Membership',
        type: 'string',
      },
      status: {
        title: 'Status',
        type: 'string',
      },
      state_interface: {
        title: 'State interface',
        type: 'string',
      }
    },
  }

  onRowSelect(event): void {
    this.detail = Object.assign({}, event.data);
    delete this.detail.___id;
    delete this.detail.___s;
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      this.jService.delete_queue_member(event.data.id);
    }
  }

  onCreateConfirm(event): void {
    console.log("Fired onCreateConfirm.");
    console.log(event.newData);

    this.jService.create_queue_member(event.newData);
    event.confirm.reject();
  }

  update_handler() {
    this.jService.update_queue_member(this.detail.id, this.detail);
  }

}
