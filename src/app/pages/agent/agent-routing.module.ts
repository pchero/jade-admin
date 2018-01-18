import { AgentComponent } from './agent/agent.component'
import { SettingComponent } from './setting/setting.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ThemeModule } from '../../@theme/theme.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';

const routes: Routes = [{
  path: '',
  children: [
    {
      path: 'agent',
      component: AgentComponent,
    },
    {
      path: 'setting',
      component: SettingComponent,
    },
  ],
}];

const routedComponents = [
  AgentComponent,
  SettingComponent,
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
export class AgentRoutingModule { }

