import { NgModule } from '@angular/core';
import { NgxEchartsModule } from 'ngx-echarts';

import { ThemeModule } from '../../@theme/theme.module';
import { DashboardComponent } from './dashboard.component';

import { TotalCallsComponent } from './total-calls/total-calls.component';
import { QueueCallsComponent } from './queue-calls/queue-calls.component';


@NgModule({
  imports: [
    ThemeModule,
    NgxEchartsModule,
  ],
  declarations: [
    DashboardComponent,
    TotalCallsComponent,
    QueueCallsComponent,
  ],
})
export class DashboardModule { }
