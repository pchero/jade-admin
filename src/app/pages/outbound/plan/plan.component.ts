import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { JadeService } from '../../../@core/data/jade.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'ngx-app-outbound-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.scss'],
})
export class PlanComponent implements OnInit {

  list_name: string = 'Plans';
  detail: any = {};
  detail_variables: string;
  source: LocalDataSource = new LocalDataSource();

  constructor(private service: JadeService) {
    console.log('Fired PlanComponent.');
    this.detail = {};
    this.detail_variables = '';

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
  }

  onRowSelect(event): void {
    this.detail = event.data;
    delete this.detail.___id;
    delete this.detail.___s;
    this.detail_variables = JSON.stringify(event.data.variables, null, 2);
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      this.service.delete_ob_plan(event.data.uuid);
    }
  }

  create_handler(): void {
    this.detail.variables = JSON.parse(this.detail_variables);
    this.service.create_outbound_plan(this.detail);
  }

  update_handler(): void {
    try {
      this.detail.variables = JSON.parse(this.detail_variables);
    } catch (err) {
      this.detail.variables = {};
    }
    this.service.update_outbound_plan(this.detail.uuid, this.detail);
  }


}
