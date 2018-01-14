import { Component, AfterViewInit, OnInit, Input } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { JadeService } from '../../../@core/data/jade.service';

@Component({
  selector: 'ngx-app-total-calls',
  templateUrl: './total-calls.component.html',
  styleUrls: ['./total-calls.component.scss'],
})
export class TotalCallsComponent implements OnInit, AfterViewInit {

  private value = 0;
  total_call: number;

  option: any = {};
  themeSubscription: any;

  ngOnInit() {
    console.log('onInit');
    const db_core_channels = this.service.get_core_channels();

    this.total_call = db_core_channels().get().length;
    db_core_channels.settings({
      onDBChange: () => {
        this.total_call = db_core_channels().get().length;
      },
    })
  }

  constructor(private theme: NbThemeService, private service: JadeService) {
  }


  ngAfterViewInit() {}
}
