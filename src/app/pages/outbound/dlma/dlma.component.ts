import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { JadeService } from '../../../@core/data/jade.service';
import * as PRETTYJSON from 'prettyjson';

@Component({
  selector: 'app-dlma',
  templateUrl: './dlma.component.html',
  styleUrls: ['./dlma.component.scss']
})
export class DlmaComponent implements OnInit {

  list_name: string = 'Dial list masters';
  detail_info: string;
  source: LocalDataSource = new LocalDataSource();

  constructor(private service: JadeService) {
    console.log('Fired CampaignComponent.');
    const db = service.get_ob_dlmas();

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
      dl_table: {
        title: 'Table name',
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
      this.service.delete_ob_dlma(event.data.uuid);
    }
  };

}
