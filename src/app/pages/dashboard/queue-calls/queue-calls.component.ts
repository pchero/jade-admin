import { Component, OnInit, AfterViewInit, OnDestroy, Input } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { JadeService } from './../../../@core/data/jade.service';

@Component({
  selector: 'ngx-app-queue-calls',
  templateUrl: './queue-calls.component.html',
  styleUrls: ['./queue-calls.component.scss'],
})
export class QueueCallsComponent implements AfterViewInit, OnDestroy, OnInit {

  private value = 0;
  total_call: number;

  option: any = {};
  themeSubscription: any;

  ngOnInit() {
    console.log('onInit');
    const db = this.service.get_queue_entries();

    this.total_call = db().get().length;
    db.settings({
      onDBChange: () => {
        this.total_call = db().get().length;
      },
    })
  }

  constructor(private theme: NbThemeService, private service: JadeService) {
  }


  ngAfterViewInit() {}
}
