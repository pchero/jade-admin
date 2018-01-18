import { Component, OnInit } from '@angular/core';
import { JadeService } from './../../../@core/data/jade.service';
import { LocalDataSource } from 'ng2-smart-table';
import { Ng2SmartTableModule } from 'ng2-smart-table';

@Component({
  selector: 'app-module',
  templateUrl: './module.component.html',
  styleUrls: ['./module.component.scss']
})
export class ModuleComponent implements OnInit {

  detail: {};
  source: LocalDataSource = new LocalDataSource();

  constructor(private service: JadeService) {
    console.log('Fired ModuleComponent.');
    this.detail = null;
    const db = service.get_core_modules();

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
      name: {
        title: 'Name',
        type: 'string',
      },
      load: {
        title: 'Load',
        type: 'string',
      },
      size: {
        title: 'Size',
        type: 'number',
      },
    },
  };

  onRowSelect(event): void {
    this.detail = event.data;
  };

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      this.service.delete_channel(event.data.unique_id);
    }
  };
}
