import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { JadeService } from '../../../@core/data/jade.service';

@Component({
  selector: 'ngx-jade-sdp',
  templateUrl: './sdp.component.html',
  styleUrls: ['./sdp.component.scss'],
})
export class SdpComponent implements OnInit {
  source: LocalDataSource = new LocalDataSource();
  source_data: LocalDataSource = new LocalDataSource();

  private detail: any;
  private detail_create: any;

  private settings = {
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    actions: {
      add: true,
      edit: false,
      delete: true,
      columnTitle: '',
    },
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmCreate: true,
    },
    columns: {
      name: {
        title: 'Name',
        type: 'string',
      },
    },
  }

  private settings_data = {
    actions: {
      add: true,
      edit: true,
      delete: true,
      columnTitle: 'Actions',
    },
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmCreate: true,
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
    },
    columns: {
      sequence: {
        title: 'Sequence',
        type: 'number',
      },
      type: {
        title: 'Type',
        type: 'string',
      },
      data: {
        title: 'Data',
        type: 'string',
      },
    },
  }

  constructor(private jService: JadeService) {
    this.detail = {};
    this.detail_create = {};

    this.jService.reload_dialplan_sdps();

    // main
    const db = this.jService.get_dialplan_sdps();

    this.source.load(db().get());
    db.settings({
      onDBChange: () => { 
        // this.source.empty();
        this.source.load(db().get()); 
        this.detail = {}; 
      },
    });
  }

  private onRowSelect(event): void {
    this.detail = Object.assign({}, event.data);
    delete this.detail.___id;
    delete this.detail.___s;

    this.source_data.empty();
    this.source_data.refresh();

    let seq = 0;
    for(let i = 0; i < this.detail.data.length; i++) {
      const data = this.detail.data[i];

      const type = Object.keys(data)[0];
      
      const j_tmp = {
        sequence: seq,
        type: type,
        data: data[type],
      }
      this.source_data.append(j_tmp);
      seq++;
    }
  }

  private onCreateConfirm(event): void {
    console.log("Fired onCreateConfirm.");
    const j_data = {
      name: event.newData.name,
      data: [],
    }

    this.jService.create_dialplan_sdp(j_data);
    event.confirm.resolve();
  }

  private onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      this.jService.delete_dialplan_sdp(event.data.name);
    }
  }

  private onRowSelectData(event): void {

  }

  private onCreateConfirmData(event): void {
    console.log("Fired onCreateConfirmData.");
    event.confirm.resolve(event.newData);
        
    console.log("Count: " + event.source.count());    
  }

  private onDeleteConfirmData(event): void {

  }

  private update_handler(): void {

    this.source_data.setSort([{ field: 'sequence', direction: 'asc' }]);

    this.source_data.getElements().then(
      data => {
        const j_data = [];
        for(let i = 0; i < data.length; i++) {
          const j_tmp = {
            type: data[i].type,
            data: data[i].data,
          }

          j_data.push(j_tmp);
        }

        console.log(j_data);

        const j_tmp = {
          name: this.detail.name,
          data: j_data,
        }

        console.log("update data: " + j_tmp);

        this.jService.update_dialplan_sdp(j_tmp.name, j_tmp);
      },
    );
 }

  private create_handler(): void {
    console.log("Fired create_handler.");
    this.jService.create_dialplan_sdp(this.detail_create);
  }

  ngOnInit() {
    // get
  }


}
