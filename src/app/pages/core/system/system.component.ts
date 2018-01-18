import { JadeService } from './../../../@core/data/jade.service';
import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { Ng2SmartTableModule } from 'ng2-smart-table';

@Component({
  selector: 'app-system',
  templateUrl: './system.component.html',
  styleUrls: ['./system.component.scss']
})
export class SystemComponent implements OnInit {

  detail: {};

  settings = {
    actions: {
      add: false,
      edit: false,
      delete: false,
    },
    columns: {
      id: {
        title: 'ID',
        type: 'string',
      },
      system_name: {
        title: 'System name',
        type: 'string',
      },
      ast_version: {
        title: 'Asterisk version',
        type: 'string',
      }
    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private service: JadeService) {
    console.log("Fired SystemComponent.");
    let db = service.get_core_system();

    this.source.load(db().get());
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

  onRowSelect(event): void {
    this.detail = event.data;
  }

  ngOnInit() {
  }

}
