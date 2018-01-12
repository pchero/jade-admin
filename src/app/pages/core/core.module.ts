import { CoreRoutingModule, routedComponents } from './core-routing.module';
import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { CoreComponent } from './core.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { ThemeModule } from '../../@theme/theme.module';
import { ChannelComponent } from './channel/channel.component';

@NgModule({
  imports: [
    ThemeModule,
    CoreRoutingModule,
    Ng2SmartTableModule,
  ],
  declarations: [
    ...routedComponents,
    ChannelComponent,
  ],
})
export class CoreModule { }
