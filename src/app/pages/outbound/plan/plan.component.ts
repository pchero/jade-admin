import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { JadeService } from '../../../@core/data/jade.service';
import * as PRETTYJSON from 'prettyjson';

@Component({
  selector: 'ngx-app-outbound-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.scss']
})
export class PlanComponent implements OnInit {

  list_name: string = 'Plans';
  detail_info: string;
  source: LocalDataSource = new LocalDataSource();

  constructor(private service: JadeService) {
    console.log('Fired PlanComponent.');
    const db = service.get_ob_plans();

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
      detail: {
        title: 'Detail',
        type: 'string',
      },
      tech_name: {
        title: 'Tech',
        type: 'string',
      },
      trunk_name: {
        title: 'Trunk name',
        type: 'string',
      },
      dial_mode: {
        title: 'Dial mode',
        type: 'string',
      },
      dial_timeout: {
        title: 'Dial timeout',
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
      this.service.delete_ob_plan(event.data.uuid);
    }
  };

}
