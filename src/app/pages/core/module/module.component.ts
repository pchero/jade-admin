import { Component, OnInit } from '@angular/core';
import { JadeService } from './../../../@core/data/jade.service';
import { LocalDataSource } from 'ng2-smart-table';
import { Ng2SmartTableModule } from 'ng2-smart-table';

@Component({
  selector: 'ngx-app-core-module',
  templateUrl: './module.component.html',
  styleUrls: ['./module.component.scss'],
})
export class ModuleComponent implements OnInit {

  detail: any;
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
    mode: 'external',
    delete: {
      deleteButtonContent: '<i class="nb-loop"></i>',
      confirmDelete: true,
    },
    edit: {
      editButtonContent: '<i class="nb-play-outline"></i>',
      confirmSave: true,
    },
    actions: {
      add: false,
      edit: true,
      delete: true,
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

  detail_unload_handler() {
    console.log('Check value. ' + this.detail);
    if (window.confirm('Are you sure you want to unload module?\nmodule: ' + this.detail.name)) {
      this.service.delete_core_modue(this.detail.name);
    }
  }

  onRowSelect(event): void {
    this.detail = event.data;
  };

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to reload module?\nmodule: ' + event.data.name)) {
      this.service.update_core_modue(event.data.name);
    }
  }

  onEditConfirm(event): void {
    if (window.confirm('Are you sure you want to load this module?\nmodule: ' + event.data.name)) {
      this.service.create_core_module(event.data.name);
    }
  }

}
