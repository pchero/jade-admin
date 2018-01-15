import { CoreRoutingModule, routedComponents } from './core-routing.module';
import { NgModule } from '@angular/core';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { ThemeModule } from '../../@theme/theme.module';
import { ModuleComponent } from './module/module.component';

@NgModule({
  imports: [
    ThemeModule,
    CoreRoutingModule,
    Ng2SmartTableModule,
  ],
  declarations: [
    ...routedComponents,
    ModuleComponent,
  ],
})
export class CoreModule { }
