import { CoreRoutingModule, routedComponents } from './core-routing.module';
import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { CoreComponent } from './core.component';

import { ThemeModule } from '../../@theme/theme.module';

@NgModule({
  imports: [
    ThemeModule,
    CoreRoutingModule,

  ],
  declarations: [
    ...routedComponents,
  ],
})
export class CoreModule { }
