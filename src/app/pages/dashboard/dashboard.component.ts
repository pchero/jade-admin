import { Component } from '@angular/core';
import { JadeService } from '../../@core/data/jade.service';

@Component({
  selector: 'ngx-dashboard',
  styleUrls: ['./dashboard.component.scss'],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent {

  total_calls: string;

  constructor(private service: JadeService) {
    console.log('Fired Dashboard.');

    const db_core_channels = this.service.get_core_channels();
    console.log('Length ' + db_core_channels().get().length);

    this.total_calls = db_core_channels().get().length;

    db_core_channels.settings({
      onDBChange: () => {
        console.log('Changed total call. ' + db_core_channels().get().length);
        this.total_calls = db_core_channels().get().length;
      },
    });
  }

}
