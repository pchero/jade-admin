import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { JadeService } from '../../../@core/data/jade.service';
import * as PRETTYJSON from 'prettyjson';

@Component({
  selector: 'ngx-app-park-backupsettings',
  templateUrl: './backupsettings.component.html',
  styleUrls: ['./backupsettings.component.scss']
})
export class BackupsettingsComponent implements OnInit {

  list_name: string = 'Backup settings';
  detail_info: string;
  detail: string;
  source: LocalDataSource = new LocalDataSource();

  constructor(private service: JadeService) {
    console.log('Fired SettingComponent.');
    const db = service.get_park_settings();

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
      filename: {
        title: 'Filename',
        type: 'string',
      },
    },
  };

  onRowSelect(event): void {
    const data = Object.assign({}, event.data);
    delete data.___id;
    delete data.___s;

    this.detail = JSON.stringify(data, null, 2);
  };

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      this.service.delete_park_setting(event.data.filename);
    }
  };

}
