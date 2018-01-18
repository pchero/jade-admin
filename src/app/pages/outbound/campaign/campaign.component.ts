import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { JadeService } from '../../../@core/data/jade.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'ngx-app-outbound-campaign',
  templateUrl: './campaign.component.html',
  styleUrls: ['./campaign.component.scss'],
})
export class CampaignComponent implements OnInit {

  detail: any = {};
  detail_variables: string = '{}';
  list_name: string = 'Campaigns';

  source: LocalDataSource = new LocalDataSource();

  constructor(private service: JadeService) {
    console.log('Fired CampaignComponent.');
    this.detail = {};
    this.detail_variables = '{}';

    const db = service.get_ob_campaigns();

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
      status: {
        title: 'Status',
        type: 'string',
      },
    },
  };

  onRowSelect(event): void {
    this.detail = event.data;
    delete this.detail.___id;
    delete this.detail.___s;
    this.detail_variables = JSON.stringify(event.data.variables, null, 2);
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      this.service.delete_ob_campaign(event.data.uuid);
    }
  }

  create_handler(): void {
    this.detail.variables = JSON.parse(this.detail_variables);
    this.service.create_outbound_campaign(this.detail);
  }

  update_handler(): void {
    this.detail.variables = JSON.parse(this.detail_variables);
    this.service.update_outbound_campaign(this.detail.uuid, this.detail);
  }

}
