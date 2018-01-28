import { DialplanComponent } from './dialplan/dialplan.component';
import { DpmaComponent } from './dpma/dpma.component';
import { ConfigComponent } from './config/config.component';

import { ThemeModule } from './../../@theme/theme.module';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ng2SmartTableModule } from 'ng2-smart-table';

const routes: Routes = [{
  path: '',
  children: [
    {
      path: 'dialplan',
      component: DialplanComponent,
    },
    {
      path: 'dpma',
      component: DpmaComponent,
    },
    {
      path: 'config',
      component: ConfigComponent,
    },
  ],
}];

const routedComponents = [
  DialplanComponent,
  DpmaComponent,

  ConfigComponent,
]

@NgModule({
  imports: [
    ThemeModule,
    RouterModule.forChild(routes),
    Ng2SmartTableModule,
  ],
  exports: [RouterModule],
  declarations: [
    ...routedComponents,
  ],
})
export class DialplanRoutingModule { }
